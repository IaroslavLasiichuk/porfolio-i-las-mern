import Navbar  from './Navbar'
import Footer  from './Footer'
import Gradient from '../components/Gradient'
export default function Contact() {

  return (
    <div id="contact" className="relative isolate bg-white min-h-screen pt-24 sm:pt-24 flex flex-col">
        <Navbar />
        <Gradient/>
      <div className="mx-auto max-w-7xl px-0 lg:px- flex-1">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Would you like to contact me please fill out the info below and I will
          be in touch
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
        <form
          action="#"
          method="POST"
          className="mx-auto max-w-7xl px-0 lg:px- flex-1"
        >
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-8 ">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
  
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="mx-auto block w-9/12 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
   
        </form>
    
        </div>
        </div>
        <div className='bg-white shadow-sm py-0'>
    <Footer/>
  </div>
    </div>
  //     <>
  //       <Navbar/>
  //     <div id="contact" className="bg-white relative isolate min-h-screen pt-2 sm:pt-24 flex flex-col">
  //      <Gradient/>
  //       <form
  //         action="#"
  //         method="POST"
  //         className="mx-auto max-w-7xl px-0 lg:px- flex-1"
  //       >
  //          <div className="mx-auto lg:mx-0">
  //           <h2 className="text-center text-3xl font-bold text-gray-900 sm:text-4xl">Contact Me</h2>
  //           <p className="text-center text-lg text-gray-600 ">
  //           Would you like to contact me please fill out the info below and I will
  //           be in touch
  //           </p>
  //         </div>
          
  //         <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 mx-8 ">
  //           <div>
  //             <label
  //               htmlFor="first-name"
  //               className="block text-sm font-semibold leading-6 text-gray-900"
  //             >
  //               First name
  //             </label>
  //             <div className="mt-2.5">
  //               <input
  //                 type="text"
  //                 name="first-name"
  //                 id="first-name"
  //                 autoComplete="given-name"
  //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  //           <div>
  //             <label
  //               htmlFor="last-name"
  //               className="block text-sm font-semibold leading-6 text-gray-900"
  //             >
  //               Last name
  //             </label>
  //             <div className="mt-2.5">
  //               <input
  //                 type="text"
  //                 name="last-name"
  //                 id="last-name"
  //                 autoComplete="family-name"
  //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  //           <div className="sm:col-span-2">
  //             <label
  //               htmlFor="company"
  //               className="block text-sm font-semibold leading-6 text-gray-900"
  //             >
  //               Company
  //             </label>
  //             <div className="mt-2.5">
  //               <input
  //                 type="text"
  //                 name="company"
  //                 id="company"
  //                 autoComplete="organization"
  //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  //           <div className="sm:col-span-2">
  //             <label
  //               htmlFor="email"
  //               className="block text-sm font-semibold leading-6 text-gray-900"
  //             >
  //               Email
  //             </label>
  //             <div className="mt-2.5">
  //               <input
  //                 type="email"
  //                 name="email"
  //                 id="email"
  //                 autoComplete="email"
  //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //               />
  //             </div>
  //           </div>
  
  //           <div className="sm:col-span-2">
  //             <label
  //               htmlFor="message"
  //               className="block text-sm font-semibold leading-6 text-gray-900"
  //             >
  //               Message
  //             </label>
  //             <div className="mt-2.5">
  //               <textarea
  //                 name="message"
  //                 id="message"
  //                 rows={4}
  //                 className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  //                 defaultValue={""}
  //               />
  //             </div>
  //           </div>
  //         </div>
  //         <div className="mt-10">
  //           <button
  //             type="submit"
  //             className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  //           >
  //             Send
  //           </button>
  //         </div>
   
  //       </form>
    
  //       <div className='bg-white shadow-sm py-0'>
  //   <Footer/>
  // </div>
  //     </div>
   
  //     </> 
    );
  }