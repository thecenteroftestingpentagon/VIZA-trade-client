import nodemailer from 'nodemailer'

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'main.vizatradee@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'ethg vgjq nxfw ewqo'
  },
  tls: {
    rejectUnauthorized: false
  }
})

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  country?: string
  service?: string
  message: string
  formType: string
  // Consultation-specific fields
  date?: string
  time?: string
  consultationType?: string
}

export const sendThankYouEmail = async (data: ContactFormData) => {
  const { name, email, service, country, formType, date, time, consultationType, phone } = data

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - VIZA TRADE</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background: linear-gradient(135deg, #1e3a8a 0%, #059669 100%);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          display: block;
        }
        .logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .title {
          color: #ffffff;
          font-size: 28px;
          font-weight: bold;
          margin: 0;
        }
        .subtitle {
          color: #10b981;
          font-size: 14px;
          margin: 5px 0 0 0;
        }
        .content {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 10px;
          margin: 20px 0;
        }
        .greeting {
          font-size: 20px;
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 15px;
        }
        .message {
          color: #4b5563;
          margin-bottom: 20px;
          line-height: 1.8;
        }
        .highlight-box {
          background: linear-gradient(45deg, #ecfdf5, #f0fdf4);
          border-left: 4px solid #10b981;
          padding: 20px;
          margin: 20px 0;
          border-radius: 5px;
        }
        .service-info {
          color: #059669;
          font-weight: bold;
        }
        .next-steps {
          background: #fef3c7;
          border: 1px solid #f59e0b;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .next-steps h3 {
          color: #d97706;
          margin-top: 0;
        }
        .contact-info {
          background: rgba(30, 58, 138, 0.1);
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .contact-row {
          display: flex;
          align-items: center;
          margin: 10px 0;
          color: #1e3a8a;
        }
        .icon {
          width: 20px;
          height: 20px;
          margin-right: 10px;
          font-size: 16px;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(45deg, #10b981, #059669);
          color: white;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
          margin: 20px 10px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        .social-links {
          text-align: center;
          margin: 30px 0;
        }
        .social-link {
          display: inline-block;
          margin: 0 10px;
          padding: 10px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
        }
        .footer {
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
          font-size: 12px;
          margin-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding-top: 20px;
        }
        @media (max-width: 600px) {
          body { padding: 10px; }
          .container { padding: 20px; }
          .content { padding: 20px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">
            <img src="https://i.postimg.cc/your-mail-image/mail.jpg" alt="Mail Icon" 
                 style="width: 60px; height: 60px; display: block; margin: 0 auto;" />
          </div>
          <h1 class="title">VIZA TRADE</h1>
          <p class="subtitle">Global Trade Simplified Visas</p>
        </div>

        <div class="content">
          <div class="greeting">Hello ${name}! 👋</div>
          
          <div class="message">
            Thank you for reaching out to <strong>VIZA TRADE</strong>! We have successfully received your inquiry and our expert team is already reviewing your application.
          </div>

          <div class="highlight-box">
            <div class="service-info">
              📋 <strong>Your Inquiry Details:</strong><br>
              ${service ? `🎯 Service: ${service}<br>` : ''}
              ${country ? `🌍 Country: ${country}<br>` : ''}
              ${date ? `📅 Selected Date: ${date}<br>` : ''}
              ${time ? `🕐 Time Slot: ${time}<br>` : ''}
              ${consultationType ? `📞 Type of Visit: ${consultationType === 'call' ? 'Phone Call' : 'In-Person Visit'}<br>` : ''}
              ${phone ? `📱 Mobile Number: ${phone}<br>` : ''}
              📝 Form Type: ${formType}
            </div>
          </div>

          <div class="next-steps">
            <h3>🚀 What Happens Next?</h3>
            <ul>
              <li><strong>Within 2 hours:</strong> Our consultant will review your details</li>
              <li><strong>Within 24 hours:</strong> You'll receive a personalized consultation plan</li>
              <li><strong>Free consultation:</strong> Book a detailed discussion with our visa experts</li>
            </ul>
          </div>

          <div class="contact-info">
            <h3 style="color: #1e3a8a; margin-top: 0;">📞 Contact Information</h3>
            <div class="contact-row">
              <span class="icon">📱</span>
              <span><strong>WhatsApp:</strong> +91 70160 97566</span>
            </div>
            <div class="contact-row">
              <span class="icon">📧</span>
              <span><strong>Email:</strong> main.vizatradee@gmail.com</span>
            </div>
            <div class="contact-row">
              <span class="icon">📍</span>
              <span><strong>Address:</strong> 210, Raghuvir City Centre, Anand, Gujarat</span>
            </div>
          </div>

          <div style="text-align: center;">
            <a href="https://wa.me/8160050554?text=Hi, I submitted a form and want to discuss my visa requirements" class="cta-button">
              💬 Chat on WhatsApp
            </a>
            <a href="mailto:main.vizatradee@gmail.com" class="cta-button">
              📧 Email Us
            </a>
          </div>
        </div>

        <div class="social-links">
          <a href="#" class="social-link">📘</a>
          <a href="#" class="social-link">📷</a>
          <a href="#" class="social-link">🐦</a>
          <a href="#" class="social-link">💼</a>
        </div>

        <div class="footer">
          <p>© 2025 VIZA TRADE. All rights reserved.</p>
          <p>🌟 Your trusted partner for global visa solutions</p>
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: '"VIZA TRADE" <main.vizatradee@gmail.com>',
    to: email,
    bcc: 'main.vizatradee@gmail.com',
    subject: '🎉 Thank You for Choosing VIZA TRADE - Your Application Received!',
    html: htmlContent
  }

  return await transporter.sendMail(mailOptions)
}

export const sendRawDataEmail = async (data: ContactFormData) => {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Form Submission - VIZA TRADE</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f8f9fa;
        }
        .container {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        .header {
          background: linear-gradient(135deg, #1e3a8a, #059669);
          color: white;
          padding: 30px;
          text-align: center;
        }
        .header img {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          display: block;
        }
        .header h1 {
          margin: 0;
          font-size: 24px;
        }
        .alert {
          background: #fee2e2;
          border-left: 4px solid #ef4444;
          padding: 15px;
          margin: 20px;
          border-radius: 5px;
        }
        .alert-success {
          background: #dcfce7;
          border-left-color: #22c55e;
        }
        .data-section {
          padding: 30px;
        }
        .data-row {
          display: flex;
          margin: 15px 0;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 3px solid #059669;
        }
        .data-label {
          font-weight: bold;
          color: #1e3a8a;
          min-width: 140px;
          margin-right: 20px;
        }
        .data-value {
          color: #4b5563;
          flex: 1;
          word-break: break-word;
        }
        .timestamp {
          background: #1e3a8a;
          color: white;
          padding: 10px 20px;
          text-align: center;
          font-size: 14px;
        }
        .action-buttons {
          padding: 30px;
          text-align: center;
          background: #f8f9fa;
        }
        .btn {
          display: inline-block;
          padding: 12px 24px;
          margin: 0 10px;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
          color: white;
        }
        .btn-primary {
          background: linear-gradient(45deg, #059669, #10b981);
        }
        .btn-secondary {
          background: linear-gradient(45deg, #1e3a8a, #3b82f6);
        }
        .priority {
          display: inline-block;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          color: white;
          background: #ef4444;
        }
        .priority.high { background: #ef4444; }
        .priority.medium { background: #f59e0b; }
        .priority.normal { background: #059669; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://i.postimg.cc/your-mail-image/mail.jpg" alt="Mail Icon" style="width: 60px; height: 60px; margin: 0 auto 15px; display: block;" />
          <h1>🚨 NEW FORM SUBMISSION</h1>
          <p>VIZA TRADE - Admin Dashboard</p>
        </div>

        <div class="timestamp">
          📅 Received on: ${timestamp} (IST)
        </div>

        <div class="alert alert-success">
          <strong>✅ Action Required:</strong> New customer inquiry received. Please respond within 2 hours for optimal customer experience.
          <span class="priority high">HIGH PRIORITY</span>
        </div>

        <div class="data-section">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            📋 Customer Information
          </h2>

          <div class="data-row">
            <div class="data-label">👤 Full Name:</div>
            <div class="data-value">${data.name}</div>
          </div>

          <div class="data-row">
            <div class="data-label">📧 Email Address:</div>
            <div class="data-value">
              <a href="mailto:${data.email}" style="color: #059669; text-decoration: none;">
                ${data.email}
              </a>
            </div>
          </div>

          ${data.phone ? `
          <div class="data-row">
            <div class="data-label">📱 Phone Number:</div>
            <div class="data-value">
              <a href="tel:${data.phone}" style="color: #059669; text-decoration: none;">
                ${data.phone}
              </a>
            </div>
          </div>
          ` : ''}

          ${data.country ? `
          <div class="data-row">
            <div class="data-label">🌍 Interested Country:</div>
            <div class="data-value">${data.country}</div>
          </div>
          ` : ''}

          ${data.service ? `
          <div class="data-row">
            <div class="data-label">🎯 Service Type:</div>
            <div class="data-value">${data.service}</div>
          </div>
          ` : ''}

          <div class="data-row">
            <div class="data-label">📝 Form Type:</div>
            <div class="data-value">${data.formType}</div>
          </div>

          <div class="data-row">
            <div class="data-label">💬 Message:</div>
            <div class="data-value" style="white-space: pre-wrap;">${data.message}</div>
          </div>
        </div>

        <div class="action-buttons">
          <h3 style="color: #1e3a8a;">⚡ Quick Actions</h3>
          <a href="https://wa.me/${data.phone?.replace(/[^0-9]/g, '')}?text=Hi ${data.name}, thank you for your inquiry. I'm calling from VIZA TRADE to discuss your ${data.service || 'visa'} requirements." 
             class="btn btn-primary">
            💬 WhatsApp Customer
          </a>
          <a href="mailto:${data.email}?subject=Re: Your VIZA TRADE Inquiry&body=Dear ${data.name},%0D%0A%0D%0AThank you for your inquiry..." 
             class="btn btn-secondary">
            📧 Email Customer
          </a>
        </div>

        <div style="background: #1e3a8a; color: white; padding: 20px; text-align: center;">
          <p style="margin: 0; font-size: 14px;">
            📊 <strong>Admin Panel:</strong> Log into your dashboard to manage this lead
          </p>
        </div>
      </div>
    </body>
    </html>
  `

  const mailOptions = {
    from: '"VIZA TRADE Admin" <main.vizatradee@gmail.com>',
    to: 'main.vizatradee@gmail.com',
    subject: `🚨 NEW LEAD: ${data.name} - ${data.formType} (${data.country || 'No Country'})`,
    html: htmlContent
  }

  return await transporter.sendMail(mailOptions)
}
