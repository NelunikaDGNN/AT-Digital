import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary-color h-[77px]"> 
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 h-full"> 
        <a href="#" className="flex items-center space-x-3">
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
        </a>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        <div className="hidden md:flex space-x-8 text-white font-inter font-medium text-[14px]">
          <a href="#" className="text-light-white py-2">SERVICES</a>
          <a href="#" className="text-light-white py-2">ABOUT US</a>
          <a href="#" className="text-light-white py-2">CONTACT US</a>
          <a href="#" className="text-light-white py-2">CAREERS</a>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full h-screen absolute top-0 left-0 bg-light-white z-50 flex flex-col items-start p-8 md:hidden`}
          id="navbar-default"
        >
          <button
            onClick={toggleMenu}
            className="ml-auto mb-8 text-black p-2 w-10 h-10 hover:text-primary-color focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>

          <ul className="font-medium flex flex-col space-y-10 text-black">
           
            <li>
              <a href="#" className="block py-2 px-3 text-lg hover:text-primary-color">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-lg hover:text-primary-color">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-lg hover:text-primary-color">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-5 text-lg hover:text-primary-color">
                Careers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
