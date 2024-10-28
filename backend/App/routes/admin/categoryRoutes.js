const express=require("express")
const { categoryInsert, categoryView, singleCategoryDelete, multipleCategoryRowDelete, editRowData, updateRowData } = require("../../controller/admin/categoryController")
const { uploads } = require("../../middleware/fileUploadation")
const categoryRoute=express.Router()

categoryRoute.post("/insert",uploads("uploads/category").single("categoryImage"),categoryInsert)
categoryRoute.get("/view",categoryView)
categoryRoute.delete("/delete/:id",singleCategoryDelete)
categoryRoute.post("/multiple-delete",multipleCategoryRowDelete)
categoryRoute.get("/editrow/:id",editRowData)
categoryRoute.put("/updaterow/:id",uploads("uploads/category").single("categoryImage"),updateRowData)
module.exports={categoryRoute}