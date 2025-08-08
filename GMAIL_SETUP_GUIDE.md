# Gmail App Password Setup Guide

## ⚠️ IMPORTANT: Gmail Authentication Setup Required

The email system is configured but requires Gmail App Password setup to work properly.

## 🔧 Setup Steps:

### 1. Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "2-Step Verification"
4. Follow the prompts to enable 2FA if not already enabled

### 2. Generate App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click "Security" in the left sidebar
3. Under "Signing in to Google", click "App passwords"
4. Select "Mail" as the app
5. Select "Windows Computer" as the device
6. Click "Generate"
7. Copy the 16-character app password (e.g., `abcd efgh ijkl mnop`)

### 3. Update Environment Variables
Replace the password in `.env.local`:

```bash
# Replace Het@2005 with your Gmail App Password
EMAIL_USER=main.vizatradee@gmail.com
EMAIL_PASSWORD=your-16-character-app-password-here
```

### 4. Alternative: Use Different Email Service

If Gmail doesn't work, you can use other services:

#### Using Outlook/Hotmail:
```bash
EMAIL_SERVICE=outlook
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

#### Using Yahoo:
```bash
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

#### Using Custom SMTP:
```bash
EMAIL_HOST=smtp.your-provider.com
EMAIL_PORT=587
EMAIL_USER=your-email@domain.com
EMAIL_PASSWORD=your-password
```

## 🧪 Testing the Email System

After setup, test the email system:

1. Go to `http://localhost:3000/contact`
2. Fill out the contact form
3. Submit the form
4. Check for:
   - Success message on the website
   - Thank you email in the user's inbox
   - Raw data email in main.vizatradee@gmail.com

## 🚨 Current Status

**❌ Email authentication failed with current settings**

Error: `Username and Password not accepted`

**Solution**: Follow the Gmail App Password setup above.

## 📧 Email Features (Once Working):

### ✅ Automated Thank You Emails
- Professional design with VIZA TRADE branding
- Sent to both user and company
- Includes inquiry details and next steps

### ✅ Raw Data Notifications
- Admin-focused design
- Complete form data
- Quick action buttons
- Sent only to company email

### ✅ Forms Integrated:
- ✅ Consultation booking form
- ✅ Contact page form
- ✅ Ready for country-specific forms

## 🛠️ Technical Details

**API Endpoint**: `/api/contact`
**Email Library**: Nodemailer
**Templates**: HTML with inline CSS
**Fallbacks**: Error handling and user notifications

## 📞 Support

If you need help setting up the Gmail App Password:
1. Follow Google's official guide: https://support.google.com/accounts/answer/185833
2. Or contact the development team for assistance

Once the App Password is configured, the email system will work perfectly! 🎉
