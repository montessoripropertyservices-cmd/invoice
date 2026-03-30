export default async function handler(request, response) {
  if (!process.env.CRON_SECRET) {
    return response.status(500).json({
      ok: false,
      message: "Missing CRON_SECRET",
    });
  }

  const authHeader = request.headers.authorization || "";
  const expectedAuth = `Bearer ${process.env.CRON_SECRET}`;

  if (authHeader !== expectedAuth) {
    return response.status(401).json({ ok: false, message: "Unauthorized" });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return response.status(500).json({
      ok: false,
      message: "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY",
    });
  }

  try {
    const keepaliveUrl = `${supabaseUrl}/rest/v1/employee_profiles?select=id&limit=1`;
    const keepaliveResponse = await fetch(keepaliveUrl, {
      method: "GET",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Accept: "application/json",
      },
    });

    const responseText = await keepaliveResponse.text();

    if (!keepaliveResponse.ok) {
      return response.status(502).json({
        ok: false,
        message: "Supabase keepalive failed",
        status: keepaliveResponse.status,
        detail: responseText,
      });
    }

    return response.status(200).json({
      ok: true,
      message: "Supabase keepalive succeeded",
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    return response.status(500).json({
      ok: false,
      message: "Supabase keepalive request failed",
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}
