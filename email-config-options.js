// Alternative email configurations for different providers

// Option 1: Gmail with App Password (Recommended)
const gmailConfig = {
  service: 'gmail',
  auth: {
    user: 'main.vizatradee@gmail.com',
    pass: 'your-16-character-app-password' // Get from Google Account Settings
  }
}

// Option 2: Outlook/Hotmail
const outlookConfig = {
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@outlook.com',
    pass: 'your-password'
  }
}

// Option 3: Yahoo Mail
const yahooConfig = {
  service: 'yahoo',
  auth: {
    user: 'your-email@yahoo.com',
    pass: 'your-app-password' // Yahoo also requires app password
  }
}

// Option 4: Custom SMTP (e.g., cPanel hosting)
const customConfig = {
  host: 'mail.yourdomain.com',
  port: 587,
  secure: false,
  auth: {
    user: 'noreply@yourdomain.com',
    pass: 'your-password'
  }
}

// Option 5: SendGrid (Professional email service)
const sendgridConfig = {
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: 'your-sendgrid-api-key'
  }
}
