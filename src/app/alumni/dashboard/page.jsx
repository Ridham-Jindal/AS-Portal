import React from 'react';
import "./page.css";
import SideBar from "@/components/home/SideBar";

const adash = () => {
  return (
    <div>
        <SideBar/>
        <div className='heading'>
          <h1 className='ques'>Want to take a session?</h1>
        </div>
    </div>
  )
}

export default adash;
