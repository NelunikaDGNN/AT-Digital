import React from "react";
import Section from "../SectionTwo/Section/Section"; 
import ImageSectionTwo from "./ImageSection/ImageSectionTwo";

const SectionTwo = () => {
  return (

      <div className="flex flex-col md:flex-row-reverse items-center   w-full h-full justify-center mx-0 md:mx-auto bg-opacity-30 rounded-lg max-w-[1064px] opacity-100 p-4">
      <ImageSectionTwo />
        <Section />
       
      </div>
 
  );
};

export default SectionTwo;