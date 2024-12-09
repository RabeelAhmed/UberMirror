import React from 'react'
import { Link } from 'react-router-dom'

export const UserLogin = () => {
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <form>
      <h3 className='text-lg font-medium mb-2'>What's your email?</h3>

      <input required className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="email" placeholder='email@example.com' />

      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

      <input required className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' type="password" placeholder='password' />

      <button className='bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>

      <p className='text-center'>New here? <Link to={'/user-signup'} className='text-blue-600'>Create new Account</Link></p>
      </form>
       </div>

       <div>
        <button className='bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</button>
       </div>

    </div>
  )
}
