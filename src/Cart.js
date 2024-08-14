import React from 'react';
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h1 className="cart__header">PLEASE LOG IN</h1>
      <div className="cart__info">
        <p className="cart__text">Login to view items in your wishlist.</p>
        <img 
          src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" 
          alt="Empty Bag" 
          className="cart__image" 
        />
        <button className="cart__button">Login</button>
      </div>
    </div>
  );
};

export default Cart;
