import {connect} from "@/dbConfig/dbConfig";
import Student from "@/models/student";
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

        const student = await Student.findOne({email});
        console.log(student);
        if(!student){
            // toast("User doesn't exist")
            return NextResponse.json({error:"User doesn't exist"}, {status:400})
        }
        const validPassword = await bcryptjs.compare(password,student.password)
        if(!validPassword){
            // toast("Incorrect Password");
            return NextResponse.json({error: "Incorrect password"}, {status:400})
        }

        const tokenData = {
            id :student._id,
            username: student.name,
            email: student.email
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
