import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare, FaDev } from 'react-icons/fa';

function Socials() {
  return (
    <div className="lg:flex flex-col hidden fixed h-4/6 p-4 z-30 bottom-0 left-0 space-y-6" data-aos="fade-up" data-aos-duration="3000">
        <a href="https://github.com/Osalumense" rel="noreferrer" target="_blank">
            <FaGithub 
                className="text-gray-600 
                hover:text-gray-500
                hover:animate-pulse 
                dark:text-white 
                dark:hover:text-gray-200 
                w-8 
                h-8"
            />
        </a>
        <a href="https://linkedin.com/in/akugbe-stephen" rel="noreferrer" target="_blank">
            <FaLinkedin 
                className="text-gray-600 
                hover:text-gray-500
                hover:animate-pulse 
                dark:text-white 
                dark:hover:text-gray-200 
                w-8 
                h-8"
            />
        </a>
        <a href="https://twitter.com/Itz_Steavean" rel="noreferrer" target="_blank">
            <FaTwitterSquare 
                className="text-gray-600 
                hover:text-gray-500
                hover:animate-pulse 
                dark:text-white 
                dark:hover:text-gray-200 
                w-8 
                h-8"
            />
        </a>
        <a href="https://dev.to/osalumense" rel="noreferrer" target="_blank">
            <FaDev 
                className="text-gray-600 
                hover:text-gray-500
                hover:animate-pulse 
                dark:text-white 
                dark:hover:text-gray-200 
                w-8 
                h-8"
            />
        </a>
        <div className="border-l-2 border-l-gray-400 grow mx-auto"></div>
    </div>
  )
}

export default Socials