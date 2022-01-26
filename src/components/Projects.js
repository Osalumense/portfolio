import React from 'react';
import { ModalContext } from "./Context";
import Modal from '../components/Modal';
import { projectsArr } from './ProjectsArr';
// import Img from '../assets/images/portfolio-img.png';

const Projects = () => {
   const [showModal, updateShowModal] = React.useState(false);
   const toggleModal = () => updateShowModal(state => !state);
   let [idn, updateIdn] = React.useState(() => {
      return 0;
   });
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
      <div className="w-full md:w-1/2 lg:w-1/3 p-2 my-2 hover:scale-90 transition ease-in-out duration-500 ">
                     <div className="rounded-md shadow-md bg-gray-100 dark:bg-slate-800 overflow-hidden mb-10">
                     <div className="p-4 text-center">
                           <h3>
                              <h3 className="text-3xl font-bold text-slate-900 dark:text-yellow-400">
                                 {item.details.title}
                              </h3>
                           </h3>
                           <p className="text-base font-medium text-body-color leading-relaxed my-4 text-slate-900 dark:text-yellow-400">
                              {item.overview}
                           </p>
                           <button
                              className="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-full
                              text-base text-body-color
                              font-medium
                              hover:border-primary hover:bg-primary hover:text-white
                              transition
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
         <section className=" dark:bg-slate-900 mx-auto pt-20 pb-10 lg:pb-20">
            <div className="">
               <h2 className="flex justify-center text-4xl font-bold tracking-wide mb-2 text-gray-600">Portfolio</h2>
               <div className='flex justify-center'>
                    <div className='w-24 border-2 border-gray-600 mb-8'></div>
                </div>
               <div className="flex flex-wrap">
                  {projectCards}
               </div>
            </div>
         </section>
         <Modal canShow={showModal} updateModalState={toggleModal} props={projects}/>
      </ModalContext.Provider>
    )

}

export default Projects