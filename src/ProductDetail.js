import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onClose }) => {
  return (
    <div className="product-detail">
      <button onClick={onClose} className="close-button">Close</button>
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
