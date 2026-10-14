"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { STATUSES, type LeadStatus } from "@/lib/validation";

type Lead = {
  id: string; created_at: string; name: string; email: string; phone: string;
  company: string | null; service: string; budget: string; message: string;
  status: LeadStatus; notes: string | null;
};

const badge: Record<LeadStatus, string> = {
  new: "bg-brand-soft text-brand-dark",
  contacted: "bg-blue-100 text-blue-900",
  qualified: "bg-amber-100 text-amber-900",
  won: "bg-green-100 text-green-900",
  lost: "bg-gray-200 text-gray-700",
};

const fmt = (iso: string) =>
  new Date(iso).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" });

export default function AdminPage() {
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<LeadStatus | "all">("all");
  const [q, setQ] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/leads", { cache: "no-store" });
      if (res.status === 401) return router.replace("/admin/login");
      const out = await res.json();
      if (!res.ok) throw new Error(out.error);
      setLeads(out.leads);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load leads.");
    }
    setLoading(false);
  }, [router]);

  useEffect(() => { load(); }, [load]);

  async function patch(id: string, body: Partial<Pick<Lead, "status" | "notes">>) {
    const prev = leads;
    setLeads((l) => l.map((x) => (x.id === id ? { ...x, ...body } : x)));
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) { setLeads(prev); setError("Update failed. Changes were reverted."); }
  }

  async function remove(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    const res = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
    if (res.ok) setLeads((l) => l.filter((x) => x.id !== id));
    else setError("Delete failed.");
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
  }

  function exportCsv() {
    const esc = (v: string | null) => `"${(v ?? "").replace(/"/g, '""')}"`;
    const rows = [["Date", "Name", "Phone", "Email", "Company", "Service", "Budget", "Status", "Message", "Notes"],
      ...visible.map((l) => [fmt(l.created_at), l.name, l.phone, l.email, l.company, l.service, l.budget, l.status, l.message, l.notes])];
    const blob = new Blob([rows.map((r) => r.map((c) => esc(c as string | null)).join(",")).join("\n")], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ethixweb-leads.csv";
    a.click();
    URL.revokeObjectURL(a.href);
  }

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    STATUSES.forEach((s) => (c[s] = leads.filter((l) => l.status === s).length));
    return c;
  }, [leads]);

  const visible = useMemo(() => {
    const t = q.trim().toLowerCase();
    return leads.filter(
      (l) => (filter === "all" || l.status === filter) &&
        (!t || [l.name, l.email, l.phone, l.company ?? "", l.message].some((f) => f.toLowerCase().includes(t))),
    );
  }, [leads, filter, q]);

  return (
    <div className="mx-auto max-w-5xl px-5 py-8">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4"><Logo /><h1 className="text-xl font-extrabold">Leads</h1></div>
        <div className="flex gap-2">
          <button onClick={load} className="btn btn-ghost !py-2">Refresh</button>
          <button onClick={exportCsv} disabled={!visible.length} className="btn btn-ghost !py-2 disabled:opacity-50">Export CSV</button>
          <button onClick={logout} className="btn btn-primary !py-2">Log out</button>
        </div>
      </header>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {(["all", ...STATUSES] as const).map((s) => (
          <button key={s} onClick={() => setFilter(s)} aria-pressed={filter === s}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold capitalize transition ${filter === s ? "border-ink bg-ink text-white" : "border-line bg-white hover:border-ink"}`}>
            {s} ({counts[s] ?? 0})
          </button>
        ))}
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search name, phone, email…" aria-label="Search leads" className="field ml-auto !w-full !py-2 sm:!w-64" />
      </div>

      {error && <p role="alert" className="mt-4 rounded-xl bg-brand-soft p-3 text-sm font-medium text-brand-dark">{error}</p>}

      <div className="mt-6 space-y-4">
        {loading && <p className="text-ink-soft">Loading leads…</p>}
        {!loading && !visible.length && <p className="rounded-2xl border border-dashed border-line bg-white p-8 text-center text-ink-soft">No leads here yet. New enquiries from the contact form will appear in this list.</p>}
        {visible.map((l) => (
          <article key={l.id} className="rounded-2xl border border-line bg-white p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold">{l.name}{l.company ? <span className="font-normal text-ink-soft"> · {l.company}</span> : null}</h2>
                <p className="text-sm text-ink-soft">{fmt(l.created_at)} IST</p>
              </div>
              <label className="flex items-center gap-2 text-sm font-semibold">
                <span className="sr-only">Status</span>
                <select value={l.status} onChange={(e) => patch(l.id, { status: e.target.value as LeadStatus })}
                  className={`rounded-full border-0 px-3 py-1.5 text-sm font-semibold capitalize ${badge[l.status]}`}>
                  {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </label>
            </div>
            <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-semibold">
              <a className="link-u text-brand" href={`tel:+91${l.phone}`}>+91 {l.phone}</a>
              <a className="link-u text-brand" href={`https://wa.me/91${l.phone}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <a className="link-u text-brand" href={`mailto:${l.email}`}>{l.email}</a>
            </p>
            <p className="mt-3 text-sm text-ink-soft"><b className="text-ink">{l.service}</b> · {l.budget}</p>
            <p className="mt-2 whitespace-pre-wrap">{l.message}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <textarea defaultValue={l.notes ?? ""} rows={2} placeholder="Internal notes (saved when you click away)" aria-label={`Notes for ${l.name}`}
                onBlur={(e) => e.target.value !== (l.notes ?? "") && patch(l.id, { notes: e.target.value })} className="field flex-1 !py-2 text-sm" />
              <button onClick={() => remove(l.id)} className="self-start rounded-full px-4 py-2 text-sm font-semibold text-brand hover:bg-brand-soft">Delete</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
