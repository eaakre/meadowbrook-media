import { NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body: ContactBody | null = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { name, email, message } = body;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO_EMAIL;

  if (!apiKey || !to) {
    console.warn(
      "[contact] RESEND_API_KEY or CONTACT_FORM_TO_EMAIL not set — logging submission instead of sending an email.",
      { name, email, message }
    );
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: "Website contact form <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `New contact form submission from ${name}`,
    text: message,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
