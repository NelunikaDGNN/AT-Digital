import React from "react";
import Button from "../../../components/Button/Button";

const Content= () => {
  return (
    <div className="flex flex-col gap-5 py-4 w-full max-w-[530px] h-auto opacity-100 items-center text-center">
      <div className="w-full ">
      <h1 className="font-poppins text-[27px] font-semibold leading-[33px] tracking-[0.4px] text-center md:text-left text-title-color ">
        Web & Mobile App Development
      </h1>

      <p className="font-inter md:text-[16px] font-normal leading-[19.36px] mt-3 text-center md:text-left">
         Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
      </p>

      </div>
      
      
      <div className="flex flex-row mt-1 w-full justify-center md:justify-start ">
        <Button text="Learn more" width="129px" height="38px" />
      </div>
    </div>
  );
};

export default Content;
