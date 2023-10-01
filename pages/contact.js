import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 bg-gradient-to-r  from-purple-500 via-yellow-500 to-yellow-100 body-font relative">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            Unleash the Power of Our Professional Services
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div className="container px-5 py-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?q=Depalpur,%20Pakistan&output=embed"
            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Peshawar, Pakistan</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  abubakar0978123@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+92-311-9010814</p>
              </div>
            </div>
          </div>
          {/* <div className="contactus lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              Contact Us
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Just Send a Message !
            </p>
          </div> */}
          
          <div className="relative mb-4">
          {/* <h1>contact us</h1> */}
            <form>
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Send
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-3">Thanks for contacting</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
