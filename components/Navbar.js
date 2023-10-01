import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-yellow-500 to-yellow-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <img className="h-12 w-15" src="/logo.png" alt="Logo" /> */}
              <h1><span className='text-3xl font-bold'>Abu Bakar</span><span className='text-2xl text-blue-600 font-bold'>Foodie</span></h1>
            </div>
          </div>  
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-black px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            <Link href="/about" className="text-black px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="/recipe" className="text-black px-3 py-2 rounded-md text-sm font-medium">Our Recipe</Link>
            <Link href='/contact' className="w-300px flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-900 hover:bg-black hover:text-white focus:outline-none focus:shadow-outline-indigo transition duration-150 ease-in-out transform hover:scale-105 hover:rotate-x-6 hover:rotate-y-6 hover:rotate-z-6 hover:animate-move">
              Contact us
            </Link>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleNavbar}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/Portfolio" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</Link>
            <Link href="/bookstore" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">MyBlogs</Link>
            <button className="text-gray-300 animate-bounce hover:text-white bg-purple-500 block px-3 py-2 rounded-md text-base font-medium">
              Contact us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
