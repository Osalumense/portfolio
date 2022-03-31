import React from 'react'
import { Link } from 'react-router-dom';
import thanksImg from '../assets/images/thanks_img.svg';
function Thanks() {
  return (
    <div 
        className="min-w-screen 
        h-screen 
        animated 
        fadeIn 
        faster  
        fixed  
        left-0 top-0 
        flex 
        justify-center 
        items-center 
        inset-0 
        z-50 
        outline-none 
        focus:outline-none 
        bg-no-repeat 
        bg-center 
        bg-cover 
        bg-[url('https://images.unsplash.com/photo-1647687287395-e25b330bb302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1903&q=80')]
        "
        >
            <div 
                className="absolute 
                bg-black 
                opacity-80 
                inset-0 
                z-0"
                >

                </div>
                <div 
                className="w-full 
                max-w-lg 
                p-5 
                m-3
                relative 
                mx-auto 
                my-auto 
                rounded-xl 
                shadow-lg  
                bg-white
                dark:bg-slate-800
                dark:text-gray-200"
                data-aos="fade-up"
                >
                

                <div className="">
                
                    <div 
                        className="text-center p-5 flex-auto justify-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <img 
                            className="animate-pulse w-full h-48 md:h-72" src={thanksImg} 
                            alt="Thanks for contacting me" 
                        />

                        <h2 
                            className="text-xl font-bold py-8"
                            data-aos="zoom-in-down"
                            data-aos-delay="400"
                        >
                        Thanks for sending a message, I should respond in a couple of hours.
                        </h2>
                            
                    </div>
                    <div 
                        className="p-3  mt-2 text-center space-x-4 md:block"
                        data-aos="zoom-in-down"
                        data-aos-delay="400"
                    >
                        <Link 
                            to="/" 
                            className="mb-2 
                            md:mb-0 
                            bg-yellow-400 
                            px-5 
                            py-2 
                            text-sm 
                            shadow-md 
                            font-medium 
                            tracking-wider 
                            text-white 
                            rounded-full 
                            hover:shadow-xl 
                            hover:bg-yellow-300
                            hover:text-gray-700"
                            >
                            Back to home
                        </Link>
                    </div>
                </div>
                </div>
  </div>
  )
}

export default Thanks