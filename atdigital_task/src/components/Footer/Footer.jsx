import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-color text-white p-10 text-center mt-6 footer">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 justify-evenly">
        <div className="left-side md:ml-20 p-4 sm:w-[450px] ">
          <div className='flex items-center gap-3'>
            <svg
              width="47"
              height="37"
              viewBox="0 0 47 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3404 0.888885H21.2242L0 37.0006H20.195L22.9875 31.3L25.9246 37.0006H46.7382L24.3404 0.888885ZM22.8257 5.46211L33.0937 22.009H13.101L22.8257 5.46211ZM17.8882 33.3004H6.4638L10.9272 25.7034H21.6115L17.8882 33.3004ZM24.2826 25.7034H35.389L40.1068 33.3004H28.1794L24.2826 25.7034Z"
                fill="white"
              />
            </svg>
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-white mt-3">
              AT DIGITAL
            </span>
          </div>
          <p className='text-left mt-3'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        
        <div className='flex flex-col sm:flex-row sm:justify-between md:justify-evenly p-4 right-side'>
          <div className='rigt-left mb-4 md:mb-0'>
            <h4 className="font-bold text-left" id='middle-right'>Our Technologies</h4>
            <ul className='text-left cursor-pointer'>
              <li>ReactJS</li>
              <li>NodeJS</li>
              <li>NextJS</li>
              <li>Gatsby</li>
            </ul>
          </div>
          <div className='right-right'>
            <h4 className="font-bold text-left">Our Services</h4>
            <ul className='text-left cursor-pointer'>
              <li>Web & Mobile App Development</li>
              <li>Digital Strategy Consulting</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className='mt-3 flex flex-col items-center'>
        <div className='w-[calc(100%-2rem)] md:w-1/3  border-t border-gray-300 mb-2 ' />
        <div className='p-2 text-center'>
          <p className='text-white cursor-pointer'>Privacy Policy  | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
