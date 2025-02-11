"use server"
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log(process.env.MONGO_URI);

        const connection = mongoose.connection;
        console.log(connection);
        connection.on('connected',()=>{
            console.log('MongoDB connected successfully');
        })

        connection.on('error',(err)=>{
            console.log('MongoDB connection error' + err);
            process.exit();
        })
    } catch (error) {
        console.log(error.message);
    }
}