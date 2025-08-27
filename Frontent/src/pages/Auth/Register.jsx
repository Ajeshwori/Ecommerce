import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example check
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-full px-12 bg-gray-50">
        <div className="max-w-md w-full space-y-8 text-center">

          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>
              Lookscout
            </h1>
          </div>

          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-xl text-gray-500 font-light">
              Welcome to Lookscout
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div className="text-left">
              <label htmlFor="fullname" className="block text-sm text-gray-500 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 
                focus:border-gray-500 focus:outline-none bg-transparent"
                placeholder="Aana Adhikari"
              />
            </div>

            {/* Email */}
            <div className="text-left">
              <label htmlFor="email" className="block text-sm text-gray-500 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 
                focus:border-gray-500 focus:outline-none bg-transparent"
                placeholder="example@email.com"
              />
            </div>

            {/* Password */}
            <div className="text-left">
              <label htmlFor="password" className="block text-sm text-gray-500 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 
                focus:border-gray-500 focus:outline-none bg-transparent"
                placeholder="••••••••"
              />
            </div>

            {/* Confirm Password */}
            <div className="text-left">
              <label htmlFor="confirmPassword" className="block text-sm text-gray-500 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 
                focus:border-gray-500 focus:outline-none bg-transparent"
                placeholder="••••••••"
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-gray-700 px-8 py-3 font-medium text-white hover:bg-gray-800 transition-colors mt-6"
            >
              Register
            </button>
          </form>

          {/* Or Divider */}
          <div className="flex items-center justify-center mt-8">
            <span className="text-sm text-gray-400">or</span>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors mt-4"
          >
            {/* Google SVG */}
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92..."/>
            </svg>
            <span>Sign up with Google</span>
          </button>

          {/* Sign In Link */}
          <div className="text-center mt-8">
            <span className="text-sm text-gray-400">
              Already have an account?
              <span className="text-gray-600 hover:underline cursor-pointer ml-1">
                <Link to="/auth/login">Signin</Link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
