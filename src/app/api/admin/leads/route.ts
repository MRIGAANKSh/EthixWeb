
import { db } from "@/lib/supabase";
import { json } from "@/lib/http";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const { data, error, count } = await db()
      .from("leads")
      .select(
        "id, created_at, name, email, phone, company, service, budget, message, status, notes",
        { count: "exact" }
      )
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("[admin/leads GET] Supabase error:", error.message);
      return json({ error: "Could not load leads." }, 500);
    }

    const leads = data ?? [];

    console.info("[admin/leads GET] Diagnostic:", {
      returnedRows: leads.length,
      exactCount: count,
      leadIds: leads.map((lead) => lead.id),
    });

    return json({
      leads,
      total: count ?? leads.length,
    });
  } catch (err) {
    console.error(
      "[admin/leads GET]",
      err instanceof Error ? err.message : err
    );

    return json({ error: "Could not load leads." }, 500);
  }
}
