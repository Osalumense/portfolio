import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import { HashLink } from 'react-router-hash-link';
import cv from '../assets/Akugbe_Stephen_CV.pdf';
import { FaArrowDown, FaGithub, FaLinkedin, FaTwitterSquare, FaDev } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';


const Hero = () => {
    return ( 
                <>
            <div 
                className="hero" 
                id='hero'
            >
                <div>
                    <NavBar />
                </div>
                
                <div 
                    className="
                    max-w-screen 
                    mt-12 
                    p-4 
                    md:p-12"
                    >

                    <div 
                        className="
                        flex 
                        bg-transparent 
                        flex-col 
                        lg:flex-row 
                        py-8 
                        justify-between 
                        text-center 
                        lg:text-left 
                        overflow-hidden"
                    >
                        <div 
                            className="
                            lg:w-3/4 
                            flex 
                            flex-col 
                            lg:mx-8 
                            justify-center"
                        >
                            <h3 
                                className="
                                mb-5 
                                text-xl
                                md:text-4xl 
                                font-bold 
                                text-slate-800 
                                dark:text-slate-300" 
                                data-aos="fade-up" 
                                data-aos-delay="200"
                            >
                                Hello, I'm
                            </h3>
                            <h1 
                                className="
                                text-3xl 
                                lg:text-5xl 
                                font-bold 
                                mb-6"
                                data-aos="fade-up" 
                                data-aos-delay="400"
                            >
                                <span
                                    className="
                                    bg-gradient-to-br 
                                    from-slate-800 
                                    via-zinc-500 
                                    to-black dark:from-yellow-400 dark:to-yellow-50 
                                    text-transparent 
                                    bg-clip-text"
                                >
                                    Akugbe Stephen
                                </span>
                            </h1>
                            <h3
                                className="text-4xl 
                                lg:text-6xl 
                                text-gray-900 
                                dark:text-gray-200 
                                font-bold"
                                data-aos="zoom-in-up" 
                                data-aos-delay="700"
                            >
                                A Full Stack 
                                <span 
                                    className="
                                    block 
                                    before:absolute 
                                    before:-inset-1 
                                    before:-skew-y-3
                                    before:p-4 
                                    mt-8 
                                    lg:mt-0
                                    hover:skew-y-6
                                    cursor-pointer
                                    transition-all 
                                    ease-in 
                                    duration-500
                                    before:bg-yellow-400 
                                    ml-2 
                                    relative 
                                    inline-block"
                                    >
                                    <span 
                                        className="
                                        relative 
                                        text-white 
                                        m-3"
                                    >
                                        Web Developer
                                    </span>
                                </span>
                            </h3>
                            <div 
                                className="mt-8 space-x-0 md:space-x-6 md:mb-8"
                                data-aos="fade-up" data-aos-delay="900"
                            >
                                <a 
                                    href={cv} 
                                    className="text-white bg-yellow-400 hover:bg-yellow-300 hover:scale-90 transition ease-in duration-500 inline-flex items-center justify-center px-6 py-3 my-4 mx-3 group text-lg shadow-xl rounded-2xl group sm:w-auto sm:mb-0"
                                    download
                                >
                                    Download CV
                                    <FaArrowDown className="w-4 h-4 ml-1 group-hover:animate-bounce"/>
                                </a>
                                <HashLink 
                                    smooth to="/#contact" 
                                    className="inline-flex items-center justify-center px-6 py-3 my-4 mx-3 text-lg text-white bg-gray-500 hover:scale-90 transition ease-in duration-500 shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                        Let's Talk
                                        <FiNavigation className="w-4 h-4 ml-1 text-2xl"/>
                                </HashLink>
                            </div>
                            <div
                                className="flex flex-row my-2 items-center md:space-x-6 mx-3 justify-center 
                                lg:justify-start"
                                data-aos="zoom-in-up" 
                                data-aos-delay="700"
                            >
                                <a href="https://github.com/Osalumense" rel="noreferrer" target="_blank">
                                    <FaGithub className="text-gray-600 hover:text-gray-500 
                                    dark:text-white 
                                    dark:hover:text-gray-200 
                                    w-8 h-8"/>
                                </a>
                                <a href="https://linkedin.com/in/akugbe-stephen" rel="noreferrer" target="_blank">
                                    <FaLinkedin className="text-blue-600 hover:text-blue-500 w-8 h-8"/>
                                </a>
                                <a href="https://twitter.com/Itz_Steavean" rel="noreferrer" target="_blank">
                                    <FaTwitterSquare className="text-blue-400 hover:text-blue-300
                                    w-8 h-8"/>
                                </a>
                                <a href="https://dev.to/osalumense" rel="noreferrer" target="_blank">
                                    <FaDev className="text-gray-800 hover:text-gray-700 
                                    dark:text-white 
                                    dark:hover:text-gray-200 
                                    w-8 h-8"/>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="h-20 w-20 rounded-full bg-yellow-400 absolute animate-pulse top-2 left-2 -ml-10 mt-24"
                ></div>
            </div>
        </>
     );
}
 
export default Hero;
