import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const position = formData.get('position') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const cv = formData.get('cv') as File | null;

    // Simple validation
    if (!name || !email || !position || !cv) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Example: Log received data
    console.log('Received career application:', {
      name,
      email,
      position,
      coverLetter,
      cvName: cv.name,
      cvSize: cv.size,
      cvType: cv.type,
    });

    // TODO: Save text fields & CV file to database / cloud storage

    return NextResponse.json({ message: 'Application received successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing career application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
