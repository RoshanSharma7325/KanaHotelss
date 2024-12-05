const express = require("express");
const { Login, sendOTP, verifyOTP } = require("../controller/useController");
// const { verifyOtp } = require("../services/otpService");
// const { requestOTP, verifyOTPCode } = require("../controller/Otp");
const router = express.Router();



router.post("/Login",Login)


router.post('/request-otp', sendOTP);
// router.post('/verify-otp', verifyOTP);



module.exports = router