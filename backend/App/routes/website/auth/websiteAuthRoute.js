const express=require("express")
const { sendOTP, checkOTPandRegister, login,  } = require("../../../controller/website/auth/websiteAuthController")
const websiteAuthRoute=express.Router()

websiteAuthRoute.post("/generate-otp",sendOTP)
websiteAuthRoute.post("/check-otp-register",checkOTPandRegister)
websiteAuthRoute.post("/login",login)

module.exports={websiteAuthRoute}