import React from 'react';
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import keywest from '../assets/keywest.jpg';

const Destinations = () => {
  return (
    <div
      className='max-w-[1240px] py-16 px-4 mx-auto text-center'
      name='Destinations'
    >
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbean's Best Beaches</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img
          src={borabora}
          alt='pictures'
          className='w-full h-full col-span-2 md:col-span-3 row-span-2'
        />
        <img src={borabora2} alt='pictures' className='w-full h-full' />
        <img src={maldives} alt='pictures' className='w-full h-full' />
        <img src={maldives2} alt='pictures' className='w-full h-full' />
        <img src={keywest} alt='pictures' className='w-full h-full' />
      </div>
    </div>
  );
};

export default Destinations;
