import React from "react";
import computer from "../../../assets/images/computer.png"; 

const ImageSection = () => {
  return (
    <div className="flex-shrink-0">
      <img
        src={computer}
        alt="Service"
        className="w-[80%] md:w-[414px] h-auto object-cover rounded-lg mx-auto"
      />
    </div>
  );
};

export default ImageSection;

