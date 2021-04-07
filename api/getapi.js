const express=require("express")
const router=express.Router()
const getData =require( "./dynamof/getdata")
router.get('/api/read',(req,res)=>{
    getData(res)
    
    
})

module.exports=router