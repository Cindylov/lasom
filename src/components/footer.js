import React from 'react';
import phone from '../images/basil_phone-outline.png';
import address from '../images/mdi_address-marker-outline.png';
import mail from '../images/typcn_mail.png'

const Footer = () => {
  return (
    <footer className="bg-customColor text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="me-20">
          <h2 className="font-rubik-glitch text-lg text-customColor1 leading-10">Lasom</h2>
          <p className="text-white">A jewelry ecommerce platform offering a wide range of products, aims to enhance its user experience to increase customer satisfaction and drive business growth.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Company</h2>
          <ul className="text-white leading-10">
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#story" className="hover:underline">Our Story</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
            <li><a href="#journal" className="hover:underline">Journal</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Help</h2>
          <ul className="text-white leading-10">
            <li><a href="#support" className="hover:underline">Customer support</a></li>
            <li><a href="#delivery" className="hover:underline">Delivery details</a></li>
            <li><a href="#terms" className="hover:underline">Terms and conditions</a></li>
            <li><a href="#privacy" className="hover:underline">Privacy policy</a></li>
          </ul>
          </div>
          <div>
          <h2 className="text-lg font-bold" id="contact">Contact</h2>
          <ul className="text-white leading-10">
            <p className="flex justify-normal items-center"><img src={address} alt="address"/> Lagos, Nigeria</p>
            <p className="flex justify-normal items-center"><img src={phone} alt="phone number"/> +2348123456789</p>
            <p className="flex justify-normal items-center"><img src={mail} alt="mail"/> lasom@xyz.com</p>
            </ul>
          </div>
      </div>
      <hr className="text-white mt-12"/>
      <div className="text-center mt-4 font-pt-serif">
        &copy; 2024 lasom.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;