const express=require("express")
const { colorInsert, colorView, colorSingleDelete, colorMultipleDelete, colorEditRowData, colorUpdateRowData } = require("../../controller/admin/colorController")
const colorRoute=express.Router()

colorRoute.post("/insert",colorInsert)
colorRoute.get("/view",colorView)
colorRoute.delete("/delete/:id",colorSingleDelete)
colorRoute.post("/multiple-delete",colorMultipleDelete)
colorRoute.get("/editrow/:id",colorEditRowData)
colorRoute.put("/updaterow/:id",colorUpdateRowData)

module.exports={colorRoute}