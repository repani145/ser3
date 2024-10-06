import React from 'react';
import { Link } from 'react-router-dom';
import Carsol from './Carsol/Carsol';
import Foodie from './Foodie';
import Footer from './Footers';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './navbar/navbar';

function Homepage() {
  return (
    <>
      <Nav/>
      <Carsol />
      <Foodie />
      <Footer />
    </>
  );
}

export default Homepage;
