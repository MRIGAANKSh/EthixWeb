import { db } from "@/lib/supabase";
import { json } from "@/lib/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await db()
      .from("leads")
      .select("id, created_at, name, email, phone, company, service, budget, message, status, notes")
      .order("created_at", { ascending: false })
      .limit(500);
    if (error) throw error;
    return json({ leads: data });
  } catch (err) {
    console.error("[admin/leads GET]", err instanceof Error ? err.message : err);
    return json({ error: "Could not load leads." }, 500);
  }
}
