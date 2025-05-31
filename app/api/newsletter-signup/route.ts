import { NextRequest, NextResponse } from 'next/server';
import MailerLiteClient from '@mailerlite/mailerlite-nodejs';

export async function POST(req: NextRequest) {
  try {
    const response = await req.json();
    const email = response?.email?.trim();
    if (!email || typeof email !== 'string') {
      return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
    }

    const apiKey = process.env.MAILER_LITE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: 'Server misconfiguration' },
        { status: 500 },
      );
    }

    const mailerlite = new MailerLiteClient({ api_key: apiKey });
    try {
      await mailerlite.subscribers.createOrUpdate({
        email,
        status: 'unconfirmed',
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const msg =
        err?.response?.data?.message || err?.message || 'Failed to subscribe';
      return NextResponse.json({ message: msg }, { status: 400 });
    }

    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }
}
