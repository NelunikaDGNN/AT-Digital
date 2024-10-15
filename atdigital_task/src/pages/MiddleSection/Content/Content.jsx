import React from "react";
import Button from "../../../components/Button/Button";

const Content= () => {
  return (
    <div className="flex flex-col gap-5 py-4 w-full max-w-[542px] h-auto opacity-100 items-center text-center">
      <div className="w-full ml-3">
      <h1 className="font-poppins text-2xl font-semibold leading-[33px] tracking-[0.4px] text-title-color ">
        Web & Mobile App Development
      </h1>

      <p className="font-inter text-sm md:text-base font-normal leading-[19.36px] mt-3">
         Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
      </p>

      </div>
      
      
      <div className="mt-1">
        <Button text="Learn more" width="129px" height="38px" />
      </div>
    </div>
  );
};

export default Content;
