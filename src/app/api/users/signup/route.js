import {connect} from "@/dbConfig/dbConfig.js"
import User from "@/models/userModel"
import bcryptjs from "bcryptjs"
import {NextRequest, NextResponse} from "next/server"


connect();

export async function POST(NextRequest){
    try {
        const reqBody = await NextRequest.json();
        const {name,email,password,batch,company,role} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({error: "User already exists"},{status:400})
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            batch,
            company,
            role
        })
        const savedUser = await newUser.save();
        return NextResponse.json({
            message:"User created successfully",
            success: true,
            savedUser
        })

    } catch (error) {
        return NextResponse.json({error: error.message},{status:500})
    }
}

