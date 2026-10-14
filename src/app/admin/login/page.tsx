"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

export default function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace("/admin");
        router.refresh();
        return;
      }
      const out = await res.json().catch(() => ({}));
      setError(out.error ?? "Login failed.");
    } catch {
      setError("Network problem. Try again.");
    }
    setBusy(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-5">
      <form onSubmit={submit} className="w-full max-w-sm space-y-5 rounded-3xl border border-line bg-white p-8 shadow-sm">
        <Logo />
        <h1 className="text-2xl font-extrabold">Admin login</h1>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-sm font-semibold">Password</label>
          <input id="password" name="password" type="password" required autoComplete="current-password" className="field" />
        </div>
        {error && <p role="alert" className="text-sm font-medium text-brand">{error}</p>}
        <button type="submit" disabled={busy} className="btn btn-primary w-full disabled:opacity-60">
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
