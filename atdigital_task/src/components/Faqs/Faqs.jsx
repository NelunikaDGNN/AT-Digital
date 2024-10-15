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
    <div className="max-w-2xl mx-auto p-4 mt-3 mb-8">
      <h2 className="font-poppins text-center text-2xl font-bold text-title-color mb-6 my-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 font-inter">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-md shadow-sm bg-faqfill-color">
            <button
              className={`w-full flex justify-between items-center p-4 text-left font-semibold 
                ${activeIndex === index ? "text-title-color" : "text-black-color"} 
                sm:w-full sm:h-[60px]`} // Increased width and decreased height for small screens
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 sm:h-[80px]">{faq.answer}</div> // Adjusted height for answer
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
