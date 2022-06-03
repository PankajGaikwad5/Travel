import React from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
];

const Carousol = () => {
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => {
    if (slide > 2) {
      setSlide(0);
    }
    if (slide < 0) {
      setSlide(2);
    }
  }, [slide]);
  return (
    <div
      className='max-w-[1240px] px-4 py-16 flex justify-center items-center relative mx-auto'
      name='Book'
    >
      <BsArrowLeftSquareFill
        onClick={() => setSlide(slide - 1)}
        className='absolute top-[50%] text-white text-3xl cursor-pointer left-8'
      />
      <BsArrowRightSquareFill
        onClick={() => setSlide(slide + 1)}
        className='absolute top-[50%] text-white text-3xl cursor-pointer right-8'
      />
      {sliderData.map((item, index) => {
        return (
          <div
            key={index}
            className={index === slide ? 'opacity-100' : 'opactity-0'}
          >
            {index === slide && (
              <img
                src={item.url}
                alt='/'
                className='w-full object-cover rounded-md'
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Carousol;
