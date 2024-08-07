// src/pages/Kids.jsx
import React from 'react';
import ProductList from './ProductList';

const kidsProducts = [
  {
    id: 1,
    name: 'Boys Printed T-shirt',
    price: '₹499',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOh8ZJFj1H9CZxcf5_dXUbxBcAHpEzbaiMQ&s',
    description: 'Great freedom sale Boys Polo Shirt'
  },
  {
    id: 2,
    name: 'Girls Floral Dress',
    price: '₹799',
    image: 'https://images.bestsellerclothing.in/data/only-kids/04-feb-2023/127832401_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
    description:"FASHION DREAM Floral Fit & Flared"
  },
  {
    id: 3,
    name: 'Boys Casual Shirt',
    price: '₹699',
    image: 'https://5.imimg.com/data5/OH/IT/MY-12680486/denim-casual-shirt-1000x1000.jpg',
    description:"Polo Mens shirt ",
  },
  {
    id: 4,
    name: 'Girls Denim Shorts',
    price: '₹599',
    image: 'https://images.meesho.com/images/products/102382633/lch6k_1200.jpg',
    description:"Pepe Jeans Girls Denim Shorts"
  },
  {
    id: 5,
    name: 'Boys Track Pants',
    price: '₹499',
    image: 'https://assets.ajio.com/medias/sys_master/root/hc9/h16/12655026470942/-473Wx593H-440590145-navy-MODEL.jpg',
    description:"Mini adidas track pants",
  },
  {
    id: 6,
    name: 'Doll',
    price: '₹599',
    image: 'https://m.media-amazon.com/images/I/71agSbTVXvL._AC_UF1000,1000_QL80_.jpg',
    description:'Barbie doll for small kids'
  },
  {
    id: 7,
    name: 'Toys',
    price: '₹299',
    image: 'https://m.media-amazon.com/images/I/71ML2TRKAUL._AC_UF1000,1000_QL80_.jpg',
    description:'Aganta Dancing Cactus Lights Up Talking Singing Toy Decoration Rechargeable ...'
  },
  {
    id: 7,
    name: 'Pretend Toys',
    price: '₹1099',
    image: 'https://d3r47b04tm9cwy.cloudfront.net/product-images/BBAT57-1.webp',
    description:'Zuuluzrs Supermarket Role Pretend Playset Big Size Kit For Kids Toys',
  },
];

const Kids = () => {
  return (
    <div>
      <h1>Kids' Products</h1>
      <ProductList products={kidsProducts} />
    </div>
  );
};

export default Kids;
