import {connect} from "@/dbConfig/dbConfig.js"
import Student from "@/models/student"
import bcryptjs from "bcryptjs"
import {NextRequest, NextResponse} from "next/server"


connect();

export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const {name,email,password,batch,specialization} = reqBody;
        console.log(reqBody);

        const student = await Student.findOne({email});
        if(student){
            return NextResponse.json({error: "User already exists"},{status:400})
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newStudent = new Student({
            name,
            email,
            password: hashedPassword,
            batch,
            specialization
        })
        const savedStudent = await newStudent.save();
        return NextResponse.json({
            message:"User created successfully",
            success: true,
            savedStudent
        })

    } catch (error) {
        return NextResponse.json({error: error.message},{status:500})
    }
}

