import React from 'react';
import { Link } from 'react-router-dom';
import ring from '../images/image 17.png';

const Receipt = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h1 className="text-center text-xl font-bold mb-4">Thank you for shopping at Lasom</h1>
        <p className="text-center mb-6">Your order confirmation and receipt have been sent to xyz@gmail.com</p>

        <div className="p-4 rounded-md mb-6 border border-customColor">
          <h2 className="font-semibold text-lg mb-2">Receipt</h2>
          <div className="flex justify-between mb-1">
            <span>Transaction Date</span>
            <span>05-07-2024</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Transaction ID</span>
            <span>4356789200ASDRE</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Arrival Date</span>
            <span>10-07-2024</span>
          </div>
          <hr className="border-customColor mb-3"/>
          <div className="flex items-center mb-4">
            <img src={ring} alt="Product" className="w-16 h-16 rounded-md mr-4"/>
            <div className="flex justify-between">
              <span className="block font-semibold me-10">Diamond cut Ring</span>
              <span className="block ms-12 text-gray-400">$2,500</span>
            </div>
          </div>
          <hr className="border-customColor mb-3"/>
          <div className="flex justify-between mb-1">
            <span>Subtotal</span>
            <span>$2,500</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Delivery fee</span>
            <span>$10</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Discount</span>
            <span>-$5</span>
          </div>
          <hr className="border-customColor mb-3"/>
          <div className="flex justify-between font-bold">
            <span>TOTAL</span>
            <span>$2,505</span>
          </div>
        </div>
       
        <Link to='/'><button className="w-full bg-customColor text-white py-2 rounded-lg transition duration-200">
          Continue shopping
        </button></Link>
         </div>
      
    </div>
  );
}

export default Receipt;
