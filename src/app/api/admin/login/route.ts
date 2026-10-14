import { NextResponse } from "next/server";
import { COOKIE, SESSION_SECONDS, passwordMatches, signSession } from "@/lib/auth";
import { clientIp, json, limited } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (limited(`login:${clientIp(req)}`, 5, 15 * 60_000)) {
    return json({ error: "Too many attempts. Try again in 15 minutes." }, 429);
  }
  let password = "";
  try {
    const body = await req.json();
    password = typeof body.password === "string" ? body.password : "";
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  await new Promise((r) => setTimeout(r, 400)); // slow down guessing
  try {
    if (!passwordMatches(password)) return json({ error: "Incorrect password." }, 401);
    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE, await signSession(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: SESSION_SECONDS,
    });
    return res;
  } catch (err) {
    console.error("[admin/login]", err instanceof Error ? err.message : err);
    return json({ error: "Server is not configured for admin login." }, 500);
  }
}
