const express= require("express")
var AWS = require("aws-sdk");
const App=express()
const getRouter=require("./api/getapi")
const writeRouter =require("./api/writeapi")
const deleteRouter=require("./api/deleteapi")
const bodyParser=require("body-parser");


App.use(bodyParser.json())



App.use("/",getRouter)
App.use("/",writeRouter)
App.use("/",deleteRouter)

const port =process.env.PORT||5000
App.listen(port,console.log(`Server is running on port ${port}`))

