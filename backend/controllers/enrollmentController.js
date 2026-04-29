const { sendEnrollmentNotification, sendEnrollmentConfirmation } = require('../config/email');

exports.submitEnrollment = async (req, res, next) => {
  try {
    const { fullName, email, phone, courseName, experience } = req.body;

    // Validate input
    if (!fullName || !email || !phone || !courseName) {
      return res.status(400).json({
        error: 'Missing required fields: fullName, email, phone, courseName'
      });
    }

    console.log(`📝 Processing enrollment for: ${fullName} (${courseName})`);

    // Send response immediately
    res.status(201).json({
      success: true,
      message: 'Enrollment successful. Confirmation emails sent.',
      enrollmentId: Date.now()
    });

    // Send emails in background (fire and forget)
    sendEnrollmentNotification({
      fullName,
      email,
      phone,
      courseName,
      experience
    }).catch(err => {
      console.error('❌ Failed to send admin notification:', err.message);
    });

    sendEnrollmentConfirmation(email, courseName, fullName).catch(err => {
      console.error('❌ Failed to send confirmation email:', err.message);
    });

    console.log(`✅ Enrollment complete for ${fullName}`);
  } catch (error) {
    console.error('❌ Enrollment error:', error);
    res.status(500).json({
      error: error.message || 'Failed to process enrollment'
    });
  }
};