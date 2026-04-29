const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());

// Import routes
const newsletterRoutes = require('./routes/newsletter');
const enrollmentRoutes = require('./routes/enrollment');

// Use routes
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/enrollment', enrollmentRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'BrAInix Backend API is running ✅',
    version: '1.0.0',
    endpoints: {
      newsletter: '/api/newsletter/subscribe',
      enrollment: '/api/enrollment/register',
      health: '/api/health'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running ✅' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});