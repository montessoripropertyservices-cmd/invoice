const ticketKeywords = [
  "ticket",
  "work order",
  "request",
  "maintenance",
  "service",
  "issue",
];

function getEnvValue(name) {
  return String(process.env[name] || "").trim();
}

function cleanBaseUrl(value) {
  return value.replace(/\/+$/, "");
}

function getSetCookieHeaders(headers) {
  if (typeof headers.getSetCookie === "function") {
    return headers.getSetCookie();
  }

  const cookieHeader = headers.get("set-cookie");
  return cookieHeader ? [cookieHeader] : [];
}

function appendCookies(cookieJar, headers) {
  getSetCookieHeaders(headers).forEach((cookieValue) => {
    const firstPart = cookieValue.split(";")[0];
    const separatorIndex = firstPart.indexOf("=");

    if (separatorIndex > 0) {
      cookieJar.set(firstPart.slice(0, separatorIndex), firstPart.slice(separatorIndex + 1));
    }
  });
}

function getCookieHeader(cookieJar) {
  return [...cookieJar.entries()].map(([name, value]) => `${name}=${value}`).join("; ");
}

function getCookieValue(cookieJar, name) {
  const value = cookieJar.get(name);
  return value ? decodeURIComponent(value) : "";
}

function getBrowserLikeHeaders(baseUrl, cookieJar) {
  const xsrfToken = getCookieValue(cookieJar, "XSRF-TOKEN");

  return {
    Cookie: getCookieHeader(cookieJar),
    Origin: baseUrl,
    Referer: `${baseUrl}/login`,
    ...(xsrfToken ? { "X-XSRF-TOKEN": xsrfToken } : {}),
  };
}

function extractUsefulLinks(html, baseUrl) {
  const links = [];
  const seen = new Set();
  const linkPattern = /<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;
  let match = linkPattern.exec(html);

  while (match) {
    const href = match[1] || "";
    const label = (match[2] || "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const lower = `${href} ${label}`.toLowerCase();

    if (ticketKeywords.some((keyword) => lower.includes(keyword))) {
      const url = new URL(href, baseUrl).toString();

      if (!seen.has(url)) {
        seen.add(url);
        links.push({ label: label || url, url });
      }
    }

    match = linkPattern.exec(html);
  }

  return links.slice(0, 25);
}

function extractAppScripts(html, baseUrl) {
  const scripts = [];
  const seen = new Set();
  const scriptPattern = /<script\b[^>]*src=["']([^"']+)["'][^>]*>/gi;
  let match = scriptPattern.exec(html);

  while (match) {
    const src = match[1] || "";
    const url = new URL(src, baseUrl).toString();

    if (!seen.has(url)) {
      seen.add(url);
      scripts.push(url);
    }

    match = scriptPattern.exec(html);
  }

  return scripts.slice(0, 20);
}

function asText(value) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  if (typeof value === "object") {
    return value.display || value.name || value.label || value.title || value.value || "";
  }

  return String(value);
}

function getIncludedResource(included, relationship) {
  const data = relationship?.data;

  if (!data || Array.isArray(data)) {
    return null;
  }

  return included.find((item) => item.type === data.type && String(item.id) === String(data.id)) || null;
}

function normalizeTickets(payload, baseUrl) {
  const items = Array.isArray(payload?.data) ? payload.data : [];
  const included = Array.isArray(payload?.included) ? payload.included : [];

  return items.slice(0, 100).map((item) => {
    const attributes = item.attributes || item;
    const site = getIncludedResource(included, item.relationships?.site);
    const location =
      asText(attributes.site) ||
      asText(attributes.site_name) ||
      asText(attributes.location) ||
      asText(site?.attributes?.name);
    const number =
      asText(attributes.reference) ||
      asText(attributes.reference_number) ||
      asText(attributes.work_order_number) ||
      asText(attributes.number) ||
      asText(attributes.identifier) ||
      String(item.id || "");
    const title =
      asText(attributes.title) ||
      asText(attributes.summary) ||
      asText(attributes.name) ||
      asText(attributes.description) ||
      "Work Order";

    return {
      id: String(item.id || number),
      number,
      title,
      location,
      status: asText(attributes.status || attributes.state || attributes.workflow_state),
      priority: asText(attributes.priority || attributes.work_order_priority),
      createdAt: asText(attributes.created_at),
      dueAt: asText(attributes.due_at || attributes.due_date || attributes.target_date),
      url: `${baseUrl}/work-order/${encodeURIComponent(item.id || number)}`,
      raw: attributes,
    };
  });
}

