import React from "react";
import Button from "../../../components/Button/Button";

const Section= () => {
  return (
    <div className="flex flex-col gap-5 py-4 w-full max-w-[530px] h-auto opacity-100 items-center text-center ">
      <div className="w-full ">
      <h1 className="font-poppins text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-center md:text-left text-title-color ">
         Digital Strategy Consulting
      </h1>

      <p className="font-inter text-[16px] font-normal leading-[19.36px] text-center md:text-left mt-3">
       Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
      </p>

      </div>
      
      
      <div className=" flex flex-row mt-1 w-full justify-center md:justify-start" >
        <Button text="LEARN MORE" width="129px" height="38px" />
      </div>
    </div>
  );
};

export default Section;
