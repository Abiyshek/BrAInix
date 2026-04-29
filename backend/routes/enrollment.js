const express = require('express');
const router = express.Router();
const enrollmentController = require('../controllers/enrollmentController');

router.post('/register', enrollmentController.submitEnrollment);

module.exports = router;