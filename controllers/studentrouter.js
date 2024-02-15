const express=require("express")
const studentModel=require("../model/studentModels")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body // read value
    let student=new studentModel(data)
    let result=await student.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await studentModel.find()
    res.json(data)
})

module.exports=router