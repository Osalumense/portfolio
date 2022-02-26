import React from 'react';
import NavBar from '../components/Navigation/NavBar';
// import heroImg from '../assets/images/portfolio-img.png';
import cv from '../assets/Akugbe_Stephen_CV.pdf';
import { FaArrowDown } from 'react-icons/fa';
import { FiNavigation } from 'react-icons/fi';

const Hero = () => {
    return ( 
                <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="max-w-screen mt-12 p-4 md:p-12" data-aos="zoom-in">

                    <div className="flex bg-transparent flex-col lg:flex-row py-8 justify-between text-center lg:text-left overflow-x-hidden">
                        <div className="lg:w-3/4 flex flex-col lg:mx-8 justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h3 
                                className="mb-5 md:text-4xl text-xl font-bold text-slate-800 dark:text-slate-300"
                            >
                                Hello, I'm
                            </h3>
                            <h1 
                                className="text-3xl lg:text-5xl font-bold mb-6"
                            >
                                <span
                                    className="bg-gradient-to-br  from-slate-800 via-zinc-500 to-black dark:from-yellow-400 dark:to-yellow-50 text-transparent bg-clip-text"
                                >
                                    Akugbe Stephen
                                </span>
                            </h1>
                            <h3
                                className="text-5xl lg:text-7xl text-gray-900 dark:text-gray-200 font-bold"
                            >
                                A Full Stack 
                                <span 
                                    class="block before:absolute before:-inset-1 before:-skew-y-3
                                    before:p-4 mt-4 lg:mt-0
                                    hover:skew-y-6
                                    cursor-pointer
                                    transition-all ease-in duration-500
                                    before:bg-yellow-400 ml-2 relative inline-block"
                                    >
                                    <span 
                                        class="relative text-white text-5xl m-3"
                                    >
                                        Web Developer
                                    </span>
                                </span>
                            </h3>
                            <div className="mt-8 space-x-0 md:space-x-6 md:mb-8">
                                <a 
                                    href={cv} 
                                    className="text-white bg-gradient-to-r from-slate-800 via-zinc-500 to-black  dark:from-yellow-400 dark:to-slate-600 dark:via-zinc-500 hover:bg-blue-800 hover:scale-90 transition ease-in duration-500 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl group sm:w-auto sm:mb-0"
                                    download
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
                        {/* <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            {/* <img alt="card img" className="rounded-t float-right hover:scale-110 transition-all ease-in duration-500 w-full" src={heroImg} />
                        </div> */}
                    </div>
                </div>
                <div
                    class="h-20 w-20 rounded-full bg-yellow-400 absolute animate-pulse top-2 left-2 -ml-10 mt-24"
                ></div>
                {/* 
                  <div
                    class="h-12 w-32 animate-pulse rounded-full bg-yellow-200 absolute top-0 right-2 -ml-32 mt-24"
                ></div>
                            <svg
                            height="150"
                            width="150"
                            viewBox="0 0 20 20"
                            className="absolute top-16 mt-24 lg:mt-48 -mr-28 lg:-mr-8 right-0 mx-auto mb-12"
                            >
                            <circle r="10" cx="10" cy="10" fill="#FACC15" />
                            <circle
                                r="5"
                                cx="10"
                                cy="10"
                                fill="transparent"
                                stroke="#EBBB30"
                                stroke-width="10"
                                stroke-dasharray="11 31.4"
                                transform="rotate(-90) translate(-20)"
                            />
                            </svg> */}
            </div>
        </>
     );
}
 
export default Hero;