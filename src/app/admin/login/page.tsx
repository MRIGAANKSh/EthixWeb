
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

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const password = String(formData.get("password") ?? "");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        router.replace("/admin");
        router.refresh();
        return;
      }

      const out = await res.json().catch(() => ({}));
      setError(out.error ?? "Invalid email or password.");
    } catch {
      setError("Network problem. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-10">
      <form
        onSubmit={submit}
        className="w-full max-w-sm space-y-5 rounded-3xl border border-line bg-white p-8 shadow-sm"
      >
        <Logo />

        <div>
          <h1 className="text-2xl font-extrabold">Admin login</h1>
          <p className="mt-2 text-sm text-ink-soft">
            Sign in to manage website enquiries.
          </p>
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-semibold"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="username"
            placeholder="admin@example.com"
            className="field w-full"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="Enter your password"
            className="field w-full"
          />
        </div>

        {error && (
          <p role="alert" className="text-sm font-medium text-brand">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="btn btn-primary w-full disabled:opacity-60"
        >
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </main>
  );
}
