# Email System Documentation - VIZA TRADE

## Overview
The VIZA TRADE website now has a complete email system that automatically sends emails when users submit forms.

## Email Configuration
- **Email Service**: Gmail SMTP
- **Sender Email**: main.vizatradee@gmail.com
- **Password**: Het@2005

## How It Works

### When a user submits any form, TWO emails are automatically sent:

#### 1. Thank You Email (Sent to both user and company)
- **Recipients**: User's email + main.vizatradee@gmail.com
- **Purpose**: Professional thank you message with next steps
- **Features**:
  - Beautiful HTML design with VIZA TRADE branding
  - Personalized greeting with user's name
  - Summary of their inquiry (service, country, form type)
  - Contact information and WhatsApp links
  - Professional layout with company colors

#### 2. Raw Data Email (Sent only to company)
- **Recipient**: main.vizatradee@gmail.com only
- **Purpose**: Internal notification with complete form data
- **Features**:
  - Admin-focused design
  - All form data in organized format
  - Quick action buttons (WhatsApp, Email)
  - Timestamp and priority indicators
  - Customer contact details for immediate follow-up

## Forms Using This System

### 1. Consultation Form (`/components/consultation-form.tsx`)
- Used for booking consultations
- Includes: name, email, phone, service, date, time, countries
- Form Type: "Consultation Booking"

### 2. Contact Form (`/components/contact-form.tsx`)
- Used on contact page
- Includes: name, email, phone, country, service, message
- Form Type: "General Contact Form"

### 3. Country Page Forms
- Can be easily added to any country work page
- Same structure as contact form

## API Endpoint

**POST /api/contact**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "country": "USA",
  "service": "Work Visa",
  "message": "I want to apply for work visa",
  "formType": "General Contact Form"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Emails sent successfully",
  "thankYouEmailId": "email-id-1",
  "rawDataEmailId": "email-id-2"
}
```

## Email Templates

### Thank You Email Features:
- 🎨 Professional gradient design
- 🏢 Company branding and logo
- 📋 Summary of inquiry details
- 🚀 Next steps timeline
- 📞 Contact information
- 💬 WhatsApp quick action
- 📱 Mobile responsive

### Raw Data Email Features:
- 🚨 High priority notification
- 📊 Organized data presentation
- ⚡ Quick action buttons
- 🕐 Timestamp in IST
- 📋 Complete form data
- 🎯 Admin-focused design

## Security & Environment
- Email credentials stored in `.env.local`
- Uses Gmail App Password for security
- Nodemailer with Gmail SMTP

## Testing
1. Visit any form on the website
2. Fill out the form completely
3. Submit the form
4. Check both emails:
   - User should receive thank you email
   - Company should receive both thank you and raw data emails

## Customization
To add email functionality to any new form:

1. Import the email functions:
```tsx
import { sendThankYouEmail, sendRawDataEmail } from '@/lib/email'
```

2. Call the API endpoint:
```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## Troubleshooting
- Make sure `.env.local` file exists with correct email credentials
- Check Gmail "Less secure app access" or use App Password
- Verify nodemailer is installed: `npm install nodemailer @types/nodemailer`
- Check console for error messages

## Contact
For technical issues with the email system, contact the development team.
