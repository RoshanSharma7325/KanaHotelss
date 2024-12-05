const { UserDetail } = require("otpless-node-js-auth-sdk")

async function sendOtp(number) {
    try {
        const response = await UserDetail.sendOTP(
            number,null,null,null,null,60,6,"795ZFB24V277LNX1QSUGOMURHYFTD2XP","mrjp71r5zgujmrf4d1fs8lbmpme88cpe"
        )
        return response;
    } catch (error) {
        console.log(error)
    }
}




module.exports = sendOtp;