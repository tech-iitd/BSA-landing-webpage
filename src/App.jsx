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
import Profile from './pages/Profile/Profile';
import Data from './data/Data';
import Login from './pages/Login/Login';
const App = () => {

  const [isAuth, setIsAuth] = useState(true);
  useEffect(()=>{
    // const token = localStorage.getItem('token');
    // if(token){
      setIsAuth(!isAuth);
    // }
  },[]);

  return (
    <Data>
      <div className='app'>
        <Header isAuth={isAuth}/>
        <div className='pages'>
          <Routes>  
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/experiences" element={<Experiences />} />
            {
              isAuth ? (
                <Route path="/profile" element={<Profile />} />
              ) : (
                <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
              )
            }
          </Routes>   
        </div>
          
        <Footer/>
      </div>
    </Data>
  );
}

export default App;
