import React, {useState} from 'react';
import { ModalContext } from "./Context";
import Modal from '../components/Modal';
import { projectsArr } from './ProjectsArr';
// import Img from '../assets/images/portfolio-img.png';

const Projects = () => {
   const [showModal, updateShowModal] = useState(false);
   const toggleModal = () => updateShowModal(state => !state);
   let [idn, updateIdn] = useState(() => {
      return 0;
   })
   const setIdn = (val) => {
      updateIdn(idn = val-1);
   };
   console.log(idn)

   let projects
   const projectCards = projectsArr.map((item, key) => {
      projects=projectsArr[idn].details 
      console.log(projects)    
      return (
         
   <>
      <div 
      className="w-full md:w-1/2 lg:w-1/3 p-2 my-2 hover:scale-90 transition ease-in-out duration-500" data-aos="fade-up" data-aos-delay="500"
      >
                     <div className="rounded-md shadow-lg bg-gray-100 dark:bg-slate-800 overflow-hidden mb-10">
                     <div className="p-4 text-center">
                           <h3>
                              <h3 className="text-3xl font-semibold text-slate-900 dark:text-gray-200">
                                 {item.details.title}
                              </h3>
                           </h3>
                           <p 
                              className="
                              text-base 
                              font-medium
                              text-body-color 
                              leading-relaxed
                              my-4
                              text-slate-900
                              dark:text-gray-200">
                              {item.overview}
                           </p>
                           <button
                              className="
                              inline-block
                              py-2
                              px-7
                              border border-gray-200
                              rounded-full
                              text-base text-body-color
                              font-medium
                              hover:border-primary hover:bg-primary
                              hover:scale-110
                              dark:text-gray-200
                              dark:hover:text-gray-200
                              transition
                              ease-in-out 
                              duration-500
                              "
                              onClick={() => {
                                 setIdn(item.id);
                                 toggleModal();
                              }}
                              >
                           View Details
                           </button>
                        </div>
                        <img
                           src={item.img}
                           alt="cards"
                           className="w-full rounded-lg p-4"
                           />
                        
                     </div>
      </div>
   </>
      )
   })
    return (
      <ModalContext.Provider value={{ showModal, toggleModal, projects}}>
         <section className=" dark:bg-slate-900 mx-auto pt-20 pb-10 lg:pb-20" data-aos="fade-up">
            <div className="">
               <h2 className="flex items-center justify-center text-4xl font-bold tracking-wide mb-8 text-slate-900 dark:text-gray-200">Portfolio</h2>

               <div className="flex px-4 lg:px-16 flex-wrap">
                  {projectCards}
               </div>
               <div className="flex justify-center">
                  <a 
                     className="
                     text-white 
                     bg-yellow-400 
                     hover:bg-yellow-300 
                     hover:scale-90 
                     transition 
                     ease-in 
                     duration-500 
                     inline-flex 
                     items-center 
                     justify-center 
                     px-6 
                     py-3 
                     my-4 
                     text-lg 
                     shadow-xl 
                     rounded-2xl 
                     group 
                     sm:w-auto 
                     sm:mb-0 
                     mt-4" 
                     href="https://github.com/Osalumense" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     >
                     View all projects
                     </a>
               </div>
            </div>
         </section>
         <Modal 
            canShow={showModal} 
            updateModalState={toggleModal} 
            props={projects}
         />
      </ModalContext.Provider>
    )

}

export default Projects