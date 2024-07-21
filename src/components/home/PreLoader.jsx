import React from 'react'
import "./PreLoader.css"

const PreLoader = () => {
  return (
    <div className='outerDiv'>
        <div className='innerDiv'>
            <img className='image1' src="/assets/images/logo.png" alt="IIT Jammu"/>
        </div> 
        <div className='innerDiv'>
            <img className='image2' src="/assets/images/name.png" alt="Portal" />
        </div>
    </div>
  )
}

export default PreLoader
