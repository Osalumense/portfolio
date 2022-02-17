// import React, {useState, useEffect} from 'react';
// import LudayNav from '../components/LudayNav';
// import LudayFooter from '../components/LudayFooter';
// import Axios from 'axios';
// import Notiflix from 'notiflix';

//     /* This module makes use of Notiflix. To install run 
//     npm install notiflix
//     */

// const AddressMap = () =>{
//     return (
//         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17013.36898552257!2d11.96485892048908!3d57.78995966847573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff5452c3bf293%3A0xb01907807f46533!2s425%2032%20Hisings%20K%C3%A4rra%2C%20Sweden!5e0!3m2!1sen!2sng!4v1619707943827!5m2!1sen!2sng" className="px-3 py-4 w-full h-96" allowfullscreen loading="lazy"></iframe>
//     )
// };

// function LudayContact() {
//     const [data, setData] = useState({
//         name: "",
//         email: "",
//         subject: "",
//         mssg: ""
//     })
//     const [formErrors, setFormErrors] = useState({})
//     const [isSubmit, setIsSubmit] = useState({})
//     const handle = (e) => {
//         const newdata = { ...data }
//         newdata[e.target.id] = e.target.value 
//         setData(newdata)
//         console.log(newdata)
//     }
//     const submit = (e) => {
//         e.preventDefault()
//         setFormErrors(validate(data))
//         setIsSubmit(true)
//     }
//     useEffect(() => {
//       if(Object.keys(formErrors).length === 0 && isSubmit) {
//           Axios.post("http://127.0.0.1:5000/api/contact/add", 
//             {
//               name: data.name,
//               email: data.email,
//               subject: data.subject,
//               mssg: data.mssg
//           })
//           .then(res => {
//                 Notiflix.Report.info(
//                     'Success',
//                     '<h1>' + res.data.message + '</h1>',
//                     'Okay',
//                 );
//           })
//       }
//     }, [formErrors])
    
//     const validate = (data) => {
//         const errors = {}
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
//         if (!data.name) {
//             errors.name = "Name is required!"
//         }
//         if (!data.email) {
//             errors.email = "Email is required!"
//         }
//         else if(!regex.test(data.email)) {
//             errors.email = "This is not a valid email format!"
//         }
//         if (!data.subject) {
//             errors.subject = "Subject is required!"
//         }
//         if (!data.mssg) {
//             errors.mssg = "Message is required!"
//         }
//         return errors;
//     }
//     return (
//         <>
//             <LudayNav />
//             <div className="w-full">
//                 <div className="h-96"></div>
//                     <div className="sm:px-6 lg:px-8 lg:mx-32 mb-12">
//                         <div className="bg-white w-full shadow-2xl rounded-md p-4 lg:p-10 -mt-72">
//                             <div className="">
//                                 <h2 className="text-center text-xl text-blue-600 uppercase font-bold">Get in touch</h2>
//                                 <h2 className="mt-4 mx-24 text-center text-3xl font-extrabold text-blue-900">See why the world's best companies use Luday to become truly web-driven</h2>
//                             </div>
//                             <form method="post" onSubmit={(e) => submit(e)} className='bg-blue-100 rounded-md shadow-2xl m-2 lg:m-12 lg:m-24 p-8'>
//                                 <div className="md:flex items-center mt-12">
//                                     <div className="w-full md:w-1/2 flex flex-col">
//                                         <input onChange={(e) => handle(e)} id="name" type="text" placeholder='Your Name' className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white border rounded border-gray-200" />
//                                         <p className="text-red-500">
//                                             {formErrors.name}
//                                         </p>
//                                     </div>
//                                     <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
//                                         <input onChange={(e) => handle(e)} id="email" type="email" placeholder='Email' className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white border rounded border-gray-200"/>
//                                         <p className="text-red-500">
//                                             {formErrors.email}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="md:flex items-center mt-8">
//                                     <div className="w-full flex flex-col">
//                                         <input onChange={(e) => handle(e)} id="subject" type="text" placeholder='Subject' className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white border rounded border-gray-200"/>
//                                         <p className="text-red-500">
//                                             {formErrors.subject}
//                                         </p>
//                                     </div>
                                    
//                                 </div>
//                                 <div>
//                                     <div className="w-full flex flex-col mt-8">
//                                         <textarea onChange={(e) => handle(e)} id="mssg" placeholder='Message' className="h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-white border rounded border-gray-200"></textarea>
//                                         <p className="text-red-500">
//                                             {formErrors.mssg}
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center justify-center w-full">
//                                     <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
//                                         Send message
//                                     </button>
//                                 </div>
//                             </form>

//                             <div className='h-full w-full'>
//                                 <AddressMap />
//                             </div>
//                         </div>


//                     </div>

//             </div>                
//             <LudayFooter />
//         </>
//     )
// }

// export default LudayContact;