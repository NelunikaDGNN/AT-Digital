import React from 'react';
import bg from '../../assets/images/bg.jpg'
import Button from '../../components/Button/Button'
import './style.css'
const HeroSection = () => {
  return (
    
    <div 
    id='top-div'
      className="relative w-full h-[763px] opacity-100 -top-[40px] gap-0" 
      style={{
        backgroundImage: `url(${bg})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className=" heading absolute top-[354px] left-[80px] w-[630px] h-auto p-[24px] bg-custom-gradient opacity-100  "> 
      <div className='description '>
        <p className="font-inter text-light-white text-[48px] font-bold leading-[48px] tracking[-0.02em] text-left ml-4">
          We crush your competitors, goals, and sales records - without the B.S.
        </p>
        </div>
        <div className='mt-4 cursor-pointer '> 
        <Button text="Get free consultation" width="214px" height="38px"  />
        </div>
       
      </div>
    </div>
  );
  
  
  
};

export default HeroSection;
