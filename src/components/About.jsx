import React from 'react';
import { FaPhp, FaLaravel, FaReact, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiMysql, SiMongodb, SiExpress, SiNodedotjs, SiFirebase } from 'react-icons/si';
import aboutImg from '../assets/images/Web Developer.svg';

function About() {
  return (
    <section 
        className="px-4 pt-20 lg:px-16" 
        data-aos="fade-up"
        id="about"
    >
        <div
            className="mb-5 flex items-center max-w-md"
        >
            <h2 className="text-slate-900 dark:text-gray-200 text-3xl font-bold"> About Me</h2>
            {/* <div className="ml-2 border-slate-900 dark:border-gray-200 flex-grow border-b"></div> */}
        </div>

        <div className="mt-4 flex items-center flex-col-reverse lg:flex-row lg:justify-between" data-aos="fade-up">
            <div 
                className="text-gray-600 
                dark:text-gray-200 
                mb-4 
                text-justify 
                font-medium 
                text-lg 
                lg:w-1/2
                first-letter:text-3xl 
                first-letter:font-semibold" data-aos="fade-up" data-aos-delay="200">
                <p>I am a Fullstack web developer with over 2 years industry experience in building web applications. I enjoy building scalable software applications and I love learning new technologies in my leisure. I look forward to building mobile applications using React Native and Flutter soon.</p>
                <p className="mt-5">Skills: </p>
                <div class="grid grid-cols-3 gap-4 mt-4 sm:grid-cols-6 lg:grid-cols-12 sm:px-8 xl:px-0" data-aos="fade-up" data-aos-delay="500">

                    <div class="relative flex flex-row items-center col-auto md:col-span-3  p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer shadow-lg rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <FaPhp className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">PHP</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer shadow-lg bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <FaLaravel className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Laravel</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <FaReact className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">React</p>
                    </div>
                    
                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <FaVuejs className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">VueJS</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <FaBootstrap className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Bootstrap</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <SiTailwindcss className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Tailwind CSS</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <SiFlask className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Flask</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <SiMysql className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Mysql</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <SiMongodb className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Mongo DB</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <SiNodedotjs className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Node JS</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <SiExpress className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Express JS</p>
                    </div>

                    <div class="relative flex flex-row items-center col-auto md:col-span-3 p-2 overflow-hidden shadow-lg bg-gray-100 dark:bg-slate-800 hover:scale-90 transition duration-500 cursor-pointer bg-gray-100 dark:bg-slate-800 rounded-xl">
                        <div class="text-gray-200 rounded-full">
                            <SiFirebase className="text-gray-700 dark:text-gray-200 w-8 h-8"/>
                        </div>
                        <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Firebase</p>
                    </div>
                </div>


            </div>
            <div className="text-gray-600 dark:text-gray-200 text-base lg:w-1/2">
                <img src={aboutImg} className="h-64 mx-auto mb-4" alt="About__me" />
            </div>
             
        </div>
    </section>
  )
}

export default About