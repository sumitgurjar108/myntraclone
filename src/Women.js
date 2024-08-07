import React from 'react';
import ProductList from './ProductList';

const womenProducts = [
  { id: 1, name: 'Kurtis', price: '$599', image: 'https://m.media-amazon.com/images/I/61b+ACQobxL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 2, name: ' Girl-Tops', price: '$499', image: 'https://m.media-amazon.com/images/I/81ThKfAzc7L._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 3, name: 'Serums', price: '$250', image: 'https://m.media-amazon.com/images/I/518Kga8mzGL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 3, name: 'Sarees', price: '$999', image: 'https://m.media-amazon.com/images/I/71Yt6iUTfEL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 1, name: 'medi dress', price: '$699', image: 'https://m.media-amazon.com/images/I/61Nbbwvh8mL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 1, name: 'Formal dress', price: '$899', image: 'https://m.media-amazon.com/images/I/61KoTPN8g1L._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 1, name: 'Jeans', price: '$1099', image: 'https://m.media-amazon.com/images/I/71Qox1JaZeL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 2, name: 'Perfume set', price: '$1499', image: 'https://m.media-amazon.com/images/I/614cN6CDldL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 3, name: 'Bags', price: '$559', image: 'https://assets.ajio.com/medias/sys_master/root/20230927/Sdfh/65144a8eddf77915190a22e0/-473Wx593H-410394375-01421-MODEL.jpg' },
  { id: 3, name: 'Makeup kits', price: '$1559', image: 'https://rukminim2.flixcart.com/image/850/1000/kcuug7k0/combo-kit/f/d/y/makeup-kit-combo-waterproof-and-matte-finish-makeup-product-18-a-original-imaftwygu8chc7gz.jpeg?q=90&crop=false' },
  { id: 3, name: 'Saindals', price: '$499', image: 'https://m.media-amazon.com/images/I/51eAkwf8sJL._SX695_.jpg' },
  { id: 3, name: 'Beauty products', price: '$499', image: 'https://www.gulftoday.ae/-/media/gulf-today/images/articles/lifestyle/2019/8/21/makeup-health-2.ashx?h=450&w=750&hash=B56BAACDEE9D77B1C62413424D31D49A' },
];

const Women = () => {
  return (
    <div>
      <h1>Women's Products</h1>
      <ProductList products={womenProducts} />
    </div>
  );
};

export default Women;
