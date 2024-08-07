import React from 'react';
import ProductList from './ProductList';

const homeProducts = [
  { id: 1, name: 'Home Decor Product ', price: '$2499', image: 'https://5.imimg.com/data5/SELLER/Default/2022/10/OZ/LN/CI/65948854/home-decor-products-500x500.jpg' },
  { id: 2, name: 'Bad Covers', price: '$120', image: 'https://5.imimg.com/data5/SELLER/Default/2024/5/415902702/BH/CK/DM/221094825/home-living-room-interior-designing-service-250x250.jpg' },
  { id: 3, name: 'Sofas', price: '$7000', image: 'https://5.imimg.com/data5/SELLER/Default/2023/9/346289644/MP/TB/ST/7731754/download-75-250x250.jpg' },
  { id: 4, name: 'Tribal Tradition', price: '$280', image: 'https://5.imimg.com/data5/SELLER/Default/2024/4/407970695/TM/MJ/SI/123944537/svetd0510-250x250.jpg' },
  { id: 5, name: 'Floor mates', price: '$900', image: 'https://rukminim2.flixcart.com/image/850/1000/ksnjp8w0/mat/e/a/0/150x210-extra-large-150x210-sparrow-world-original-imag66cn5fm7vdem.jpeg?q=20&crop=false' },
  { id: 6, name: 'TV interior', price: '$8000', image: 'https://image.made-in-china.com/2f0j00bRmcHlidSIqw/Light-Luxury-Home-Use-Living-Room-Furniture-Wooden-Durable-Storage-Background-Wall-Cabinet-TV-Stand.webp' },
  { id: 7, name: 'Statue', price: '$1100', image: 'https://homedecorlo.com/cdn/shop/products/51ZtKU6k4VS_530x@2x.jpg?v=1626155424' },
  { id: 8, name: 'Designing products', price: '$1200', image: 'https://hometown.gumlet.io/media/cms/icons/Kitchenware/table-accents.jpg?w=200&dpr=2.6' },
  { id: 9, name: 'flower Plots', price: '$499', image: 'https://pbs.twimg.com/media/CzDR327XcAElby_?format=jpg&name=large' },
  { id: 10, name: 'Kurtains', price: '$140', image: 'https://indiacircus.com/pub/media/wysiwyg/collection/images/Cushion-Covers-26.04.2022.jpg' },

];

const HomeLiving = () => {
  return (
    <div>
      <h1>Home & Living Products</h1>
      <ProductList products={homeProducts} />
    </div>
  );
};

export default HomeLiving;
