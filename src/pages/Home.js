import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';


const Home = () => {
    return (
        <>
            <NavBar/>
            <Hero />
            <Projects />
        </>
     );
}
 
export default Home;