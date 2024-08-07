import React from 'react';
import './Home.css';

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <div className="homepage__banner">
        <img src="image.jpg" alt="Banner" />
      </div> */}
      <div className="homepage__categories">
        <h2>Categories</h2>
        <div className="categories__list">
          <div className="category__item">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRZnVvSyQ2yx6aaLE87MZe8VBLOkf3YBrjncSqdSU8VLFzBq6k7yeuUPFkJKS56UVDd8stLSrtk1R0GizloIaeMS0ejsqa7AfvbgRBkFMM&usqp=CAE" height={"250px"} width={"200px"} alt="Men" />
            <p>Men</p>
          </div>
          <div className="category__item">
            <img src="https://assets.ajio.com/medias/sys_master/root/20240406/jTor/6610dc8616fd2c6e6aa17c06/-473Wx593H-466855053-yellow-MODEL.jpg" height={"250px"} width={"200px"}alt="Women" />
            <p>Women</p>
          </div>
          <div className="category__item">
            <img src="https://www.suratsuit.in/product-img/Kid-s-Clothing-Set-Baba-Suit-B-1688391083.jpeg" height={"250px"} width={"200px"}  alt="Kids" />
            <p>Kids</p>
          </div>
          <div className="category__item">
            <img src="https://i.pinimg.com/236x/56/37/d9/5637d92a67cef36ec74d8190186b5b5e.jpg"  height={"250px"} width={"200px"}  alt="Home & Living" />
            <p>Home & Living</p>
          </div>
          <div className="category__item">
            <img src="https://images.pexels.com/photos/3993398/pexels-photo-3993398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  height={"250px"} width={"200px"}  alt="Beauty" />
            <p>Beauty</p>
          </div>
        </div>
      </div>
      <div className="homepage__featured">
        <h2>Featured Products</h2>
        <div className="featured__list">
          <div className="featured__item">
            <img src="https://www.soum.co.in/new_img/sliderimg02.webp" alt="Product 1" />
            <p>Product 1</p>
          </div>
          <div className="featured__item">
            <img src="https://4.imimg.com/data4/LS/RU/MY-13802834/nike-air-zoom-pegasus-33-full-black-running-sport-shoes-500x500.jpg" alt="Product 2" />
            <p>Product 2</p>
          </div>
          <div className="featured__item">
            <img src="https://m.media-amazon.com/images/I/61ildyzNgcL.jpg" alt="Product 3" />
            <p>Product 3</p>
          </div>
          <div className="featured__item">
            <img src="https://images.jdmagicbox.com/quickquotes/images_main/mercedes-battery-operated-4x4-jumbo-size-ride-toy-car-for-kids-with-windshield-blue-2220793414-cwbb1e77.jpg" alt="Product 4" />
            <p>Product 4</p>
          </div>
          {/* <div className="featured__item">
            <img src="" alt="Product 4" />
            <p>Product 5</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
