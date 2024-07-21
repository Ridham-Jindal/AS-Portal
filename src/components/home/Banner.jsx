"use client";
import React, { useEffect, useRef } from 'react';
import "./Banner.css";
import Container  from 'react-bootstrap/Container';

const Banner = () => {

  return (
    <div className='full'>
      <div className="heading">
        <h1 className='heading1'>IIT JAMMU</h1>
      </div>
      <img src="/assets/images/aa.jpg" alt="Background Image" className="image"/>
      <div className="container">
        <Container fluid>
          <div className="over">
            <div className='buttonDiv'>
              <div className='req'>
                <button>Student</button>
              </div>
              <div className='req'>
                <button>Alumni</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
