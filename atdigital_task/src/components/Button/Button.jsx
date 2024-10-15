import React from 'react';


const Button = ({ text, onClick }) => {
  return (
    <button className="custom-button bg-secondary-color text-light-white uppercase tracking-wide " onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
