import React from 'react';
import trash from "./../images/trash-2.png"

const CartItem = ({ product, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center p-4 border-b">
      <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1 ml-4">
        <p className="text-lg font-medium">{product.name}</p>
        <p className="text-black">${product.price.toLocaleString()}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button 
          className="px-2 py-1 border" 
          onClick={() => onQuantityChange(product.id, product.quantity - 1)}
        >
          -
        </button>
        <input 
          type="text" 
          value={product.quantity} 
          readOnly 
          className="w-12 text-center border mx-1"
        />
        <button 
          className="px-2 py-1 border" 
          onClick={() => onQuantityChange(product.id, product.quantity + 1)}
        >
          +
        </button>
        <button 
          className="ml-4 text-red-600 hover:text-red-800" 
          onClick={() => onRemove(product.id)}
        >
          <img src={trash} alt="trash"/>
          
        </button>
      </div>
    </div>
  );
};

export default CartItem;
