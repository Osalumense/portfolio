import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaSun, FaMoon} from "react-icons/fa";
import { ThemeContext } from '../Theme/ThemeContext';
// import Toggle from './components/Theme/ThemeToggle';


function NavLinks () {
    const { theme, setTheme } = React.useContext(ThemeContext);
    return (
        <>
                <HashLink className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-400" smooth to="/#hero">
                    Home
                </HashLink>
                <HashLink className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-400" smooth to="/#about">
                    About Me
                </HashLink>
                {/* <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                    Projects
                </HashLink> */}
                <Link className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-400" to="/">
                    Portfolio
                </Link>
                <Link className="px-4 text-xl font-bold text-gray-500 hover:text-yellow-600 dark:hover:text-yellow-400" to="#">
                    Contact Me
                </Link>
                <Link className="font-extrabold text-gray-500 hover:text-blue-900 transition duration-500 ease-in-out hidden lg:inline-block" to="#">
                        {theme === 'dark' ? (
                            <FaSun
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className=" text-gray-500 dark:text-gray-400 text-2xl inline-block"
                            />
                        ) : (
                                <FaMoon
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className="text-gray-500 dark:text-gray-400 text-2xl inline-block"
                                />
                            )}
                </Link>
                
                
        </>
    )
}

export default NavLinks;