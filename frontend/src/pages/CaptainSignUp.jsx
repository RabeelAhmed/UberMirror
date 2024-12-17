import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const CaptainSignUp = () => {
  // Define states for form inputs
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [captainData, setcaptainData] = useState({});
  
    // Form submission handler
    const submitHandler = (e) => {
      e.preventDefault();
      // You can handle form data here
      console.log('Form submitted', { firstName, lastName, email, password });
  
      setcaptainData({
        captainname: {
          firstName: firstName,
          lastName: lastName
        },
        email: email,
        password: password
      })
  
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
    };
  return (
    <div className="p-5 h-screen flex flex-col justify-between">
    <div>
    <img
        className="w-20 mb-2"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        alt=""
      />
      <form onSubmit={submitHandler}>
        <h3 className="text-lg font-medium mb-2">What's your name?</h3>
        <div className='flex gap-4 mb-6'>
          <input
            required
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base"
            type="text"
            placeholder="First name"
            value={firstName} // Two-way binding for first name
            onChange={(e) => setFirstName(e.target.value)} // Update state on input change
          />
          <input
            required
            className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base"
            type="text"
            placeholder="Last name"
            value={lastName} // Two-way binding for last name
            onChange={(e) => setLastName(e.target.value)} // Update state on input change
          />
        </div>

        <h3 className="text-lg font-medium mb-2">What's your email?</h3>
        <input
          required
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          type="email"
          placeholder="email@example.com"
          value={email} // Two-way binding for email
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
        />

        <h3 className="text-lg font-medium mb-2">Enter Password</h3>
        <input
          required
          className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
          type="password"
          placeholder="password"
          value={password} // Two-way binding for password
          onChange={(e) => setPassword(e.target.value)} // Update state on input change
        />

        <button className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm">
          Sign Up
        </button>

        <p className="text-center">
          Already have an account?{' '}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </form>
    </div>

    <p className="mb-2">
      This site is protected by reCAPTCHA and the Google 
      <a href="https://policies.google.com/privacy" className="text-blue-500 hover:text-blue-700 underline">
        Privacy Policy
      </a> 
      and 
      <a href="https://policies.google.com/terms" className="text-blue-500 hover:text-blue-700 underline">
        Terms of Service
      </a> 
      apply.
    </p>
  </div>
  )
}
