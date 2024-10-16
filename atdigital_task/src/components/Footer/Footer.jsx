import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary-color text-white p-10 text-center mt-6 footer">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-10 justify-evenly">
        <div className="left-side  p-4 max-w-[450px] ">
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
            <span className=" font-lato self-center text-3xl font-semibold whitespace-nowrap text-white mt-3">
              AT DIGITAL
            </span>
          </div>
          <p className='font-lato text-left mt-3 '>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
        </div>
        
        <div className='flex flex-col sm:flex-row sm:justify-between md:justify-evenly p-4 right-side gap-2  md:gap-8'>
          <div className='rigt-left mb-4 md:mb-0 font-inter'>
            <h4 className="font-semibold text-left text-[21px] mb-2" id='middle-right'>Our Technologies</h4>
            <ul className='font-medium text-left text-[14px] cursor-pointer '>
              <li className='mb-2'>ReactJS</li>
              <li className='mb-2'>NodeJS</li>
              <li className='mb-2'>NextJS</li>
              <li className='mb-2'>Gatsby</li>
            </ul>
          </div>
          <div className='right-right'>
            <h4 className="font-semibold text-left text-[21px] mb-2">Our Services</h4>
            <ul className='font-medium text-left text-[14px] cursor-pointer'>
              <li className='mb-2'>Web & Mobile App Development</li>
              <li className='mb-2'>Digital Strategy Consulting</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className='mt-3 flex flex-col items-center'>
        <div className='w-[calc(100%-2rem)] max-w-[768px]  border-t border-gray-300 mb-2 ' />
        <div className='p-2 text-center'>
          <p className='text-white cursor-pointer font-inter text-[14px] font-medium'>Privacy Policy  | Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
