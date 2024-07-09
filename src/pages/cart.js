import React, { useState } from 'react';
import CartItem from '../components/cartitems';
import CartSummary from '../components/cartsummary';
import ring from '../images/image 17.png';

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Diamond cut Ring',
      price: 2500,
      quantity: 1,
      image: ring, 
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, quantity: Math.max(1, quantity) } : product
    ));
  };

  const handleRemove = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const subtotal = products.reduce((total, product) => total + product.price * product.quantity, 0);
  const deliveryFee = 10;
  const discount = 5;
  const promoOffer = 0;

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="border-b pb-4">
          <div className="flex justify-between">
            <span className="text-lg font-medium">Product</span>
            <span className="text-lg font-medium">Price</span>
            <span className="text-lg font-medium">Quantity</span>
          </div>
        </div>
        {products.map(product => (
          <CartItem 
            key={product.id} 
            product={product} 
            onQuantityChange={handleQuantityChange} 
            onRemove={handleRemove} 
          />
        ))}
      </div>
      <CartSummary 
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        discount={discount}
        promoOffer={promoOffer}
      />
    </div>
  );
};

export default Cart;