import React, { useState } from 'react';
import { BiMenu } from "react-icons/bi";
import user from "./../images/Group.png";
import sea from "./../images/ion_search-outline.png";
import cart_icon from "./../images/mdi_cart-outline.png"
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brown-700 text-black px-4 py-3">
      <div className="flex justify-between items-center">
        <div className="font-rubik-glitch text-4xl font-normal text-customColor1">Lasom</div>
        <div className="hidden md:flex space-x-4">
        <Link to="/" className="hover:underline text-customColor font-normal text-2xl">Products</Link>
        <Link to='/cart' className="hover:underline font-normal text-2xl">My cart</Link>
        <Link to='/checkout' className="hover:underline font-normal text-2xl">Check out</Link>
        </div>
        <div className="flex space-x-4 font-normal text-2xl py-3 ">
          <img src={user} alt="user-image"/>
          <img src={sea} alt='search-image'/>
         <img src={cart_icon} alt="shopping-cart"/> 
          <a href="#contact" className="border border-customColor rounded-md px-4 font-normal hover:bg-customColor hover:text-white hidden md:flex space-x-4">Contact Us</a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <BiMenu  />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/" className="block hover:underline text-customColor font-normal">Products</Link>
          <Link to='/cart' className="block hover:underline font-normal">My cart</Link>
          <Link to='/checkout' className="block hover:underline font-normal">Check out</Link>
          <a href="#contact" className="block hover:underline font-normal">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;