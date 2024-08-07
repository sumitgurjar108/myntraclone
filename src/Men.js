import React from 'react';
import ProductList from './ProductList';

const menProducts = [
  { id: 1, name: 'Dresses', price: '$700', image: 'https://m.media-amazon.com/images/I/91PUf68eaCL._SY879_.jpg' },
  { id: 2, name: 'watches', price: '$380', image: 'https://m.media-amazon.com/images/I/61ybeKQto8L._SY879_.jpg' },
  { id: 3, name: 'Bags', price: '$2000', image: 'https://m.media-amazon.com/images/I/71maWXZscfL._SX679_.jpg' },
  { id: 4, name: 'Rings', price: '$400', image: 'https://m.media-amazon.com/images/I/51sre9WpS4L._SX695_.jpg' },
  { id: 5, name: 'Gadgets', price: '$999', image: 'https://m.media-amazon.com/images/I/41YMwuO+3DL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 6, name: 'Umbrella', price: '$500', image: 'https://m.media-amazon.com/images/I/510EtOiw5fL._SX679_.jpg' },
  { id: 7, name: 'Boot', price: '$799', image: 'https://m.media-amazon.com/images/I/51C5-V1grvL._SY695_.jpg' },
  { id: 8, name: 'Belts', price: '$350', image: 'https://m.media-amazon.com/images/I/71LjwCvMAmL._SX679_.jpg' },
  { id: 9, name: 'T-Shirt', price: '$449', image: 'https://m.media-amazon.com/images/I/71x4rLhMkML._SY879_.jpg' },
  { id: 10, name: 'Jeans', price: '$399', image: 'https://m.media-amazon.com/images/I/81O8uTrEGnL._SY879_.jpg' },
  { id: 11, name: 'Garments', price: '$400', image: 'https://m.media-amazon.com/images/I/61s4ir51gEL._SX679_.jpg' },
  { id: 12, name: 'Glasses', price: '$249', image: 'https://m.media-amazon.com/images/I/51-qV3DGs-L._SX679_.jpg' },
];

const Men = () => {
  return (
    <div>
      <h1>Men's Products</h1>
      <ProductList products={menProducts} />
    </div>
  );
};

export default Men;
