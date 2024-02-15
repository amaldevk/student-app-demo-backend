const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema(
    {
        name:String,
        admno:String,
        rollno:String,
        college:String
    }
)


module.exports=mongoose.model("students",studentSchema)