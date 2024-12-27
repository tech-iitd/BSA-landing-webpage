import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Sports from './pages/Sports/Sports';
import Experiences from './pages/Experiences/Experiences';
import Updates from './pages/Updates/Updates';
import Profile from './pages/Profile/Profile';
import Data from './data/Data';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import SportPage from './components/SportPage/SportPage';
import Cookies from 'js-cookie';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token'); // Get the token from cookies

    if (token) {
      setIsAuth(true);
    }
  }, []);

  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, x: -70 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 70 },
  };

  const pageTransition = { duration: 0.5, ease: 'easeInOut' };

  return (
    <Data>
      <div className="app">
        <Header isAuth={isAuth} />
        <div className="pages">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Home />
                  </motion.div>
                }
              />
              <Route
                path="/about"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <About />
                  </motion.div>
                }
              />
              <Route
                path="/sports"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Sports />
                  </motion.div>
                }
              />
              <Route
                path="/updates"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Updates />
                  </motion.div>
                }
              />
              <Route
                path="/experiences"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Experiences />
                  </motion.div>
                }
              />
              <Route
                path="/contact"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <Contact />
                  </motion.div>
                }
              />
              {isAuth ? (
                <Route
                  path="/profile"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Profile />
                    </motion.div>
                  }
                />
              ) : (
                <Route
                  path="/login"
                  element={
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={pageVariants}
                      transition={pageTransition}
                    >
                      <Login setIsAuth={setIsAuth} />
                    </motion.div>
                  }
                />
              )}
              <Route
                path="/sports/:sport"
                element={
                  <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={pageVariants}
                    transition={pageTransition}
                  >
                    <SportPage />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </Data>
  );
};

export default App;
