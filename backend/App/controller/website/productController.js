const { categoryModel } = require("../../modal/admin/categoryModal")
const { subcategoryModel } = require("../../modal/admin/subCategoryModal")

let parentCategory=async (req,res)=>{
    let parentData=await categoryModel.find({categoryStatus:true})
    
    res.status(200).json({
        status:1,
        dataList:parentData
    })
}






let parentsubCategory=async (req,res)=>{
    let {slug}=req.params;
    
    //parent data
    let parentData=await categoryModel.findOne({slug})

    let parentID=parentData._id


    //Sub Category data

    let subCatdata=await subcategoryModel.find({parentCategoryId:parentID})

    res.status(200).json({
        status:1,
        mainCategory:parentData,
        subCategoryData:subCatdata
    })
}


module.exports={parentCategory,parentsubCategory}