import React from "react";
import Button from "../../../components/Button/Button";

const Section= () => {
  return (
    <div className="flex flex-col gap-5 py-4 w-[542px] h-auto opacity-100">
      <div className="w-full ml-8">
      <h1 className="font-poppins text-2xl font-semibold leading-[33px] tracking-[0.4px] text-left text-title-color ">
         Digital Strategy Consulting
      </h1>

      <p className="font-inter text-sm md:text-base font-normal leading-[19.36px] text-left mt-3">
       Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
      </p>

      </div>
      
      
      <div className="mt-1 ml-6">
        <Button text="LEARN MORE" width="129px" height="38px" />
      </div>
    </div>
  );
};

export default Section;
