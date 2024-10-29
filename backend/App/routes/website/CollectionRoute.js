const express=require("express")
const { parentCategory, parentsubCategory, getProductsizeColor } = require("../../controller/website/productController")
const collectionRoutes=express.Router()

collectionRoutes.get("/parent-category",parentCategory)
collectionRoutes.get("/sub-category/:slug",parentsubCategory)

collectionRoutes.get("/product-list/:slug/:sucatsug",getProductsizeColor)
module.exports={collectionRoutes}