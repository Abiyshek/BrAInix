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

    console.log(`✅ Enrollment complete for ${fullName}`);

    res.status(201).json({
      success: true,
      message: 'Enrollment successful. Confirmation emails sent.',
      enrollmentId: Date.now()
    });
  } catch (error) {
    console.error('❌ Enrollment error:', error);
    res.status(500).json({
      error: error.message || 'Failed to process enrollment'
    });
  }
};