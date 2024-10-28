const { transporter } = require("../../../config/mailConfig");
const bcrypt = require('bcrypt');
const { userModal } = require("../../../modal/userModel");
const saltRounds = 10;

let myOTP=new Map()
let sendOTP=async (req,res)=>{
    console.log(req.body.uemail)
    let userData=await userModal.find({userEmail:req.body.uemail})
    if(userData.length==0){
        let randomOTP=(Math.random()*999999).toString().slice(0,4)
        myOTP.set("OTP",randomOTP)
        const info = await transporter.sendMail({
            from: `"Your OTP for Verification" <roshanchaurasia990@gmail.com>`, // sender address
            to: req.body.uemail, // list of receivers
            subject: "Frank and Oak OTP", // Subject line
            html: `<div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>Your OTP</h2>
                    <p>Your One-Time Password (OTP) for verification is: <strong>${randomOTP}</strong></p>
                    <p>This OTP is valid for 10 minutes. Please do not share it with anyone.</p>
                    <p>If you didn't request this, you can safely ignore this email.</p>
                </div>`,
          });
        res.status(200).json({
            status:1,
            message:"OTP send Successfully."
        })
    }
    else{
        res.status(200).json({
            status:0,
            message:"Email id already exists."
        })
    }
}

let checkOTPandRegister=async(req,res)=>{
    let createdOTP=myOTP.get("OTP")
          const hash = bcrypt.hashSync(req.body.upassword, saltRounds);
    if(createdOTP==req.body.userOTP){
        let createdUser={
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userEmail:req.body.uemail,
            userPassword: hash,
            userGender:req.body.gender,
        }

        let userTable=new userModal(createdUser)
        let userSaved=await userTable.save()
        res.status(200).json({
            status:1,
            message:"Account created Successfully.",
            res:userSaved
        })
    }
    else{
        res.status(200).json({
            status:0,
            message:"Invalid OTP"
        })
    }
}

let login=async(req,res)=>{
    let {userEmail,userPassword}=req.body
    let userData=await userModal.findOne({userEmail})
    if(userData){
        let comparedPassword= bcrypt.compareSync(userPassword, userData.userPassword);
        if(comparedPassword){
            res.status(200).json({
                status:1,
                message:"User logined successfully."
            })
        }
        else{
            res.status(200).json({
                status:0,
                message:"Incorrect Password."
            })
        }
    }
    else{
        res.status(200).json({
            status:0,
            message:"User not exist please Register."
        })
    }
}

module.exports={sendOTP,checkOTPandRegister, login}