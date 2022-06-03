import React from 'react';

const Selects = ({ img, text }) => {
  return (
    <div className='relative'>
      <img className='w-full h-full object-cover' src={img} alt={text} />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='absolute bottom-4 left-4 text-white text-2xl font-bold'>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Selects;
