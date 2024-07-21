import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
// import toast from "react-hot-toast";
import jwt from "jsonwebtoken";

connect();

export async function POST(request){
    try {
        const reqBody = await request.json();
        const {email,password} = reqBody;
        // console.log(reqBody);

        const user = await User.findOne({email});
        console.log(user);
        if(!user){
            // toast("User doesn't exist")
            return NextResponse.json({error:"User doesn't exist"}, {status:400})
        }
        const validPassword = await bcryptjs.compare(password,user.password)
        if(!validPassword){
            // toast("Incorrect Password");
            return NextResponse.json({error: "Incorrect password"}, {status:400})
        }

        const tokenData = {
            id :user._id,
            username: user.name,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: "1d"});
        // console.log(tokenData);
        const response = NextResponse.json({
            message:"login successful",
            success:true,
        })
        // response.cookies.set("token",token,{
        //     httpOnly:true,
        // })
        return response;
    } catch (error) {
        return NextResponse.json({error: error.message},{})
    }
}
