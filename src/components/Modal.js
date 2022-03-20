import React from "react";
import { FaTimes } from "react-icons/fa";


const Modal = ({canShow, updateModalState, props}) => {

    if (canShow) {
        return (
        <>
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
            <div className="
            relative 
            w-auto 
            my-6 
            mx-auto 
            max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl text-yellow-200 font-semibold">
                    {props.title}
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={updateModalState}
                  >
                    <span className="text-yellow-200 text-2xl hover:scale-90 transition ease-in duration-500">
                      <FaTimes/>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-gray-300 text-lg leading-relaxed">
                    {props.description}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center gap-x-6 p-6 rounded-b">
                    <a target="_blank" rel="noreferrer" className="text-white bg-yellow-400 hover:scale-90 transition ease-in duration-500 p-4 shadow-xl rounded-2xl" href={props.ghLink}>View on GitHub</a>
                    <a target="_blank" rel="noreferrer" className="text-white bg-gray-500 to-slate-600 via-zinc-500 hover:scale-90 transition ease-in duration-500 p-4 shadow-xl rounded-2xl" href={props.liveLink} >View Demo</a>
                    {/* <a className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href={props.liveLink}>View on LinkedIn</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-slate-800"></div>
        </>
        );
    }
  return null;
}

export default Modal;
