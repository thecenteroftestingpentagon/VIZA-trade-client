import { NextRequest, NextResponse } from 'next/server'
import { sendThankYouEmail, sendRawDataEmail, ContactFormData } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Prepare form data
    const formData: ContactFormData = {
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      country: body.country || '',
      service: body.service || '',
      message: body.message,
      formType: body.formType || 'General Contact',
      date: body.date || '',
      time: body.time || '',
      consultationType: body.consultationType || ''
    }

    try {
      // Send both emails simultaneously
      const [thankYouResult, rawDataResult] = await Promise.all([
        sendThankYouEmail(formData),
        sendRawDataEmail(formData)
      ])

      console.log('Thank you email sent:', thankYouResult.messageId)
      console.log('Raw data email sent:', rawDataResult.messageId)

      return NextResponse.json({
        success: true,
        message: 'Emails sent successfully',
        thankYouEmailId: thankYouResult.messageId,
        rawDataEmailId: rawDataResult.messageId
      })

    } catch (emailError) {
      console.error('Email sending error:', emailError)
      return NextResponse.json(
        {
          error: 'Failed to send emails',
          details: emailError instanceof Error ? emailError.message : 'Unknown email error'
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('API route error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
