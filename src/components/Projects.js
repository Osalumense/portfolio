import React from 'react';
import { ModalContext } from "./Context";
import Modal from '../components/Modal';
// import Img from '../assets/images/portfolio-img.png';

const Projects = () => {
   const [showModal, updateShowModal] = React.useState(false);
   const toggleModal = () => updateShowModal(state => !state);
   const projects = [
      {
         id: 1,
         title: 'Motivational Quotes App',
         description: 'hdhdhdsdhsdj hsdjsdhsjdhsdj h   sdjsdhsjdhsd j hsdjhsdjsdh jshdsjdhsd',
         ghLink: 'https://github.com/Osalumense/motivational-quotes-app',
         liveLink: 'https://motivational-quotes-app.vercel.app/'

      }
   ]
    return (
      <ModalContext.Provider value={{ showModal, toggleModal, projects }}>
         <section className=" dark:bg-slate-900 mx-auto pt-20 pb-10 lg:pb-20 bg-amber-300">
            <div className="">
               <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 xl:w-1/3 px-4 hover:scale-90 transition ease-in-out duration-500">
                     <div className="rounded-lg overflow-hidden mb-10">
                     <div className="p-4 text-center">
                           <h3>
                              <h3 className="text-3xl font-bold text-slate-900 dark:text-yellow-400">
                                 Motivational Quotes App
                              </h3>
                           </h3>
                           <p className="text-base font-medium text-body-color leading-relaxed my-4 text-slate-900 dark:text-yellow-400">
                              This application uses quotes API to display random motivational quotes.
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
                              onClick={toggleModal}
                              >
                           View Details
                           </button>
                        </div>
                        <img
                           src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                           alt="cards"
                           className="w-full rounded-lg"
                           />
                        
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 xl:w-1/3 px-4 hover:scale-90 transition ease-in-out duration-500">
                     <div className="rounded-lg overflow-hidden mb-10">
                     <div className="p-4 text-center">
                           <h3>
                              <h3 className="text-3xl font-bold text-slate-900 dark:text-yellow-400">
                                 Motivational Quotes App
                              </h3>
                           </h3>
                           <p className="text-base font-medium text-body-color leading-relaxed my-4 text-slate-900 dark:text-yellow-400">
                              This application uses quotes API to display random motivational quotes.
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
                              onClick={toggleModal}
                              >
                           View Details
                           </button>
                        </div>
                        <img
                           src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                           alt="cards"
                           className="w-full rounded-lg"
                           />
                        
                     </div>
                  </div>
                  <div className="w-full md:w-1/2 xl:w-1/3 px-4 hover:scale-90 transition ease-in-out duration-500">
                     <div className="rounded-lg overflow-hidden mb-10">
                     <div className="p-4 text-center">
                           <h3>
                              <h3 className="text-3xl font-bold text-slate-900 dark:text-yellow-400">
                                 Motivational Quotes App
                              </h3>
                           </h3>
                           <p className="text-base font-medium text-body-color leading-relaxed my-4 text-slate-900 dark:text-yellow-400">
                              This application uses quotes API to display random motivational quotes.
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
                              onClick={toggleModal}
                              >
                           View Details
                           </button>
                        </div>
                        <img
                           src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-01.jpg"
                           alt="cards"
                           className="w-full rounded-lg"
                           />
                        
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <Modal canShow={showModal} updateModalState={toggleModal} props={projects[0]} />
      </ModalContext.Provider>
    )

}

export default Projects