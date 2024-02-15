const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const studentRouter=require("./controllers/studentrouter")

// alias name
const app=express()

// middleware
app.use(express.json())
app.use(cors()) 

mongoose.connect("mongodb+srv://amaldev123:amaldev1234@cluster0.dtrzikf.mongodb.net/studentDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

// routing
app.use("/api/student",studentRouter)

app.listen(3001,()=>{
    console.log("server running")
})