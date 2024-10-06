import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from "../../context/Context"; // Import context
import cartImage from "./cart_img.png"; // Import cart image
import './nav.css'; // Custom styles

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartlist } = useContext(AppContext); // Access cart items from context
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Steakhouse</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarNav" aria-expanded={isOpen ? 'true' : 'false'} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={toggleNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Menu" onClick={toggleNavbar}>Menu</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About" onClick={toggleNavbar}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact" onClick={toggleNavbar}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login" onClick={toggleNavbar}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" onClick={toggleNavbar}>Signup</Link>
            </li>
            {/* Cart Icon */}
            <li className="nav-item">
              <div className="cart-icon" onClick={() => navigate("/cart")}>
                <img src={cartImage} alt="Cart" className="cart-image" />
                <span className="cart-count">{cartlist.length}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
