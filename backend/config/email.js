const nodemailer = require('nodemailer');

// Create email transporter
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD
  }
});

// Test connection
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email service ready');
  }
});

/**
 * Send enrollment notification to admin
 */
const sendEnrollmentNotification = async (enrollmentData) => {
  const {
    fullName,
    email,
    phone,
    courseName,
    experience
  } = enrollmentData;

  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #00E5FF; margin-bottom: 20px;">🎓 New Course Enrollment!</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #00E5FF;">
            <p><strong>📚 Course:</strong> ${courseName}</p>
            <p><strong>👤 Student Name:</strong> ${fullName}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📱 Phone:</strong> ${phone}</p>
            <p><strong>🎯 Experience Level:</strong> ${experience}</p>
            <p><strong>📅 Enrollment Date:</strong> ${new Date().toLocaleString()}</p>
          </div>

          <p style="color: #666; font-size: 14px;">
            This is an automated notification from <strong>BrAInix</strong> course enrollment system.
          </p>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `🎓 New Course Enrollment: ${courseName}`,
      html: htmlContent
    });
    console.log(`✅ Enrollment notification sent to ${process.env.ADMIN_EMAIL}`);
    return { success: true, message: 'Email sent to admin' };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
};

/**
 * Send enrollment confirmation to student
 */
const sendEnrollmentConfirmation = async (studentEmail, courseName, studentName) => {
  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #00E5FF; margin-bottom: 20px;">Welcome to BrAInix! 🎓</h2>
          
          <p>Hi ${studentName},</p>
          
          <p>Thank you for enrolling in <strong>${courseName}</strong>!</p>
          
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00E5FF;">
            <p>✅ <strong>Your enrollment has been confirmed</strong></p>
            <p>📧 We'll send you course access details within 24 hours</p>
            <p>💬 If you have any questions, feel free to reply to this email</p>
          </div>

          <p style="color: #666; font-size: 14px;">Happy learning,<br><strong>Team BrAInix</strong></p>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: studentEmail,
      subject: `✅ Welcome to BrAInix: ${courseName}`,
      html: htmlContent
    });
    console.log(`✅ Confirmation email sent to ${studentEmail}`);
    return { success: true, message: 'Confirmation email sent to student' };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
};

/**
 * Send newsletter subscription notification to admin
 */
const sendNewsletterSubscriptionNotification = async (subscriberEmail) => {
  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #00E5FF; margin-bottom: 20px;">📬 New Newsletter Subscriber!</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #00E5FF;">
            <p><strong>📧 Subscriber Email:</strong> ${subscriberEmail}</p>
            <p><strong>📅 Subscription Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>📍 Source:</strong> Get Started Free - Newsletter CTA</p>
          </div>

          <p style="color: #666; font-size: 14px;">
            This is an automated notification from <strong>BrAInix</strong> newsletter system.
          </p>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: `📬 New Newsletter Subscriber: ${subscriberEmail}`,
      html: htmlContent
    });
    console.log(`✅ Newsletter subscription notification sent to ${process.env.ADMIN_EMAIL}`);
    return { success: true, message: 'Notification sent to admin' };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
};

/**
 * Send welcome email to newsletter subscriber
 */
const sendNewsletterWelcomeEmail = async (subscriberEmail) => {
  const htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #00E5FF; margin-bottom: 20px;">Welcome to BrAInix! 🎓</h2>
          
          <p>Hi there! 👋</p>
          
          <p>Thank you for subscribing to the <strong>BrAInix</strong> newsletter! We're excited to have you on board.</p>
          
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #00E5FF;">
            <p>✅ <strong>You're all set!</strong></p>
            <p>📚 You'll receive updates about new courses, learning tips, and exclusive offers</p>
            <p>🎯 7 days free access to explore all our premium courses - no credit card needed</p>
            <p>💬 Questions? Reply to this email anytime!</p>
          </div>

          <div style="background: #fff9e6; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #FFB800;">
            <p><strong>🚀 Get Started:</strong></p>
            <p>Visit our platform to explore AI/ML, Python, Java, MERN, IoT, and Data Structures courses.</p>
          </div>

          <p style="color: #666; font-size: 14px;">Happy learning!<br><strong>Team BrAInix</strong></p>
        </div>
      </body>
    </html>
  `;

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: subscriberEmail,
      subject: `Welcome to BrAInix Newsletter! 🎓`,
      html: htmlContent
    });
    console.log(`✅ Welcome email sent to ${subscriberEmail}`);
    return { success: true, message: 'Welcome email sent to subscriber' };
  } catch (error) {
    console.error('❌ Email sending error:', error);
    throw error;
  }
};

module.exports = { 
  transporter, 
  sendEnrollmentNotification, 
  sendEnrollmentConfirmation,
  sendNewsletterSubscriptionNotification,
  sendNewsletterWelcomeEmail
};