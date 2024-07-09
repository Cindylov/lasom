import React from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';
import stoneset from '../images/image 12.png';
import bridalset from '../images/image 13.png';
import goldnecklace from '../images/image 14.png';
import chain from '../images/image 15.png';
import diamondstud from '../images/image 16.png';
import ringcut from '../images/image 17.png';
import rose from '../images/image 18.png';
import earring from '../images/image 20.png';
import pearl from '../images/Frame 19.png';
import gold from '../images/Frame 20.png'; 
import diamond from '../images/Frame 21.png';
import stud from '../images/Frame 22.png';
import stone from '../images/Frame 23.png';
import bracelet from '../images/Frame 24.png';
import ring from '../images/Frame 25.png';
import cut from '../images/Frame 26.png';


const products = [
  { name: 'Emerald stone set', price: '$2,250', image: stoneset},
  { name: 'Bridal Set', price: '$3,050', image:  bridalset},
  { name: 'Gold Necklace', price: '$2,050', image: goldnecklace},
  { name: 'Wide Gold Chain', price: '$2,050', image: chain},
  { name: 'Diamond Stud', price: '$3,000', image: diamondstud},
  { name: 'Diamond cut Ring', price: '$2,500', image: ringcut},
  { name: 'Rose & White Gold', price: '$2,500', image: rose},
  { name: 'Gold Hoop Earring', price: '$1,500', image: earring},
  { name: 'Pearl necklace', price: '$1,500', image: pearl },
  { name: 'Gold choker', price: '$1,800', image: gold },
  { name: 'Diamond drop', price: '$1,850', image: diamond },
  { name: 'Pearl stud', price: '$1,250', image: stud },
  { name: 'Gem Stone', price: '$1,250', image: stone },
  { name: 'Gold Bracelet Stack', price: '$1,150', image: bracelet },
  { name: '2-stone Ring', price: '$850', image: ring },
  { name: 'Princess Cut', price: '$850', image: cut },
];

const Product = () => {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-pt-serif">
        <p>Choose from our varieties of products...</p>
        <div className=" mb-6 mt-4">
          <h2 className="text-3xl font-semibold text-center text-customColor px-4">Products</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className=" rounded-lg p-4 text-center relative">
              <img src={product.image} alt={product.name} className="w-287 h-377 object-cover mb-2 rounded-md" />
              <div className="bg-white rounded-md absolute left-6 bottom-8 lg:w-60 ">
              <div className="flex lg:flex justify-around items-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <Link to='/cart'><BiRightArrowAlt className="border rounded-full border-customColor"/></Link>
              </div>
              <div className="flex lg:flex justify-around items-center">
              <p className="pe-2 ps-1">{product.price}</p>
              <button className="bg-customColor text-white px-3 mb-2 mt-2 me-1 rounded-md">Add to cart</button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Product;