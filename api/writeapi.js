const express=require("express")
const writedata= require("./dynamof/writedata")
const router=express.Router()

router.post('/api/write',(req,res)=>{
    console.log(req.body)
    writedata(req.body)
    res.json(req.body)

})

module.exports=router