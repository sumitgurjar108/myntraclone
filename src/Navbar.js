// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={handleLogoClick} style={{ cursor: 'grab' }}>
        <img 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6mUEIoq3UUDmgCEHRvIn72bcQ63JIZ8eH1A&s' 
          height={"60px"} 
          width={"60px"} 
          alt="Logo" 
        />
      </div>
      <div className="navbar__links">
        <a href="/men"><i className="fas fa-male"></i> Men</a>
        <a href="/women"><i className="fas fa-female"></i> Women</a>
        <a href="/kids"><i className="fas fa-child"></i> Kids</a>
        <a href="/home-living"><i className="fas fa-home"></i> Home & Living</a>
        <a href="/beauty"><i className="fas fa-lipstick"></i> Beauty</a>
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search for products, brands, and more" />
        <button type="button"><i className="fas fa-search"></i> Search</button>
      </div>
      <div className="navbar__actions">
        <a href="/wishlist"><i className="fas fa-heart"></i> Wishlist</a>
        <a href="/cart"><i className="fas fa-shopping-cart"></i> Cart</a>
        <a href="/profile"><i className="fas fa-user"></i> Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
