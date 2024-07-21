import mongoose from "mongoose";
const studentSchema =  new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Please Provide your name"],
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required:true,
    },
    batch:{
        type: Number,
        required: true,
    },
    specialization:{
        type:String,
        required:true,
    },
    // link:{
    //     type:String,
    //     required:true,
    //     unique:true,
    // },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

const Student = mongoose.models.users || mongoose.model("users",studentSchema);
export default Student;