import React from 'react'

export default function CaptainDetails() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-4'> 
          <img className='h-10 w-10 rounded-full object-cover' src="https://media.istockphoto.com/id/1182697148/photo/elegant-and-handsome-driver-waiting.jpg?s=612x612&w=0&k=20&c=M9il-C5NggIGFlkLs7H3NBS9NqWwOWb_g80g5w1aptQ=" alt="" />
          <h4 className='text-xl font-medium'>Rabeel Ahmed</h4>
        </div>
        <div>
          <h4 className='text-xl font-semibold'>$290.10</h4>
          <p className='text-sm text-gray-600'>Earned</p>
        </div>
      </div>

      <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-4 items-start'>
        <div className='text-center'>
        <i className="ri-timer-2-line text-3xl mb-2 font-extralight"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
        <i className="ri-speed-up-line text-3xl mb-2 font-extralight"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
        <i className="ri-booklet-line text-3xl mb-2 font-extralight"></i>
        <h5 className='text-lg font-medium'>10.2</h5>
        <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
      </div>
    </div>
  )
}
