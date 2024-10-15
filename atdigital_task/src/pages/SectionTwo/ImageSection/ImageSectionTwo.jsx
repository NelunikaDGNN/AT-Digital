import React from "react";
import computer from "../../../assets/images/computer.png"; 

const ImageSectionTwo = () => {
  return (
    <div className="flex-shrink-0">
      <img
        src={computer}
        alt="Service"
        className="w-full md:w-[414px] h-auto object-cover rounded-lg" // Responsive width
      />
    </div>
  );
};

export default ImageSectionTwo;
