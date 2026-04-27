# BrAInix Integration Guide

## Overview

This guide explains how to set up the complete email and newsletter system for BrAInix, including:
- ✅ Mailchimp newsletter integration
- ✅ Course enrollment email notifications to admin (hashedtechs@gmail.com)
- ✅ Confirmation emails to students

---

## ⚙️ Setup Steps

### Step 1: Mailchimp Setup

1. **Create Mailchimp Account** (if not already have)
   - Go to [mailchimp.com](https://mailchimp.com)
   - Sign up for free account

2. **Get Your API Key**
   - Login to Mailchimp Dashboard
   - Go to `Account` → `API keys`
   - Create new API key and copy it

3. **Create Audience/List**
   - Go to `Audience` → `All contacts`
   - Create a new audience named "BrAInix Newsletter"
   - Copy the `Audience ID` (also called List ID)

4. **Identify Your Server**
   - Your API key format: `xxxxxxxxxxxxxxxxxxxxxxxx-us1`
   - The suffix (us1, us2, etc.) is your `MAILCHIMP_SERVER`

### Step 2: Email Setup (Gmail)

1. **Enable Gmail App Password**
   - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
   - Enable 2-Factor Authentication (if not already enabled)
   - Go to `App passwords`
   - Select "Mail" and "Windows Computer"
   - Generate 16-character password
   - Copy this password (NOT your Gmail password)

2. **Or Use Other Email Service**
   - Gmail (recommended)
   - SendGrid
   - AWS SES
   - Your own SMTP server

### Step 3: Backend Setup

1. **Create Backend Directory**
   ```bash
   mkdir backend
   cd backend
   npm init -y
   ```

2. **Install Dependencies**
   ```bash
   npm install express cors dotenv axios nodemailer
   npm install -D nodemon
   ```

3. **Create .env File in Backend Root**
   ```
   PORT=5000
   NODE_ENV=development
   
   # Mailchimp
   MAILCHIMP_API_KEY=your_api_key_from_step_1
   MAILCHIMP_LIST_ID=your_list_id_from_step_1
   MAILCHIMP_SERVER=us1
   
   # Email (Gmail)
   ADMIN_EMAIL=hashedtechs@gmail.com
   ADMIN_EMAIL_PASSWORD=your_16_char_app_password
   EMAIL_SERVICE=gmail
   
   FRONTEND_URL=http://localhost:3000
   ```

4. **Create Folder Structure**
   ```
   backend/
   ├── server.js
   ├── config/
   │   ├── mailchimp.js
   │   └── email.js
   ├── routes/
   │   ├── newsletter.js
   │   └── enrollment.js
   ├── controllers/
   │   ├── newsletterController.js
   │   └── enrollmentController.js
   ├── middleware/
   │   └── errorHandler.js
   ├── .env
   └── package.json
   ```

5. **Copy Backend Code**
   - See the code templates in `BACKEND_SETUP.md`
   - Create each file with the provided code
   - Replace placeholder values with your actual credentials

### Step 4: Update Frontend Environment

1. **Update Frontend `.env` File** (already created)
   ```
   VITE_API_URL=http://localhost:5000
   VITE_ENV=development
   ```

### Step 5: Run Everything

1. **Start Backend**
   ```bash
   cd backend
   npm run dev  # if you have nodemon configured in package.json
   # OR
   node server.js
   ```

   Backend should start on `http://localhost:5000`

2. **Start Frontend** (in another terminal)
   ```bash
   cd ..
   npm run dev
   ```

   Frontend should start on `http://localhost:3000`

3. **Test It Out**
   - Try enrolling in a course → should send email to hashedtechs@gmail.com
   - Try subscribing to newsletter → should add email to Mailchimp

---

## 📧 What Happens Now

### When User Enrolls in Course:

1. **User submits form** in enrollment modal
2. **Frontend validates** and sends to backend
3. **Backend sends 2 emails:**
   - **To Admin**: Full enrollment details → hashedtechs@gmail.com
   - **To Student**: Confirmation email with next steps

### When User Subscribes to Newsletter:

1. **User enters email** in CTA section
2. **Frontend sends** to backend
3. **Backend** adds email to Mailchimp audience
4. **Mailchimp** sends welcome/confirmation email (if configured)

---

## 🔍 Troubleshooting

### Issue: "Backend not responding"
- ✅ Make sure backend server is running on port 5000
- ✅ Check that `VITE_API_URL` in `.env` is correct
- ✅ Check CORS configuration in server.js

### Issue: "Gmail authentication failed"
- ✅ Use 16-character app password (not Gmail password)
- ✅ Ensure 2FA is enabled on Gmail
- ✅ Check email service is set to "gmail"

### Issue: "Mailchimp API errors"
- ✅ Verify API key is correct (includes -us1, -us2, etc.)
- ✅ Verify List ID is correct
- ✅ Check that audience exists

### Issue: "Backend server won't start"
- ✅ Check port 5000 is not in use
- ✅ Verify all npm packages are installed
- ✅ Check `.env` file exists with correct values

---

## 📱 API Endpoints

Once backend is running:

### Newsletter Subscription
```
POST http://localhost:5000/api/newsletter/subscribe
Body: { "email": "user@example.com" }
```

### Course Enrollment
```
POST http://localhost:5000/api/enrollment/register
Body: {
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "courseName": "AI/ML Fundamentals",
  "experience": "beginner"
}
```

---

## 🎯 Next Steps (Optional)

1. **Database Integration**
   - Add MongoDB or PostgreSQL to store enrollments
   - Modify controllers to save to database

2. **Authentication**
   - Add JWT tokens for student accounts
   - Create student login portal

3. **Payment Processing**
   - Integrate Stripe for course payments
   - Add payment verification

4. **Advanced Email**
   - Create email templates
   - Add email scheduling
   - Set up email sequences/automation

5. **Admin Dashboard**
   - Create admin panel to view enrollments
   - Analytics and reporting

---

## 📞 Need Help?

If anything is unclear, you can:
1. Share error messages and I can help debug
2. Ask for modifications to code
3. Request additional features
4. Ask for deployment setup (Heroku, Vercel, AWS, etc.)

---

**Status:** ✅ Ready for backend implementation
