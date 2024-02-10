const express=require("express")
const router=express.Router()
const collegemod=require("../model/collegeModel")
const collegeModel = require("../model/collegeModel")


//add
router.post("/add",async(req,res)=>{
    let data=req.body
    let college=new collegemod(data)
    let result= await college.save()
    res.json({status:"success"})
})

module.exports=router


