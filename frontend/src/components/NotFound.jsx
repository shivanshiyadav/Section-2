import React from 'react'
import { Link } from 'react-router-dom';
import videoBg from'../assets/VideoBg.mp4'
const NotFound = () => {
  return (
  
    <div className='not '>
      
        
    <div className='vid'>
      
    <video src={videoBg} autoPlay loop muted  width={800}  > </video>
    <p className='found'>404 - Page not Found</p>
        
        <Link className='back' to="/">Back to Homepage</Link>
    </div>
    </div>
    
  )
}

export default NotFound;