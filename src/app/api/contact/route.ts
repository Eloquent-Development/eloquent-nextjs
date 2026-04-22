import sgMail from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: NextRequest) {
  const { firstName, lastName, email, message } = await req.json();

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  try {
    await sgMail.send({
      to: process.env.CONTACT_EMAIL!,
      from: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New contact from ${firstName} ${lastName}`,
      text: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${firstName} ${lastName} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br />')}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
