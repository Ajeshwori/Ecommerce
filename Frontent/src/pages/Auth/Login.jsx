
import { Link } from "react-router-dom";
import React, { useState } from "react";


const Login = () => {
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Replace with your API call
  };

  return (
     <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-full px-12 bg-gray-50">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800" style={{fontFamily: 'serif'}}>
             Lookscout
            </h1>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-xl text-gray-500 font-light">
              Welcome toLookscout
            </h2>
          </div>
         
          {/* Form */}
          <div className="space-y-6">
            {/* Email */}
            <div className="text-left">
              <label
                htmlFor="email"
                className="block text-sm text-gray-500 mb-2"
              >
                Users name or Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                 value={formData.email}
          onChange={handleChange}
          required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none bg-transparent"
                placeholder="ACDS@gmail.com"
            
              />
            </div>

            {/* Password */}
            <div className="text-left">
              <label
                htmlFor="password"
                className="block text-sm text-gray-500 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none bg-transparent"
                placeholder="••••••••"
                value={formData.password}
          onChange={handleChange}
          required
               
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <span className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-gray-700 px-8 py-3 font-medium text-white hover:bg-gray-800 transition-colors mt-6"
            >
              Login
            </button>

            {/* Or Divider */}
            <div className="flex items-center justify-center mt-8">
              <span className="text-sm text-gray-400">or</span>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors mt-4"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>Sign in with Google</span>
            </button>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <span className="text-sm text-gray-400">
               New at this website?
                <span className="text-gray-600 hover:underline cursor-pointer ml-1">
                    <Link to={'/auth/register'}>Signup</Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
     </div>
  
  )
}

export default Login