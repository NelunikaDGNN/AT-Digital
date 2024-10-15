import React from "react";
import ImageSecion from "./Image/ImageSecion"; 
import Content from "./Content/Content"; 

const Services = () => {
  return (
    <div
      id="About"
      className="text-black flex flex-col md:flex-row mt-8 justify-center mx-0 md:mx-auto bg-opacity-30 rounded-lg w-full max-w-[1064px] h-auto gap-8 opacity-100 p-4"
    >
      <div className="flex flex-col md:flex-row items-center gap-6 w-full h-auto md:h-[414px]">
        <ImageSecion />
        <Content />
      </div>
    </div>
  );
};

export default Services;
