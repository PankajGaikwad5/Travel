import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div
      className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'
      name='Travel'
    >
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h1>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h1>
          <p className='py-3'>
            Come experience the very pinnacle of luxury Caribbean all-inclusive
            vacations for couples at BEACHES Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and certified scuba
            diving at most resorts. If you are planning a wedding, BEACHES is
            the leader in Caribbean destination weddings and honeymoon packages.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill className='icon text-white' size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>
                ALL-INCLUSUIVE COMPANY FOR 20 YEARS IN A-ROW
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore className='icon text-white' size={50} />
            </button>
            <div>
              <h3 className='py-2'>AUTOMATED BOOKINGS</h3>
              <p className='py-1'>
                ALL-INCLUSUIVE COMPANY FOR 20 YEARS IN A-ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='border text-center p-2'>
          <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
          <p className='py-4'>12 HOURS LEFT</p>
          <p className='bg-gray-800 text-gray-200 py-3'>BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
          <div className='flex flex-col justify-center my-2 w-full'>
            <label>Destination</label>
            <select className='border p-2 rounded-md'>
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className='flex flex-col justify-center my-2  w-full'>
            <label>Check-In</label>
            <input className='border p-2 rounded-md' type='date' />
          </div>
          <div className='flex flex-col justify-center my-2  w-full'>
            <label>Check-Out</label>
            <input className='border p-2 rounded-md' type='date' />
          </div>
          <button className='w-full text-white my-4'>
            Rates and Availabilities
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
