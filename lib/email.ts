interface SubmissionData {
  fullName: string
  email: string
  phoneNumber: string
  reason: string
}

export async function sendNotificationEmail(data: SubmissionData) {
  try {
    // Dynamic import to avoid build-time issues
    const nodemailer = (await import('nodemailer')).default
    
    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD?.replace(/\s/g, ''), // Remove any spaces from app password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'Shubzfx@gmail.com',
      subject: `New VSL Application: ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #9c27b0;">New Application Received</h2>
          <p>You have received a new application from your VSL page.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Application Details:</h3>
            
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
            
            <div style="margin-top: 15px;">
              <strong>Reason for Applying:</strong>
              <p style="background-color: white; padding: 10px; border-left: 3px solid #9c27b0; margin-top: 5px;">
                ${data.reason.replace(/\n/g, '<br>')}
              </p>
            </div>
            
            <p style="color: #666; font-size: 12px; margin-top: 20px;">
              Submitted on: ${new Date().toLocaleString()}
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px;">
            This email was sent automatically from your VSL application form.
          </p>
        </div>
      `,
      text: `
New Application Received

Full Name: ${data.fullName}
Email: ${data.email}
Phone Number: ${data.phoneNumber}

Reason for Applying:
${data.reason}

Submitted on: ${new Date().toLocaleString()}
      `.trim(),
    }

    await transporter.sendMail(mailOptions)
    console.log('Notification email sent successfully')
    return { success: true }
  } catch (error) {
    console.error('Error sending notification email:', error)
    return { success: false, error }
  }
}
