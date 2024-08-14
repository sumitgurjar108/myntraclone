import React from 'react';
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__header">My Account</h1>
      <div className="profile__details">
        <div className="profile__info">
          <img 
            src="https://img.freepik.com/premium-vector/cute-smiling-boy-avatar-flat-style-vector-illustration_710508-1241.jpg" 
            alt="User Avatar" 
            className="profile__avatar"
          />
          <div className="profile__text">
            <h2 className="profile__name">Sumit Singh Gurjar</h2>
            <p className="profile__email">sumit@gmail.com</p>
          </div>
        </div>
        <div className="profile__sections">
          <button className="profile__button">Orders</button>
          <button className="profile__button">Wishlist</button>
          <button className="profile__button">Gift Cards</button>
          <button className="profile__button">Addresses</button>
          <button className="profile__button">Payment</button>
          <button className="profile__button">Contact Us</button>
          <button className="profile__button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
