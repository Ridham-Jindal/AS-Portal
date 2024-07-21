"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import "./signup.css";
import { useRouter } from 'next/navigation';


const loginPage = () => {
    const router = useRouter();
    const [user,setUser] = useState({
        email:"",
        password:""
    })
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const onLogin = async ()=>{
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login",user);
            console.log("Login success");
            toast.success("Login Success");
            router.push("/alumni/dashboard");
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.response.data.error);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }
        else{
            setButtonDisabled(true);
        }
    },[user]);
    return (
        <>

            <div className='form'>
                <div>
                 <h1 style={{color:"black"}}>Login</h1>
                </div>
                <div className='outerDiv'>
                    <div className='innerDiv'>
                        <input type='email' id='email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder='Enter your email' required/>
                    </div>
                    <div className='innerDiv'>
                        <input type='password' id='pass' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} placeholder='Enter your password' required/>
                    </div>
                </div>
                <div>
                    <button onClick={onLogin}>Login</button>
                </div>
            </div>
        </>
    );
};

export default loginPage;
