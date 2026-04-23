import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

const LIMITS = { firstName: 100, lastName: 100, email: 254, message: 5000 };

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message, honeypot } = await req.json();

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  if (
    firstName.length > LIMITS.firstName ||
    lastName.length > LIMITS.lastName ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return NextResponse.json({ error: 'One or more fields exceed the maximum length.' }, { status: 400 });
  }

  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    await resend.emails.send({
      to: process.env.CONTACT_EMAIL!,
      from: process.env.FROM_EMAIL!,
      reply_to: email,
      subject: `New contact from ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p><p>${safeMessage}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    const body: Record<string, string> = { error: 'Failed to send message.' };
    if (process.env.NODE_ENV !== 'production') body.detail = String(err);
    return NextResponse.json(body, { status: 500 });
  }
}
