import React from "react";
import ImageSecion from "./Image/ImageSecion"; 
import Content from "./Content/Content"; 

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  w-full h-full justify-center mx-0 md:mx-auto bg-opacity-30 rounded-lg max-w-[1064px] opacity-100 p-4">
    <ImageSecion />
      <Content />
     
    </div>
  );
};

export default Services;
