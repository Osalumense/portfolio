import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Modal from '../components/Modal';
import Projects from '../components/Projects';
import Services from '../components/Services';


const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <About />
            <Projects />
            <Services /> 
            <Contact />           
            <Footer />
            <Modal/>

        </>
     );
}
 
export default Home;