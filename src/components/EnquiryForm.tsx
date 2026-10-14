"use client";

import { useRef, useState } from "react";
import { BUDGETS, SERVICES } from "@/lib/validation";

type Errors = Record<string, string>;

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-sm font-medium text-brand">{error}</p>}
    </div>
  );
}

export default function EnquiryForm() {
  const started = useRef(Date.now());
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setErrors({});
    setFormError("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ts: started.current }),
      });
      const out = await res.json().catch(() => ({}));
      if (res.ok) return setState("done");
      setErrors(out.errors ?? {});
      setFormError(out.error ?? "Something went wrong. Please try again.");
      setState("idle");
    } catch {
      setFormError("Network problem. Check your connection and try again.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className="rounded-3xl border border-line bg-mist p-8 text-center">
        <svg viewBox="0 0 48 48" className="mx-auto h-14 w-14 text-brand" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <circle cx="24" cy="24" r="21" />
          <path className="tick" d="M14 25l7 7 13-15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h2 className="mt-4 text-2xl font-extrabold">Enquiry received. Dhanyavaad!</h2>
        <p className="mt-2 text-ink-soft">We will reply within one working day on the number or email you shared.</p>
      </div>
    );
  }

  const inv = (k: string) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl border border-line bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your name" error={errors.name}>
          <input id="name" name="name" autoComplete="name" required maxLength={80} className="field" {...inv("name")} />
        </Field>
        <Field id="phone" label="Mobile number" error={errors.phone}>
          <input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel" placeholder="98765 43210" required className="field" {...inv("phone")} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className="field" {...inv("email")} />
        </Field>
        <Field id="company" label="Business name (optional)" error={errors.company}>
          <input id="company" name="company" autoComplete="organization" maxLength={120} className="field" {...inv("company")} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="service" label="What do you need?" error={errors.service}>
          <select id="service" name="service" required defaultValue="" className="field" {...inv("service")}>
            <option value="" disabled>Choose a service</option>
            {SERVICES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </Field>
        <Field id="budget" label="Budget" error={errors.budget}>
          <select id="budget" name="budget" required defaultValue="" className="field" {...inv("budget")}>
            <option value="" disabled>Choose a range</option>
            {BUDGETS.map((b) => <option key={b}>{b}</option>)}
          </select>
        </Field>
      </div>
      <Field id="message" label="Tell us about your business" error={errors.message}>
        <textarea id="message" name="message" rows={5} required maxLength={2000} className="field" {...inv("message")} />
      </Field>

      {/* Honeypot: hidden from people, irresistible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      {formError && <p role="alert" className="rounded-xl bg-brand-soft p-3 text-sm font-medium text-brand-dark">{formError}</p>}
      <button type="submit" disabled={state === "sending"} className="btn btn-primary w-full disabled:opacity-60 sm:w-auto">
        {state === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      <p className="text-sm text-ink-soft">We use your details only to reply to this enquiry.</p>
    </form>
  );
}
