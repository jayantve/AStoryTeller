import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-pink-200 shadow-md mx-auto my-2 rounded-lg fixed top-0 left-0 right-0 z-10'>
      <header className="text-gray-600 body-font py-2 md:py-3">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="https://yt3.googleusercontent.com/Cztixhm_N_A_m2Z8np88RoTCh8QORIqkfDSXwYRVUUWrlNR2mM3pBDiM80HGQvxZckU12VLK=s160-c-k-c0x00ffffff-no-rj"
              height="32" // Adjusted height for responsiveness
              width="32" // Adjusted width for responsiveness
              alt="logo"
              className="rounded-full" // Added rounded-full for a nice touch
            />
            <span className="ml-3 text-xl">SKFMS</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-4 md:mr-5 hover:text-gray-900">
              Home
            </a>
            <a href="/Video" className="mr-4 md:mr-5 hover:text-gray-900">
              Videos
            </a>
            <a href="/Songs" className="mr-4 md:mr-5 hover:text-gray-900">
              Songs
            </a>
            <a href="/Posts" className="hover:text-gray-900">
              Posts
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;