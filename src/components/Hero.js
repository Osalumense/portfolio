import React from 'react';
import NavBar from '../components/Navigation/NavBar';
import heroImg from '../assets/images/portfolio-img.png';
import { FaArrowDown } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';

const Hero = () => {
    return ( 
                <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto max-w-screen mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col lg:mx-8 justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h3 
                                className="mb-5 md:text-3xl text-xl font-bold text-slate-800 dark:text-slate-300"
                            >
                                Hello, I'm
                            </h3>
                            <h1 
                                className="text-3xl lg:text-5xl font-black mb-6"
                            >
                                <span
                                    className="bg-gradient-to-br  from-slate-800 via-zinc-500 to-black dark:from-yellow-400 dark:to-yellow-50 text-transparent bg-clip-text"
                                >
                                    Akugbe Stephen
                                </span>
                            </h1>
                            <h3
                                className="text-xl lg:text-2xl text-gray-900 dark:text-gray-200 font-semibold"
                            >
                                A Full Stack 
                                <span 
                                    className="bg-yellow-400 p-1 mx-2">Web Developer
                                </span>
                            </h3>
                            <div className="mt-8 space-x-0 md:space-x-6 md:mb-8">
                                <a 
                                    href="#_" 
                                    className="text-white bg-gradient-to-r from-slate-800 via-zinc-500 to-black  dark:from-yellow-400 dark:to-slate-600 dark:via-zinc-500 hover:bg-blue-800 hover:scale-90 transition ease-in duration-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl group sm:w-auto sm:mb-0"
                                >
                                    Download CV
                                    <FaArrowDown className="w-4 h-4 ml-1 group-hover:animate-bounce"/>
                                </a>
                                <a 
                                    href="#_" 
                                    className="inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg text-white bg-gray-500 hover:scale-90 transition ease-in duration-500 shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                        Let's Talk
                                        <FiNavigation className="w-4 h-4 ml-1 text-2xl"/>
                                    {/* <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg> */}
                                </a>
                            </div>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right hover:scale-110 transition-all ease-in duration-500 w-full" src={heroImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Hero;