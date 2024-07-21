import mongoose from "mongoose";
const userSchema =  new mongoose.Schema({
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
    company:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required: true,
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

const User = mongoose.models.users || mongoose.model("users",userSchema);
export default User;