import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ subtotal, deliveryFee, discount, promoOffer }) => {
  const grandTotal = subtotal + deliveryFee - discount;

  return (
    <div className="border p-6 rounded-lg border-customColor text-black font-pt-serif text-lg">
      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Fee:</span>
        <span>${deliveryFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Discount:</span>
        <span>-${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Promo Offer:</span>
        <span>${promoOffer.toFixed(2)}</span>
      </div>
      <hr className="my-2 border-black" />
      <div className="flex justify-between mb-4">
        <span className="font-pt-serif text-lg">Grand Total:</span>
        <span className="font-pt-serif text-lg">${grandTotal.toFixed(2)}</span>
      </div>
      <hr className="my-2 border-black" />
      <Link to='/checkout'>
        <button className="w-full py-2 bg-customColor text-white rounded-md font-pt-serif">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartSummary;
