import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const navList = ['Home', 'Destinations', 'Travel', 'View', 'Book'];
  return (
    <div className='w-full bg-gray-100 py-16 mx-auto'>
      <div className='max-w-[1240px] flex flex-col px-4'>
        <div className='flex flex-col sm:flex-row text-center justify-between sm:justify-center items-center'>
          <h1 className='text-center px-6 ml-1 sm:ml-12'>Beaches</h1>
          <div className='flex justify-between my-6'>
            <FaFacebook className='icon mx-5 text-blue-900 hover:text-blue-700' />
            <FaTwitter className='icon mx-5 text-blue-900 hover:text-blue-700' />
            <FaYoutube className='icon mx-5 text-blue-900 hover:text-blue-700' />
            <FaPinterest className='icon mx-5 text-blue-900 hover:text-blue-700' />
            <FaInstagram className='icon mx-5 text-blue-900 hover:text-blue-700' />
          </div>
        </div>
        <div className='flex justify-between sm:flex-col ml-2 sm:ml-12 sm:items-center'>
          <ul className='flex flex-col sm:flex-row text-left'>
            <li className='pr-4 pt-4 pb-4'>About</li>
            <li className='pr-4 pt-4 pb-4'>Partnerships</li>
            <li className='pr-4 pt-4 pb-4'>Careers</li>
            <li className='pr-4 pt-4 pb-4'>Newsroom</li>
            <li className='pr-4 pt-4 pb-4'>Advertising</li>
          </ul>
          <ul className='flex flex-col sm:flex-row text-right'>
            {navList.map((list, index) => {
              return (
                <li key={index} className='p-4'>
                  <Link
                    to={list}
                    smooth={true}
                    duration={500}
                    className='w-full'
                  >
                    {list}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
