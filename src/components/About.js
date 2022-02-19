import React from 'react';
import { FaPhp, FaLaravel, FaReact, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiMysql, SiMongodb, SiExpress, SiNodedotjs, SiFirebase } from 'react-icons/si';
// import aboutImg from '../assets/images/Stephen.png';

function About() {
  return (
    <div className="px-16">
        <div
            className="mb-5 flex items-center max-w-md"
        >
            <h2 className="text-slate-900 dark:text-gray-200 text-3xl font-bold"> About Me</h2>
            <div className="ml-2 border-slate-900 dark:border-gray-200 flex-grow border-b-4"></div>
        </div>

        <div className="mt-4 flex flex-col-reverse lg:flex-row lg:justify-between">
            <div className="text-gray-600 dark:text-gray-200 text-justify font-medium text-lg lg:w-1/2">
                <p>I am a Fullstack web developer with over 2 years industry experience in building web applications. I enjoy building scalable software applications and I love learning new technologies in my leisure. I look forward to building mobile applications using React Native and Flutter soon.</p>
                <p className="mt-5">Skills: </p>
                <div class="grid grid-cols-3 gap-4 mt-4 sm:grid-cols-6 lg:grid-cols-12 sm:px-8 xl:px-0">

                <div class="relative flex flex-row items-center col-auto lg:col-span-3  p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <FaPhp className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">PHP</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <FaLaravel className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Laravel</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <FaReact className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">React</p>
                </div>
                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <FaVuejs className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">VueJS</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <FaBootstrap className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Bootstrap</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <SiTailwindcss className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Tailwind CSS</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <SiFlask className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Flask</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <SiMysql className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Mysql</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <SiMongodb className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Mongo DB</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <SiNodedotjs className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Node JS</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <SiExpress className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Express JS</p>
                </div>

                <div class="relative flex flex-row items-center col-auto lg:col-span-3 p-2 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-xl">
                    <div class="text-gray-200 rounded-full">
                        <SiFirebase className="w-8 h-8"/>
                    </div>
                    <p class="text-sm ml-1 font-medium text-gray-700 dark:text-gray-200">Firebase</p>
                </div>
                
            

            </div>


        </div>
            {/* <div className="text-gray-600 dark:text-gray-200 text-base lg:w-1/2">
                <img src={aboutImg} className="h-64 mx-auto" alt="About Image"/>
            </div> */}
             
        </div>
    </div>
  )
}

export default About