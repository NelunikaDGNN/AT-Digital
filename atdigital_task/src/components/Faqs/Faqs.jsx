import React, { useState } from "react";

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Mauris ac ullamcorper lorem. Cras a tincidunt erat. Phasellus a lacus mi. Vivamus viverra libero id nisi ultrices.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Vestibulum condimentum turpis vitae quam accumsan, sit amet pretium sem mollis. Etiam sollicitudin lorem id felis.",
    },
  ];

  return (
    <div className=" mx-auto p-4 mt-3 mb-8 max-w-[896px]">
      <h2 className="font-poppins text-center text-[27px] font-semibold text-title-color mb-6 my-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 font-inter text-[20px] md:text-[22px] ">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-md shadow-sm bg-faqfill-color p-4">
            <button
              className={`w-full flex felx-row justify-between   text-left font-medium 
                ${activeIndex === index ? "text-title-color" : "text-black-color"} 
                sm:w-full `} // Increased width and decreased height for small screens
                
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-3xl ml-4">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600 text-[16px] md:text-[18px]">{faq.answer}</div> // Adjusted height for answer
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
