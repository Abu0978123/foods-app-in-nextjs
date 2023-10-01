import React from 'react';
import About from './about';
import Contact from './contact';
import Recipe from './recipe';

const Index = () => {
  return (
    <>
      <section className="text-gray-600  bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-100 body-font ">
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24 md:flex-row md:text-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mb-16 md:mb-0">
            <h6 className=" text-6xl font-bold py-4">Dish Discovery: Explore, Cook, Enjoy</h6>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Empowering Recipe
            , Powered by 
              <br className="hidden lg:inline-block text-3xl text-purple-500 font-bold" />
              Abu Bakar
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, reiciendis
              <br />
              tempo arei tis
            </p>
            <div className="flex justify-center">
              <button className="w-300px flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-900 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out transform hover:scale-105 hover:rotate-x-6 hover:rotate-y-6 hover:rotate-z-6 hover:animate-move">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Recipe/>
      <Contact />
    </>
  );
};

export default Index;
