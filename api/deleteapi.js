const express=require("express")
const deletequery= require("./dynamof/deletequery")
const updatequery=require("./dynamof/updatequery")
const router=express.Router()

router.post('/api/delete',(req,res)=>{
    console.log(req.body)
    deletequery(req.body.URL)
    res.json(req.body)

})

router.post('/api/move',(req,res)=>{
  const {from,to,name}=(req.body)
  updatequery(from,to,name)
  console.log(from,to,name)
  res.json(req.body)
})

module.exports=router