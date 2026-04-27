/**
 * ==========================================
 * BrAInix Backend API Setup Guide
 * ==========================================
 * 
 * This guide helps you set up the backend server to handle:
 * 1. Mailchimp newsletter integration
 * 2. Course enrollment & email notifications
 */

/**
 * STEP 1: Install Required Packages
 * ==========================================
 * 
 * npm install express cors dotenv axios nodemailer
 * npm install -D nodemon
 */

/**
 * STEP 2: Create Backend Structure
 * ==========================================
 * 
 * backend/
 * ├── server.js
 * ├── config/
 * │   ├── mailchimp.js
 * │   └── email.js
 * ├── routes/
 * │   ├── newsletter.js
 * │   └── enrollment.js
 * ├── controllers/
 * │   ├── newsletterController.js
 * │   └── enrollmentController.js
 * ├── middleware/
 * │   └── errorHandler.js
 * ├── .env
 * └── package.json
 */

/**
 * STEP 3: Backend .env File
 * ==========================================
 */

const backend_env = `
# Server Config
PORT=5000
NODE_ENV=development

# Mailchimp Config
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_LIST_ID=your_mailchimp_list_id_here
MAILCHIMP_SERVER=us1

# Email Configuration (Gmail or your email service)
ADMIN_EMAIL=hashedtechs@gmail.com
ADMIN_EMAIL_PASSWORD=your_app_specific_password
EMAIL_SERVICE=gmail

# Frontend URL
FRONTEND_URL=http://localhost:3000
`;

/**
 * STEP 4: Backend server.js File
 * ==========================================
 */

const server_js = `
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/newsletter', require('./routes/newsletter'));
app.use('/api/enrollment', require('./routes/enrollment'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
`;

/**
 * STEP 5: Mailchimp Config (config/mailchimp.js)
 * ==========================================
 */

const mailchimp_config = `
const axios = require('axios');

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || 'us1';

const mailchimpClient = axios.create({
  baseURL: \`https://\${MAILCHIMP_SERVER}.api.mailchimp.com/3.0\`,
  auth: {
    username: 'anystring',
    password: MAILCHIMP_API_KEY
  }
});

/**
 * Subscribe email to Mailchimp list
 */
const subscribeEmail = async (email, name = '') => {
  try {
    const response = await mailchimpClient.post(
      \`/lists/\${MAILCHIMP_LIST_ID}/members\`,
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name.split(' ')[0] || '',
          LNAME: name.split(' ')[1] || ''
        }
      }
    );
    return response.data;
  } catch (error) {
    if (error.response?.status === 400 && error.response?.data?.title === 'Member Exists') {
      return { status: 'already_subscribed' };
    }
    throw error;
  }
};

module.exports = { subscribeEmail, mailchimpClient };
`;

/**
 * STEP 6: Email Config (config/email.js)
 * ==========================================
 */

const email_config = `
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD
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

  const htmlContent = \`
    <html>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #00E5FF; margin-bottom: 20px;">New Course Enrollment!</h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Course:</strong> \${courseName}</p>
            <p><strong>Student Name:</strong> \${fullName}</p>
            <p><strong>Email:</strong> \${email}</p>
            <p><strong>Phone:</strong> \${phone}</p>
            <p><strong>Experience Level:</strong> \${experience}</p>
            <p><strong>Enrollment Date:</strong> \${new Date().toLocaleString()}</p>
          </div>

          <p style="color: #666; font-size: 14px;">
            This is an automated notification from BrAInix course enrollment system.
          </p>
        </div>
      </body>
    </html>
  \`;

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: process.env.ADMIN_EMAIL,
      subject: \`New Course Enrollment: \${courseName}\`,
      html: htmlContent
    });
    return { success: true, message: 'Email sent to admin' };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

/**
 * Send enrollment confirmation to student
 */
const sendEnrollmentConfirmation = async (studentEmail, courseName, studentName) => {
  const htmlContent = \`
    <html>
      <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #00E5FF; margin-bottom: 20px;">Welcome to BrAInix! 🎓</h2>
          
          <p>Hi \${studentName},</p>
          
          <p>Thank you for enrolling in <strong>\${courseName}</strong>!</p>
          
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p>✅ Your enrollment has been confirmed</p>
            <p>📧 We'll send you course access details within 24 hours</p>
            <p>💬 If you have any questions, feel free to reply to this email</p>
          </div>

          <p>Happy learning!<br><strong>Team BrAInix</strong></p>
        </div>
      </body>
    </html>
  \`;

  try {
    await transporter.sendMail({
      from: process.env.ADMIN_EMAIL,
      to: studentEmail,
      subject: \`Welcome to BrAInix: \${courseName}\`,
      html: htmlContent
    });
    return { success: true, message: 'Confirmation email sent to student' };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

module.exports = { transporter, sendEnrollmentNotification, sendEnrollmentConfirmation };
`;

/**
 * STEP 7: Enrollment Routes (routes/enrollment.js)
 * ==========================================
 */

const enrollment_routes = `
const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.post('/register', enrollmentController.submitEnrollment);

module.exports = router;
`;

/**
 * STEP 8: Enrollment Controller (controllers/enrollmentController.js)
 * ==========================================
 */

const enrollment_controller = `
const { sendEnrollmentNotification, sendEnrollmentConfirmation } = require('../config/email');

exports.submitEnrollment = async (req, res, next) => {
  try {
    const { fullName, email, phone, courseName, experience } = req.body;

    // Validate input
    if (!fullName || !email || !phone || !courseName) {
      return res.status(400).json({
        error: 'Missing required fields'
      });
    }

    // Send notification to admin
    await sendEnrollmentNotification({
      fullName,
      email,
      phone,
      courseName,
      experience
    });

    // Send confirmation to student
    await sendEnrollmentConfirmation(email, courseName, fullName);

    res.status(201).json({
      success: true,
      message: 'Enrollment successful. Confirmation email sent.',
      enrollmentId: Date.now() // Simple ID, use proper UUID in production
    });
  } catch (error) {
    next(error);
  }
};
`;

/**
 * STEP 9: Newsletter Routes (routes/newsletter.js)
 * ==========================================
 */

const newsletter_routes = `
const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

router.post('/subscribe', newsletterController.subscribeEmail);

module.exports = router;
`;

/**
 * STEP 10: Newsletter Controller (controllers/newsletterController.js)
 * ==========================================
 */

const newsletter_controller = `
const { subscribeEmail } = require('../config/mailchimp');

exports.subscribeEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const result = await subscribeEmail(email);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      data: result
    });
  } catch (error) {
    next(error);
  }
};
`;

module.exports = {
  backend_env,
  server_js,
  mailchimp_config,
  email_config,
  enrollment_routes,
  enrollment_controller,
  newsletter_routes,
  newsletter_controller
};
