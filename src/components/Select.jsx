import React from 'react';
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import keywest from '../assets/keywest.jpg';
import Selects from './Selects';

const Select = () => {
  return (
    <div
      className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'
      name='View'
    >
      <Selects img={borabora} text='Borabora' />
      <Selects img={borabora2} text='Maldives' />
      <Selects img={maldives} text='Antigua' />
      <Selects img={maldives2} text='Cozumel' />
      <Selects img={maldives3} text='Jamaica' />
      <Selects img={keywest} text='Keywest' />
    </div>
  );
};

export default Select;
