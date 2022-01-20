import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import Logo from '../../images/portfolio-img.svg';


const NavBar = () => {
    const [top, setTop] = useState(true);
    const [isOpen, setisOpen] = React.useState(false);
    function handleClick() {
        setisOpen(!isOpen);
    }

    // detect whether user has scrolled the page down by 10px 
    useEffect(() => {
      const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
      };
      window.addEventListener('scroll', scrollHandler);
      return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <nav className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out mb-16 dark:bg-slate-900 ${!top && 'bg-white shadow-lg'}`}>
            <div className="flex flex-row justify-between items-center py-2">
                <div className="flex flex-row justify-center md:px-12 md:mx-12 items-center text-center font-semibold">
                    <Link to="/">
                        {/* <h1 className="font-extrabold text-4xl text-blue-900 ml-4">Stephen</h1> */}
                        <img src={Logo} alt="portfolio logo" className="w-8 h-8 mx-12 lg:mx-4"/>
                    </Link>
                    
                </div>
                <div className="group flex flex-col items-center">
                    <button className="p-4 lg:hidden text-slate-900 dark:text-yellow-400" onClick={handleClick}>
                        {isOpen &&(
                            <HiX className='text-3xl'/>
                        )}
                        {!isOpen &&(
                            <HiMenuAlt1 className={`text-3xl ${ isOpen ? "hidden" : "block" }`}/>
                        )}
                    </button>
                    <div className='hidden space-x-4 mr-8 py-4 lg:inline-block'>
                        <NavLinks />
                    </div>

                    <div className={`fixed flex justify-center text-center left-0 w-full h-screen p-24 bg-white block lg:hidden shadow-xl dark:bg-slate-900 top-14 ${  isOpen ? "block" : "hidden" } `}>
                        <div className='flex flex-col space-y-6'>
                            <NavLinks />
                        </div>                                                
                    </div>

                </div>
            </div>
        </nav>
    )
    
}


export default NavBar;