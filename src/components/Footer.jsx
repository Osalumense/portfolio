import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare, FaDev } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="p-6">
            <div class="py-6 border-t border-slate-900 dark:border-gray-200 footer-copyright">
                <p class="text-slate-900 dark:text-white flex justify-center items-center">
                © Copyright Designed by 
                <a 
                    class="duration-300 
                    hover:text-yellow-400 
                    ml-1" 
                    href="https://github.com/Osalumense" 
                    rel="noreferrer" 
                    target="_blank"
                >
                        Stephen
                </a> 
                </p>
            </div>
            <div
                className="flex flex-row my-2 items-center space-x-6 mx-3 justify-center"
            >
                <a href="https://github.com/Osalumense" rel="noreferrer" target="_blank">
                    <FaGithub className="text-gray-600 hover:text-gray-500 
                    dark:text-white 
                    dark:hover:text-gray-200 
                    w-6 h-6"/>
                </a>
                <a href="https://linkedin.com/in/akugbe-stephen" rel="noreferrer" target="_blank">
                    <FaLinkedin className="text-blue-600 hover:text-blue-500 w-6 h-6"/>
                </a>
                <a href="https://twitter.com/Itz_Steavean" rel="noreferrer" target="_blank">
                    <FaTwitterSquare className="text-blue-400 hover:text-blue-300
                    w-6 h-6"/>
                </a>
                <a href="https://dev.to/osalumense" rel="noreferrer" target="_blank">
                    <FaDev className="text-gray-600 hover:text-gray-700 
                    dark:text-white 
                    dark:hover:text-gray-200 
                    w-6 h-6"/>
                </a>
                
            </div>
        </div>
    )
}

export default Footer;
