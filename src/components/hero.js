import React from 'react';
import back from '../images/Frame 45.png'

const Hero = () => {
  return (
    <section className="relative w-full h-96">
      <img src={back} alt="photo" className="w-full h-full object-cover"/>
      <div className="flex items-start justify-start pt-36">
        <div className="absolute top-44 left-0 text-start text- px-4 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Elevate Your Beauty with our Timeless <br/>Jewelry Collections</h1>
          <p className="mb-4 font-pt-serif">You are never fully dressed without jewelry</p>
          <button className="bg-transparent  px-4 border-2 rounded-md">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
