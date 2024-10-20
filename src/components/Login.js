import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard'); 
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gradient-to-b from-[#257446] to-[#234D35] p-12 flex flex-col justify-center items-center text-white">
        <img
          src={`${process.env.PUBLIC_URL}/images/cattle.png`} 
          alt="Cattle illustration"
          className="mb-8 w-3/4 h-auto"
        />
        <p className="text-3xl font-bold mb-2">
          Empowering <span className="text-yellow-400">farmers</span>,
        </p>
        <p className="text-3xl font-bold">
          transforming <span className="text-yellow-400">auctions</span>.
        </p>
      </div>

      {/* Right Section with Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12 bg-white">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">Welcome to OKsyon</h1>
        <form onSubmit={handleLogin} className="w-full max-w-sm">
          <div className="mb-6">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
          >
            Login
          </button>
          <div className="flex items-center justify-between mt-6">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <button
              type="button"
              onClick={() => alert('Forgot Password? Feature is not yet implemented.')}
              className="text-green-600 hover:text-green-800 focus:outline-none font-medium"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
