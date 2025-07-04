import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { amount, currency = 'INR', receipt } = await req.json();
  if (!amount) {
    return NextResponse.json({ error: 'Amount is required' }, { status: 400 });
  }

  const key_id = process.env.RAZORPAY_KEY_ID;
  const key_secret = process.env.RAZORPAY_KEY_SECRET;
  if (!key_id || !key_secret) {
    return NextResponse.json({ error: 'Razorpay credentials not set' }, { status: 500 });
  }

  const orderPayload = {
    amount: Number(amount),
    currency,
    receipt: receipt || `rcpt_${Date.now()}`,
    payment_capture: 1,
  };

  const auth = Buffer.from(`${key_id}:${key_secret}`).toString('base64');

  try {
    const rpRes = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify(orderPayload),
    });
    const data = await rpRes.json();
    if (!rpRes.ok) {
      return NextResponse.json({ error: data.error?.description || 'Failed to create order' }, { status: 500 });
    }
    return NextResponse.json({ order_id: data.id });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
} 