const { verifyOTP } = require("../services/otpService");
const { sendOTP } = require("../services/otpService");

const requestOTP = async (req, res) => {
    const { phoneNumber } = req.body;
    try {
        const result = await sendOTP(phoneNumber);
        res.json({ success: true, message: result });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const verifyOTPCode = (req, res) => {
    const { phoneNumber, otp } = req.body;
    try {
        const result = verifyOTP(phoneNumber, otp);
        res.send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { requestOTP, verifyOTPCode };
