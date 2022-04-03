import React from "react";
import thanksImg from '../assets/images/thanks_img.svg';
import { Link } from 'react-router-dom';

const SuccessModal = ({canShow, updateModalState}) => {
    // if (canShow) { 
    // return (
    //     <div 
    //         className="justify-center 
    //         items-center 
    //         flex 
    //         overflow-x-hidden 
    //         overflow-y-auto fixed 
    //         inset-2 
    //         z-50 
    //         outline-none 
    //         focus:outline-none 
    //         backdrop-blur-md"
    //         >
    //             <div 
    //             className="w-full 
    //             max-w-lg 
    //             p-5 
    //             m-3
    //             relative 
    //             mx-auto 
    //             my-auto 
    //             rounded-xl 
    //             shadow-lg  
    //             bg-white
    //             dark:bg-slate-800
    //             dark:text-gray-200"
    //             data-aos="fade-up"
    //             >
    //                 <div className="">
                    
    //                     <div 
    //                         className="text-center p-5 flex-auto justify-center"
    //                         data-aos="fade-up"
    //                         data-aos-delay="200"
    //                     >
    //                         <img 
    //                             className="animate-pulse w-full h-48 md:h-72" src={thanksImg} 
    //                             alt="Thanks for contacting me" 
    //                         />

    //                         <h2 
    //                             className="text-xl font-bold py-8"
    //                             data-aos="zoom-in-down"
    //                             data-aos-delay="400"
    //                         >
    //                         Thanks for sending a message, I should respond in a couple of hours.
    //                         </h2>
                                
    //                     </div>
    //                     <div 
    //                         className="p-3  mt-2 text-center space-x-4 md:block"
    //                         data-aos="zoom-in-down"
    //                         data-aos-delay="400"
    //                     >
    //                         <button 
    //                             className="mb-2 
    //                             md:mb-0 
    //                             bg-yellow-400 
    //                             px-5 
    //                             py-2 
    //                             text-sm 
    //                             shadow-md 
    //                             font-medium 
    //                             tracking-wider 
    //                             text-white 
    //                             rounded-full 
    //                             hover:shadow-xl 
    //                             hover:bg-yellow-300
    //                             hover:text-gray-700"
    //                             onClick={updateModalState}
    //                             >
    //                             Back to home
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //     </div>
    //   )
    // }
    // return null;

    return (
        <div 
            className="justify-center 
            items-center 
            flex 
            overflow-x-hidden 
            overflow-y-auto fixed 
            inset-2 
            z-50 
            outline-none 
            focus:outline-none 
            backdrop-blur-md"
            >
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

export default SuccessModal;