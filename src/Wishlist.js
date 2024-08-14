import React from 'react';
import "./wishlist.css";

const Wishlist = () => {
  return (
    <div className="wishlist">
      <h1 className="wishlist__header">BAG ---- ADDRESS ---- PAYMENT</h1>
      <div className="wishlist__info">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/011/614/104/non_2x/wishlist-icon-wish-list-icon-symbol-sign-free-vector.jpg" 
          alt="Empty Bag" 
          className="wishlist__image" 
        />
        <p className="wishlist__text">Hey, it's feeling so light!</p>
        <p className="wishlist__subtext">There is nothing in your bag. Let's add some items.</p>
        <button className="wishlist__button">Add items from Wishlist</button>
      </div>
    </div>
  );
};

export default Wishlist;
