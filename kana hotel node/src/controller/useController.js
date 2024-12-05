const usemodel = require('../models/userModel');
const sendOtp = require('../services/otpService');

const Login = async (req,res) =>{
    try {
        const {Number,Email} = req.body; 
    console.log(req.body);
    
    const add = await usemodel.create({
        Nuber:Number,
        Email:Email,
        
    })
    res.send({status:"002"})
    } catch (error) {
        res.send({error})
    }
    
}

const sendOTP = async(req,res)=>{
    try {
        const {number} = req.body;
        const response = await sendOtp(number);
        console.log(response)
        return res.json(response)
    } catch (error) {
        console.log(error)
    }
}




module.exports = {Login,sendOTP}



