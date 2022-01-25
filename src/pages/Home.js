import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Modal from '../components/Modal';


const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <Projects />
            <Modal/>
        </>
     );
}
 
export default Home;