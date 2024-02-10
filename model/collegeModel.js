const mongoose = require("mongoose")
const collegeSchema = new mongoose.Schema(
    {
        studentName:String,
        age:String,
        course:String,
        year:String,
        email:String,
        password:String
    }
)


module.exports=mongoose.model("college",collegeSchema)