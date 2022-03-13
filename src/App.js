import './index.css';
import React, {useState, useEffect} from "react";
import { FaArrowUp } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import AOS from 'aos';
import "aos/dist/aos.css";

function App() {
  const [showButton, setShowButton] = useState(false);

  //Initialize animate on scroll
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    }; 
  return (
    <div className='dark:bg-slate-900'>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    {showButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-0 right-0 z-20 flex items-center justify-center w-10 h-10 mb-8 mr-8 overflow-hidden bg-yellow-400 hover:bg-yellow-300 text-gray-50 transition-all ease-in-out duration-500 rounded group"
          >
            < FaArrowUp className="group-hover:translate-y-[-.3rem] transition duration-500"/>
          </button>
    )}
  </div>
    
  );
}

export default App;
