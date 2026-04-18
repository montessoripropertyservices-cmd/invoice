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
    const siteResponse = await fetch(baseUrl, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent": "VillaInvoiceTicketSync/1.0",
      },
      redirect: "follow",
    });
    const html = await siteResponse.text();
    const scripts = extractAppScripts(html, baseUrl);
    const usefulLinks = extractUsefulLinks(html, baseUrl);

    return response.status(200).json({
      ok: true,
      mode: "discovery",
      message:
        "Connected to Expansive FM. The site is a JavaScript app, so the next step is identifying its login/API calls from the app bundle.",
      baseUrl,
      checkedAt: new Date().toISOString(),
      usernameConfigured: Boolean(username),
      passwordConfigured: Boolean(password),
      status: siteResponse.status,
      scripts,
      usefulLinks,
      tickets: [],
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      message: "Could not reach Expansive FM from Vercel.",
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}
