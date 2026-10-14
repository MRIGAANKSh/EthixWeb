import { db } from "@/lib/supabase";
import { enquirySchema } from "@/lib/validation";
import { clientIp, hashIp, json } from "@/lib/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_FILL_MS = 2500;
const MAX_PER_WINDOW = 3;
const WINDOW_MIN = 10;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  // Spam layer 1: honeypot. Bots fill hidden fields; pretend success and drop it.
  if (typeof body.website === "string" && body.website.length > 0) {
    return json({ ok: true }, 201);
  }

  // Spam layer 2: time trap. Humans can't fill this form in under ~2.5s.
  const ts = Number(body.ts);
  if (!Number.isFinite(ts) || Date.now() - ts < MIN_FILL_MS) {
    return json({ error: "That was quick. Please try submitting again." }, 400);
  }

  const parsed = enquirySchema.safeParse(body);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0] ?? "form");
      errors[k] ??= issue.message;
    }
    return json({ error: "Please fix the highlighted fields.", errors }, 422);
  }

  try {
    const supabase = db();
    const ipHash = hashIp(clientIp(req));

    // Spam layer 3: DB-backed rate limit (works across serverless instances).
    const since = new Date(Date.now() - WINDOW_MIN * 60_000).toISOString();
    const { count, error: countErr } = await supabase
      .from("leads")
      .select("id", { count: "exact", head: true })
      .eq("ip_hash", ipHash)
      .gte("created_at", since);
    if (countErr) throw countErr;
    if ((count ?? 0) >= MAX_PER_WINDOW) {
      return json({ error: "Too many enquiries from your network. Please try again in a few minutes." }, 429);
    }

    const { error } = await supabase.from("leads").insert({
      ...parsed.data,
      company: parsed.data.company || null,
      ip_hash: ipHash,
      user_agent: req.headers.get("user-agent")?.slice(0, 250) ?? null,
    });
    if (error) throw error;

    return json({ ok: true }, 201);
  } catch (err) {
    console.error("[enquiry] failed", err instanceof Error ? err.message : err);
    return json({ error: "We couldn't save your enquiry. Please try again or message us on WhatsApp." }, 500);
  }
}
