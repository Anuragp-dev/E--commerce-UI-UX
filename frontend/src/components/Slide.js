
import '../Slide.css';
import React from 'react';
import Carousel from "react-elastic-carousel";






const Slide = () => {
  return (
    <div className="App">
      <div className='main'>
      <Carousel itemsToShow={1} initialActiveIndex={3}>
        <div className="div">
          <img className='image' style={{backgroundColor:"#F6BE00"}} alt="" />
        </div>
        <div className="div">
          <img className='image' src="./e.png" alt="" />
        </div>
        
        <div className="div">
          <img className='image' style={{backgroundColor:"#c0c7d0"}} alt="" />
        </div>
        
        
      </Carousel>
      </div>
    </div>
  )
    
  

  
}
  




export default Slide
