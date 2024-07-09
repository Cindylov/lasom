import React from 'react';
import arrow from '../images/octicon_triangle-right-24.png'

const Breadcrumb = () => {
  return (
    <nav className="py-2 px-4 bg-gray-500">
      <a href="#" className="text-black">Home</a> <img src={arrow} alt='arrow'/>
      <span className="text-gray-600"> check out</span>
    </nav>
  );
};

export default Breadcrumb;