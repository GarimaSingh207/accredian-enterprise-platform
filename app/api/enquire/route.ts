import { NextResponse } from 'next/server';
import { validateEnquireForm } from '@/lib/validators';
import { EnquireRequest, EnquireResponse } from '@/types/api.types';

export async function POST(request: Request) {
  try {
    const body: EnquireRequest = await request.json();

    // Server-side validation
    const validationErrors = validateEnquireForm(body);
    if (Object.keys(validationErrors).length > 0) {
      const response: EnquireResponse = {
        success: false,
        error: 'Validation error',
        details: validationErrors,
      };
      return NextResponse.json(response, { status: 400 });
    }

    // Console log for mock persistence audit
    console.log('New Enterprise Enquiry Received:', {
      timestamp: new Date().toISOString(),
      ...body,
    });

    // TODO: Integrate DB write or notification provider (e.g. Resend / SendGrid / Slack Webhook)
    // await sendSlackNotification(body);

    const response: EnquireResponse = {
      success: true,
      message: "Thank you! We've received your enquiry and our L&D team will contact you within 24 hours.",
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Enquiry API Error:', error);
    const response: EnquireResponse = {
      success: false,
      error: 'An internal server error occurred. Please try again later.',
    };
    return NextResponse.json(response, { status: 500 });
  }
}
