/**
 * API Service for handling:
 * 1. Newsletter signup via Mailchimp
 * 2. Course enrollment registration (sends email to admin)
 */

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Subscribe user to Mailchimp newsletter
 * @param {string} email - User email to subscribe
 * @returns {Promise}
 */
export const subscribeToNewsletter = async (email) => {
  try {
    const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to subscribe to newsletter');
    }

    return await response.json();
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
};

/**
 * Submit course enrollment and send confirmation email
 * @param {Object} enrollmentData - User enrollment details
 * @returns {Promise}
 */
export const submitCourseEnrollment = async (enrollmentData) => {
  try {
    const response = await fetch(`${API_URL}/api/enrollment/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollmentData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit enrollment');
    }

    return await response.json();
  } catch (error) {
    console.error('Enrollment submission error:', error);
    throw error;
  }
};

/**
 * Get enrollment status
 * @param {string} enrollmentId - Enrollment ID
 * @returns {Promise}
 */
export const getEnrollmentStatus = async (enrollmentId) => {
  try {
    const response = await fetch(`${API_URL}/api/enrollment/${enrollmentId}`);

    if (!response.ok) {
      throw new Error('Failed to fetch enrollment status');
    }

    return await response.json();
  } catch (error) {
    console.error('Enrollment status error:', error);
    throw error;
  }
};
