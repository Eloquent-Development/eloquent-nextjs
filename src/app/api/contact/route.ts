import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message, honeypot } = await req.json();

  if (honeypot) {
    return NextResponse.json({ success: true });
  }

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      to: process.env.CONTACT_EMAIL!,
      from: process.env.FROM_EMAIL!,
      reply_to: email,
      subject: `New contact from ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br />')}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send message.', detail: String(err) }, { status: 500 });
  }
}
