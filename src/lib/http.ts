import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

export const json = (body: unknown, status = 200) => NextResponse.json(body, { status });

export function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd?.split(",")[0] ?? req.headers.get("x-real-ip") ?? "unknown").trim();
}

export function hashIp(ip: string) {
  const salt = process.env.ADMIN_SESSION_SECRET ?? "ethixweb";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex").slice(0, 32);
}

/** Small in-memory limiter, good enough per serverless instance for login attempts. */
const buckets = new Map<string, { count: number; reset: number }>();
export function limited(key: string, max: number, windowMs: number) {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || b.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return false;
  }
  b.count += 1;
  return b.count > max;
}
