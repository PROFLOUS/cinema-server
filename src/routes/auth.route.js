const router = require("express").Router();
const authController = require("../controllers/auth.controller");

router.post("/signup", authController.SignUp);
router.post("/verify-otp", authController.VerifyOTP);
router.post("/login", authController.Login);
router.post("/refresh-token", authController.RefreshToken);
router.get("/customer-info", authController.GetCustomerInfo);
router.get("/staff-info", authController.GetStaffInfo);

module.exports = router;
