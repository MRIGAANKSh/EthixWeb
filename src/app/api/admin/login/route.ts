
import { NextResponse } from "next/server";
import {
  COOKIE,
  SESSION_SECONDS,
  passwordMatches,
  signSession,
} from "@/lib/auth";
import { clientIp, json, limited } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(req: Request) {
  if (limited(`login:${clientIp(req)}`, 5, 15 * 60_000)) {
    return json(
      { error: "Too many attempts. Try again in 15 minutes." },
      429
    );
  }

  let email = "";
  let password = "";

  try {
    const body = await req.json();

    email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    password =
      typeof body.password === "string"
        ? body.password
        : "";
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  await new Promise((resolve) => setTimeout(resolve, 400));

  try {
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

    if (!adminEmail || !process.env.ADMIN_PASSWORD) {
      return json(
        { error: "Admin login is not configured." },
        500
      );
    }

    // Check both credentials on the server.
    const emailMatches = email.length > 0 && email === adminEmail;
    const passwordIsValid = passwordMatches(password);

    if (!emailMatches || !passwordIsValid) {
      return json(
        { error: "Invalid email or password." },
        401
      );
    }

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
    console.error(
      "[admin/login]",
      err instanceof Error ? err.message : err
    );

    return json(
      { error: "Server is not configured for admin login." },
      500
    );
  }
}
