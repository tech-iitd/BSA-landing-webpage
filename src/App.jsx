import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Sports from './pages/Sports/Sports';
import Experiences from './pages/Experiences/Experiences';
import Updates from './pages/Updates/Updates';
import Data from './data/Data';
const App = () => {

  return (
    <Data>
      <div className='app'>
        <Header />
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/experiences" element={<Experiences />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
          </Routes>   
        <Footer/>
      </div>
    </Data>
  );
}

export default App;
