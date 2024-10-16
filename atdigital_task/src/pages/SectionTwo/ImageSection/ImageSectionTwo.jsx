import React from "react";
import search from "../../../assets/images/search.png"; 

const ImageSectionTwo = () => {
  return (
    <div className="flex h-[276px] md:h-[348px]">
      <img
        src={search}
        alt="Service"
        className="w-full md:w-[414px] h-full md:h-full object-cover rounded-lg" // Responsive width
      />
    </div>
  );
};

export default ImageSectionTwo;
