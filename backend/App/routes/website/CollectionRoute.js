const express=require("express")
const { parentCategory, parentsubCategory } = require("../../controller/website/productController")
const collectionRoutes=express.Router()

collectionRoutes.get("/parent-category",parentCategory)
collectionRoutes.get("/sub-category/:slug",parentsubCategory)
module.exports={collectionRoutes}