import React from 'react';
import NavBar from './Navigation/NavBar';
import { HashLink } from 'react-router-hash-link';
import cv from '../assets/Stephen_Akugbe.pdf';
import { FaArrowDown } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';


const Hero = () => {
    return ( 
        <>
            <div 
                className="hero py-4" 
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
                            lg:mx-40 
                            flex 
                            flex-col 
                            lg:mx-48 
                            justify-center"
                        >
                            <h3 
                                className="
                                mb-8 
                                text-2xl
                                lg:text-5xl 
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
                                lg:text-7xl 
                                font-bold
                                mb-8 
                                lg:mb-12"
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
                                font-bold
                                lg:mb-12"
                                data-aos="zoom-in-up" 
                                data-aos-delay="700"
                            >
                                A Software
                                <span 
                                    className="
                                    block 
                                    before:absolute 
                                    before:-inset-1 
                                    before:-skew-y-3
                                    before:p-3 
                                    mt-8 
                                    lg:mt-0
                                    hover:skew-y-6
                                    cursor-pointer
                                    transition-all 
                                    ease-in 
                                    duration-500
                                    before:bg-yellow-400
                                    p-3
                                    ml-4 
                                    relative 
                                    inline-block"
                                    >
                                    <span 
                                        className="
                                        relative 
                                        text-white 
                                        m-3"
                                    >
                                        Engineer
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
                        </div>                        
                    </div>
                </div>
                
                <div
                    class="h-24 w-24 rounded-full bg-yellow-400 absolute animate-pulse -top-3 left-2 -ml-10 mt-24" data-aos="zoom-in" data-aos-duration="2000"
                ></div>
                <div
                    class="animate-pulse h-24 w-24 hidden xl:block skew-x-[20deg] skew-y-[20deg] bg-yellow-400 absolute opacity-70 top-8 right-12 -ml-10 mt-24"
                   
                ></div>
            </div>
            
        </>
     );
}
 
export default Hero;
