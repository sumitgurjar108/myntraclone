import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import LandingPage from './LandingPage';
import Men from './Men';
import Footer from './Footer';
import './App.css';
import Women from './Women';
import Kids from './Kids';
import HomeLiving from './HomeLiving';
import Beauty from "./Beauty";
import Cart from './Cart';
import Wishlist from './Wishlist';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route 
            exact 
            path="/" 
            element={
              <>
                <LandingPage />
                <Homepage />
              </>
            } 
          />
            <Route path="/" element={<Homepage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/home-living" element={<HomeLiving />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;