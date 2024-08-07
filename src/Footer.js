import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <div className='lp'>
      <footer className='lp_footer'>
        <div className='foot_social'>
          <div className='foot_section'>
            <h5>ONLINE SHOPPING</h5>
            <br />
            <p>Men</p>
            <p>Women</p>
            <p>Kids</p>
            <p>Home & Living</p>
            <p>Beauty</p>
            <p>Gift Cards</p>
            <p>Myntra Insider</p>
            <br />
            <h5>USEFUL LINKS</h5>
            <br />
            <p>Blog</p>
            <p>Careers</p>
            <p>Site Map</p>
            <p>Corporate Information</p>
            <p>Whitehat</p>
          </div>
          <div className='foot_section'>
            <h5>CUSTOMER POLICIES</h5>
            <br />
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>T&C</p>
            <p>Terms Of Use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>Returns</p>
            <p>Privacy policy</p>
            <p>Grievance Officer</p>
          </div>
          <div className='foot_section'>
            <h5>EXPERIENCE MYNTRA APP ON MOBILE</h5>
            <div className="image">
              <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play Store" />
              <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="Apple Store" />
            </div>
            <br />
            <h5>KEEP IN TOUCH</h5>
            <div className="image">
              <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" alt="Facebook" />
              <img src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" alt="Twitter" />
              <img src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" alt="YouTube" />
              <img src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" alt="Instagram" />
            </div>
          </div>
          <div className='foot_section'>
            <div className="image">
              <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="100% Original" />
              <p><b>100% ORIGINAL</b> guarantee for all products at myntra.com</p>
            </div>
            <div className="image">
              <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" alt="Return within 14 days" />
              <p><b>Return within 14 days</b> of receiving your order</p>
            </div>
          </div>
        </div>
        <hr />
        <div id="foot_popular">
          <h5>POPULAR SEARCHES</h5>
          <p>Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport | Shoes | Reebok | Shoes | Puma | Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees</p>
          <div>
            <p>In case of any concern, Contact Us</p>
            <p>© 2024 www.myntra.com.  All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
