import React from "react";
import Section from "../SectionTwo/Section/Section"; 
import ImageSectionTwo from "./ImageSection/ImageSectionTwo";

const SectionTwo = () => {
  return (
    <div
      id="About"
      className="text-black flex mt-12 justify-center bg-red-400 shadow-xl mx-0 md:mx-auto bg-opacity-30 rounded-lg w-[1064px] h-[414px] gap-[108px] opacity-100" 
    >
      <div className="flex flex-col md:flex-row items-center gap-28 w-full h-full">
        <Section />
        <ImageSectionTwo />
      </div>
    </div>
  );
};

export default SectionTwo;