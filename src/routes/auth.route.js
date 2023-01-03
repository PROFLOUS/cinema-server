const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/signup', authController.SignUp);
router.post('/verify-otp', authController.VerifyOTP);
router.post('/login', authController.Login);

module.exports = router;