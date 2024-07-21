"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import "./signup.css";
import { useRouter } from 'next/navigation';


const Signup = () => {
    const router = useRouter();
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        batch:"",
        company:"",
        role:""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const onSignup = async ()=>{
        try {
            setLoading(true);
            const response = axios.post("/api/users/signup",user);
            console.log("Signup Sucess", response.data);
            toast("User created Successfully");
            router.push("/alumni/login");
        } catch (error) {
            console.log("signup failed",error.message);
             toast.error(error.message);
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0&&user.name.length>0)
        {
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <>

            <div className='form'>
                <div>
                 <h1 style={{color:"black"}}>Signup</h1>
                </div>
                <div className='outerDiv'>
                    <div className='innerDiv'>
                        <input type='text' id='name' value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} placeholder='Enter your name' required/>
                    </div>
                    <div className='innerDiv'>
                        <input type='email' id='email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Enter your email' required/>
                    </div>
                    <div className='innerDiv'>
                        <input type='password' id='pass' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='Enter your password' required/>
                    </div>
                    <div className='innerDiv'>
                        <input type='number' id='batch' value={user.batch} onChange={(e)=>setUser({...user,batch:e.target.value})} placeholder='Enter your batch' required/>
                    </div>
                    <div className='innerDiv'>
                        <input type='text' id='company' value={user.company} onChange={(e)=>setUser({...user,company:e.target.value})} placeholder='Current organization' required/>
                    </div>
                    <div className='innerDiv'>
                        <input type='text' id='role' value={user.role} onChange={(e)=>setUser({...user,role:e.target.value})} placeholder='Enter your role at the organization' required/>
                    </div>
                </div>
                <div>
                    <button onClick={onSignup}>{buttonDisabled? "Fill the details" :"Signup"}</button>
                </div>
            </div>
        </>
    );
};

export default Signup;
