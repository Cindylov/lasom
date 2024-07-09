import React from 'react';
import { Link } from 'react-router-dom';
import ring from '../images/image 17.png';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 flex flex-col md:flex-row w-full max-w-4xl"> 
        <div className="md:w-2/3 md:pr-8">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
            <div className="w-1/2">
              <input type="text" className="w-full border rounded-md p-2"  placeholder= "Enter your full name" />
            </div>
            <div className="w-1/2">
              <input type="text" className="w-full border rounded-md p-2" placeholder="Enter your phone number" />
            </div>
            </div>
            <h2 className="text-2xl font-semibold mt-8 mb-6">Shipping Address</h2>
            <div>
              <input type="text" className="w-full border rounded-md p-2" placeholder="Enter your house address" />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input type="text" className="w-full border rounded-md p-2" placeholder="Enter your state" />
              </div>
              <div className="w-1/2">
                <input type="text" className="w-full border rounded-md p-2" placeholder="Enter your city" />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4 text-customColor">
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              <label>Ship to another address</label>
            </div>
            <div className="flex items-center space-x-2 text-customColor">
              <input type="checkbox" className="h-4 w-4" />
              <label>Save this address</label>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
              <div className="flex space-x-4">
                <div className="flex items-center">
                  <input type="radio" name="payment" id="card" className="h-4 w-4" />
                  <label htmlFor="card" className="ml-2">Pay with card</label>
                </div>
                <div className="flex items-center">
                  <input type="radio" name="payment" id="delivery" defaultChecked className="h-4 w-4" />
                  <label htmlFor="delivery" className="ml-2">Pay on delivery</label>
                </div>
              </div>
            </div>
          </form>
          <Link to='/recepit'><button className="mt-8 w-full bg-customColor text-white py-3 rounded-md font-semibold">Proceed</button></Link>
        </div>
        
        <div className="md:w-1/3 mt-8 md:mt-0 border-l-2 ps-6">
          <h2 className="text-2xl font-semibold mb-6">Your Order</h2>
          <div className="flex items-center mb-4">
            <img src={ring} alt="Product" className="w-20 h-20 object-cover mr-4 rounded-md" />
            <div>
              <h3 className="font-semibold">Diamond cut Ring</h3>
              <p>$2,500</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between border-t border-gray-300">
              <span>Subtotal</span>
              <span>$2,500.00</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$10.00</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-$5.00</span>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4 flex justify-between font-semibold">
              <span>TOTAL</span>
              <span>$2,505.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
