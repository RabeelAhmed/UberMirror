import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Riding() {
  return (
    <div className='h-screen'>
      <Link
        to='/home'
        className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full '
      >
        <i className='ri-home-4-line text-lg font-medium'></i>
      </Link>

      <div className='h-1/2'>
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif'
          alt=''
        />
      </div>

      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
          <img
            className='h-20'
            src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png'
            alt=''
          />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Rabeel</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>ME04 AB1234</h4>
            <p className='text-sm text-gray-600'>Wagnor Suzuki</p>
          </div>
        </div>

        <div className='flex gap-2 justify-between flex-col items-center'>
          <div className='w-full'>
            <div className='flex items-center gap-5 p-3 border-b-2'>
              <i className='ri-map-pin-2-fill text-lg'></i>
              <div>
                <h3 className='text-lg font-medium'>562/11-A</h3>
                <p className='text-sm text-gray-800'>Kingra, Sialkot Punjab</p>
              </div>
            </div>
            <div className='flex items-center gap-5 p-3'>
              <i className='ri-money-dollar-circle-fill text-lg'></i>
              <div>
                <h3 className='text-lg font-medium'>$193.20</h3>
                <p className='text-sm text-gray-800'>Cash Cash</p>
              </div>
            </div>
          </div>
        </div>

        <button className='w-full bg-green-600 text-white font-semibold p-2 rounded-lg'>
          Make a Payment
        </button>
      </div>
    </div>
  );
}
