const { adminModal } = require("../../../modal/admin/adminModal");

let login=async (req,res)=>{
   let {uemail,upassword}=req.body;
   let adminData=await adminModal.findOne({adminEmail:uemail,adminPassword:upassword})

   if(adminData){
    res.status(200).json({
        status:1,
        data:adminData
    })
   }
   else{
    res.status(200).json({
        status:0,
        message:"Invalid username and password"
    })
   }
}

module.exports={login}