import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantDetails from './fetchdata/RestaurantDetails';
import RestaurantsList from './fetchdata/RestaurantsList';
import Apps from './fetchdata/Apps';
import Nav from '../HomepageComponents/navbar/navbar';
import Footer from '../HomepageComponents/Footers';


function Menupages() {
  return (
    <>
     {/* <CartProvider>  */}
     <Nav/>
     <div className='main-content'>
    <Apps/>
    </div>
     {/* </CartProvider>   */}
     <Footer/>
    </>
  );
}

export default Menupages;
