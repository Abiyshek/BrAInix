const { sendNewsletterSubscriptionNotification, sendNewsletterWelcomeEmail } = require('../config/email');

exports.subscribeEmail = async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Send notification to admin
    await sendNewsletterSubscriptionNotification(email);
    
    // Send welcome email to subscriber
    await sendNewsletterWelcomeEmail(email);

    // TODO: Add Mailchimp integration here for subscriber list
    
    console.log(`📧 Newsletter subscription received for: ${email}`);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      email: email
    });
  } catch (error) {
    console.error('❌ Newsletter subscription error:', error);
    res.status(500).json({
      error: error.message || 'Failed to subscribe'
    });
  }
};