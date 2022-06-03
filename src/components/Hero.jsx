import React from 'react';
import beachVid from '../assets/beachVid.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='w-full h-screen relative' name='Home'>
      <video
        src={beachVid}
        className='w-full h-full object-cover'
        autoPlay
        muted
        loop
      />
      <div className='w-full h-full absolute top-0 left-0 bg-gray-900/30'></div>
      <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-white'>
        <h1>First Class Travel</h1>
        <h2 className='my-3'>Top 1% Locations Worldwide</h2>
        <form className='w-full max-w-[400px] md:max-w-[700px] border rounded-md flex justify-between items-center mx-auto p-1 bg-gray-100/90'>
          <input
            type='text'
            placeholder='Search Destinations'
            className='text-black w-[300px] sm:w-[400px] focus:outline-none bg-transparent'
          />
          <button>
            <AiOutlineSearch className='icon' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
