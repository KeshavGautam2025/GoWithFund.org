import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, phone, interest, message } = data;

    if (!name || !email || !phone || !interest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log('Volunteer request received:', {
      name,
      email,
      phone,
      interest,
      message,
    });

    // TODO: Save to database or send notification

    return NextResponse.json(
      { message: 'Volunteer request received successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing volunteer request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
