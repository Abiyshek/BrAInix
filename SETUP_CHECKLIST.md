# 🚀 BrAInix Quick Setup Checklist

## Frontend Setup ✅ (Already Done)

- [x] Created `.env` file with API configuration
- [x] Created `src/services/api.js` with API call functions
- [x] Updated `EnrollmentModal.jsx` to use API
- [x] Updated `App.jsx` newsletter signup to use API
- [x] Email integrations ready for backend connection

---

## Backend Setup ⏳ (TODO)

### Prerequisites
- [ ] Node.js installed
- [ ] npm or yarn
- [ ] Mailchimp account
- [ ] Gmail account (or alternative email)

### Mailchimp Setup
- [ ] Create Mailchimp account
- [ ] Get API Key (format: xxxxx-us1)
- [ ] Create Audience/List for BrAInix
- [ ] Get Audience ID (List ID)

### Email Setup (Gmail)
- [ ] Enable 2-Factor Authentication on Gmail
- [ ] Generate App Password (16 characters)
- [ ] Have admin email ready: `hashedtechs@gmail.com`

### Backend Files to Create

**Core Server Files**
- [ ] `backend/server.js` - Main server file
- [ ] `backend/package.json` - Dependencies

**Config Files**
- [ ] `backend/config/mailchimp.js` - Mailchimp integration
- [ ] `backend/.env` - Environment variables

**Email Configuration**
- [ ] `backend/config/email.js` - Email sending setup

**Routes**
- [ ] `backend/routes/newsletter.js` - Newsletter endpoint
- [ ] `backend/routes/enrollment.js` - Enrollment endpoint

**Controllers**
- [ ] `backend/controllers/newsletterController.js` - Newsletter logic
- [ ] `backend/controllers/enrollmentController.js` - Enrollment logic

### Installation Steps
```bash
# Create backend
mkdir backend
cd backend

# Install dependencies
npm install express cors dotenv axios nodemailer

# For development
npm install -D nodemon

# Create .env file with your credentials
# Copy code from BACKEND_SETUP.md
```

---

## Environment Variables Needed

### Frontend (`/.env`) ✅ Already Created
```
VITE_API_URL=http://localhost:5000
```

### Backend (`/backend/.env`) ⏳ TODO
```
PORT=5000
MAILCHIMP_API_KEY=your_key
MAILCHIMP_LIST_ID=your_list_id
MAILCHIMP_SERVER=us1
ADMIN_EMAIL=hashedtechs@gmail.com
ADMIN_EMAIL_PASSWORD=your_app_password
EMAIL_SERVICE=gmail
FRONTEND_URL=http://localhost:3000
```

---

## Running the Application

### Terminal 1: Backend
```bash
cd backend
npm start  # or: npm run dev
```
Expected: `Server running on port 5000`

### Terminal 2: Frontend
```bash
npm run dev
```
Expected: Opens on `http://localhost:3000`

---

## Testing the Integration

### Test Newsletter Signup
1. Open app on `http://localhost:3000`
2. Scroll to CTA section
3. Enter email and click "Get Started Free"
4. Should see success message
5. Check Mailchimp audience for new subscriber

### Test Course Enrollment
1. Click "Enroll" on any course
2. Fill in all fields
3. Click "Complete Registration"
4. Should see success message
5. Check `hashedtechs@gmail.com` for enrollment notification
6. Check your submission email for confirmation

---

## Additional Help

### Documents to Reference
- `BACKEND_SETUP.md` - Complete backend code templates
- `MAILCHIMP_INTEGRATION.md` - Detailed integration guide
- `README.md` - Project documentation

### If You Get Stuck
I can help with:
- ✅ Creating backend files
- ✅ Fixing errors
- ✅ Debugging issues
- ✅ Adding new features
- ✅ Database integration
- ✅ Deployment setup

Just let me know what error message you get or what needs help!

---

**Do you want me to create the complete backend files for you?**
