import React from 'react';
import ProductList from './ProductList';

const beautyProducts = [
  { id: 1, name: 'Moisturiser Cream', price: '$350', image: 'https://m.media-amazon.com/images/I/519mCFEcjJL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 2, name: 'Lakme iconic', price: '$280', image: 'https://m.media-amazon.com/images/I/51FF5ZTyoyL._SX679_.jpg' },
  { id: 3, name: 'Pearl & Beauty', price: '$230', image: 'https://m.media-amazon.com/images/I/31lyZiU5UAL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 1, name: 'Liquid Concealing', price: '$550', image: 'https://m.media-amazon.com/images/I/51c1xZSw73L._SX522_.jpg' },
  { id: 2, name: 'Bold health eye-mask', price: '$120', image: 'https://m.media-amazon.com/images/I/41B84Gs7jjL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 3, name: 'Ponds', price: '$300', image: 'https://m.media-amazon.com/images/I/41Xi8rzUelL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 3, name: 'FaceMist & Tooner', price: '$300', image: 'https://m.media-amazon.com/images/I/51TXS6HSKAL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 3, name: 'Glow Moisturizer', price: '$400', image: 'https://m.media-amazon.com/images/I/41d2tDS06UL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 1, name: 'Moisturiser Cream', price: '$350', image: 'https://m.media-amazon.com/images/I/519mCFEcjJL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 2, name: 'Lakme iconic', price: '$280', image: 'https://m.media-amazon.com/images/I/51FF5ZTyoyL._SX679_.jpg' },
  { id: 3, name: 'Pearl & Beauty', price: '$230', image: 'https://m.media-amazon.com/images/I/31lyZiU5UAL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 1, name: 'Liquid Concealing', price: '$550', image: 'https://m.media-amazon.com/images/I/51c1xZSw73L._SX522_.jpg' },
  { id: 2, name: 'Bold health eye-mask', price: '$120', image: 'https://m.media-amazon.com/images/I/41B84Gs7jjL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 3, name: 'Ponds', price: '$300', image: 'https://m.media-amazon.com/images/I/41Xi8rzUelL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 3, name: 'FaceMist & Tooner', price: '$300', image: 'https://m.media-amazon.com/images/I/51TXS6HSKAL._SX300_SY300_QL70_FMwebp_.jpg' },
  { id: 3, name: 'Glow Moisturizer', price: '$400', image: 'https://m.media-amazon.com/images/I/41d2tDS06UL._SX300_SY300_QL70_FMwebp_.jpg' },
];

const Beauty = () => {
  return (
    <div>
      <h1>Beauty Products</h1>
      <ProductList products={beautyProducts} />
    </div>
  );
};

export default Beauty;
