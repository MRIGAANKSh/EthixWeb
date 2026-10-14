import { db } from "@/lib/supabase";
import { json } from "@/lib/http";
import { leadPatchSchema } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  if (!UUID.test(params.id)) return json({ error: "Invalid lead id." }, 400);
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const parsed = leadPatchSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.issues[0]?.message ?? "Invalid data." }, 422);
  try {
    const { error } = await db().from("leads").update(parsed.data).eq("id", params.id);
    if (error) throw error;
    return json({ ok: true });
  } catch (err) {
    console.error("[admin/leads PATCH]", err instanceof Error ? err.message : err);
    return json({ error: "Could not update lead." }, 500);
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  if (!UUID.test(params.id)) return json({ error: "Invalid lead id." }, 400);
  try {
    const { error } = await db().from("leads").delete().eq("id", params.id);
    if (error) throw error;
    return json({ ok: true });
  } catch (err) {
    console.error("[admin/leads DELETE]", err instanceof Error ? err.message : err);
    return json({ error: "Could not delete lead." }, 500);
  }
}
