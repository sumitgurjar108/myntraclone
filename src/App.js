// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Men from './Men';
import LandingPage from './LandingPage';
import Footer from './Footer';
import './App.css';
import Women from './Women';
import Kids from './Kids';
import HomeLiving from './HomeLiving';
import Beauty from "./Beauty";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LandingPage />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/Home-Living" element={<HomeLiving />} />
          <Route path="/Beauty" element={<Beauty/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

