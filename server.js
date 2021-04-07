const express= require("express")

const App=express()
const getRouter=require("./api/getapi")
const writeRouter =require("./api/writeapi")
const deleteRouter=require("./api/deleteapi")
const bodyParser=require("body-parser");
const path=require('path')

App.use(bodyParser.json())
App.use(express.json())

App.use(express.static(path.join(__dirname,'frontend' ,'build')));

App.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'frontend', 'build', 'index.html'));
});
App.use("/api/read",getRouter)
App.use("/api/write",writeRouter)
App.use("/",deleteRouter)


const port =process.env.PORT||5000
App.listen(port,console.log(`Server is running on port ${port}`))