async function fetchJson(url, options = {}) {
  const result = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/json",
      ...(options.headers || {}),
    },
  });
  const text = await result.text();
  let data = null;

  try {
    data = text ? JSON.parse(text) : null;
  } catch (_error) {
    data = { raw: text };
  }

  return { result, data, text };
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const baseUrl = cleanBaseUrl(getEnvValue("EXPANSIVEFM_BASE_URL"));
  const username = getEnvValue("EXPANSIVEFM_USERNAME");
  const password = getEnvValue("EXPANSIVEFM_PASSWORD");

  if (!baseUrl || !username || !password) {
    return response.status(500).json({
      ok: false,
      message:
        "Missing EXPANSIVEFM_BASE_URL, EXPANSIVEFM_USERNAME, or EXPANSIVEFM_PASSWORD in Vercel.",
    });
  }

  try {
    const workOrderPageUrl = `${baseUrl}/work-order?sort=-created_at`;
    const siteResponse = await fetch(workOrderPageUrl, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "VillaInvoiceTicketSync/1.0",
      },
      redirect: "follow",
    });
    const html = await siteResponse.text();
    const scripts = extractAppScripts(html, baseUrl);
    const usefulLinks = extractUsefulLinks(html, baseUrl);
    const cookieJar = new Map();

    appendCookies(cookieJar, siteResponse.headers);

    const csrfResponse = await fetchJson(`${baseUrl}/api/csrf-cookie`, {
      headers: getBrowserLikeHeaders(baseUrl, cookieJar),
      redirect: "manual",
    });

    appendCookies(cookieJar, csrfResponse.result.headers);

    const loginResponse = await fetchJson(`${baseUrl}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...getBrowserLikeHeaders(baseUrl, cookieJar),
      },
      body: JSON.stringify({ username, password }),
      redirect: "manual",
    });

    appendCookies(cookieJar, loginResponse.result.headers);

    if (!loginResponse.result.ok) {
      return response.status(401).json({
        ok: false,
        mode: "auth",
        message:
          csrfResponse.result.ok
            ? "Expansive FM login failed. Check EXPANSIVEFM_USERNAME and EXPANSIVEFM_PASSWORD in Vercel."
            : "Expansive FM login failed before authentication because the CSRF cookie could not be created.",
        csrfStatus: csrfResponse.result.status,
        status: loginResponse.result.status,
        detail: loginResponse.data?.message || loginResponse.text,
        scripts,
        usefulLinks,
      });
    }

    const ticketUrl = `${baseUrl}/api/work_order?sort=-created_at`;
    const ticketResponse = await fetchJson(ticketUrl, {
      headers: getBrowserLikeHeaders(baseUrl, cookieJar),
    });

    appendCookies(cookieJar, ticketResponse.result.headers);

    if (!ticketResponse.result.ok) {
      return response.status(502).json({
        ok: false,
        mode: "tickets",
        message: "Logged in to Expansive FM, but could not read work orders yet.",
        status: ticketResponse.result.status,
        detail: ticketResponse.data?.message || ticketResponse.text,
        workOrderPageUrl,
        ticketUrl,
        scripts,
        usefulLinks,
      });
    }

    const tickets = normalizeTickets(ticketResponse.data, baseUrl);

    return response.status(200).json({
      ok: true,
      mode: tickets.length ? "tickets" : "tickets-empty",
      message: tickets.length
        ? `Loaded ${tickets.length} Expansive FM work orders.`
        : "Logged in to Expansive FM, but no work orders were returned by the current filter.",
      baseUrl,
      workOrderPageUrl,
      ticketUrl,
      checkedAt: new Date().toISOString(),
      usernameConfigured: Boolean(username),
      passwordConfigured: Boolean(password),
      status: ticketResponse.result.status,
      scripts,
      usefulLinks,
      meta: ticketResponse.data?.meta || null,
      tickets,
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      message: "Could not reach Expansive FM from Vercel.",
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}
