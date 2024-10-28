const express=require("express")


const { websiteAuthRoute } = require("./website/auth/websiteAuthRoute")
const { collectionRoutes } = require("./website/CollectionRoute")

const websiteRoute=express.Router()


websiteRoute.use("/collections",collectionRoutes)
websiteRoute.use("/auth",websiteAuthRoute)



module.exports={websiteRoute}