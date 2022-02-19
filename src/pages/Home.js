import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Modal from '../components/Modal';


const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <About />
            <Projects />
            
            <Footer />
            <Modal/>

        </>
     );
}
 
export default Home;