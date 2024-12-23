import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '../context/UserContext'; // Ensure this is correctly imported

export const UserSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Use the context
  const { setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    // Construct the new user object
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };

    try {
      // Make the POST request
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      
      if (response.status === 201) {
        const data = response.data;
        setUser(data.user); // Save user data in context
        localStorage.setItem('token', data.token); // Save token in local storage
        navigate('/home'); // Navigate to home page on success
      }

      // Clear form fields
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
    } catch (error) {
      // Log error details to understand why the request failed
      if (error.response) {
        console.error('Backend error:', error.response.data);
      } else {
        console.error('Error creating user:', error);
      }
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Logo"
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">Whats your name?</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base"
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className="bg-[#eeeeee] rounded px-4 py-2 w-1/2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className="text-lg font-medium mb-2">Whats your email?</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-sm"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg">
            Create Account
          </button>

          <p className="text-center">
            Already have an account?{' '}
            <Link to="/user-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>

      <p className="text-sm leading-tight">
        Your data is used to improve our services and ensure your privacy. Learn more in our Privacy Policy.
      </p>
    </div>
  );
};
