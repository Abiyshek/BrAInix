const { sendNewsletterSubscriptionNotification, sendNewsletterWelcomeEmail } = require('../config/email');

exports.subscribeEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Send response immediately (don't wait for emails)
    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      email: email
    });

    // Send emails in background (fire and forget)
    sendNewsletterSubscriptionNotification(email).catch(err => {
      console.error('❌ Failed to send admin notification:', err.message);
    });
    
    sendNewsletterWelcomeEmail(email).catch(err => {
      console.error('❌ Failed to send welcome email:', err.message);
    });

    console.log(`📧 Newsletter subscription received for: ${email}`);
  } catch (error) {
    console.error('❌ Newsletter subscription error:', error);
    res.status(500).json({
      error: error.message || 'Failed to subscribe'
    });
  }
};