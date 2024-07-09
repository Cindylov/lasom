import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cart from './pages/cart';
import Productlist from './pages/productlist';
import CheckoutPage from './pages/checkout';
import Receipt from './pages/recepit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Productlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
        <Route path='/recepit' element={<Receipt/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;