const { categoryModel } = require("../../modal/admin/categoryModal")
const { colorModal } = require("../../modal/admin/colorModal")
const { productModal } = require("../../modal/admin/productModal")
const { sizeModal } = require("../../modal/admin/sizeModal")
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

let getProductsizeColor=async (req,res)=>{

    let {slug,sucatsug} =req.params;

    let sizeData=await sizeModal.find({sizeStatus:true})
    let colorData=await colorModal.find({colorStatus:true})
    let parentData=await categoryModel.findOne({slug})
    let parentID=parentData._id;
   
    let allsubCatdata=await subcategoryModel.find({parentCategoryId:parentID})

    let subCatdata=await subcategoryModel.findOne({slug:sucatsug})
    let sucatId=subCatdata._id

    let productData= await productModal.find({productSubCategoryId:sucatId}).populate('productSizeId','sizeName').populate('productColorId','colorName')

    let obj={
        status:1,
        sizeData,
        colorData,
        parentData,
        subCatdata,
        allsubCatdata,
        productData,
        PRODUCT_STATIC_PATH:process.env.PRODUCT_STATIC_PATH
    }

    res.send(obj)

    

}
module.exports={parentCategory,parentsubCategory,getProductsizeColor}