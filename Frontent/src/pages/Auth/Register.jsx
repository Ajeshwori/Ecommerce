import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullname, email, password, confirmPassword } = formData;

    console.log("Form data being sent:", { fullname, email, password }); // Debug

    if (!fullname || !email || !password) {
      alert("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful!");
      // TODO: redirect to login or dashboard
    } catch (error) {
      console.error("Server error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center w-full px-12 bg-gray-50">
        <div className="max-w-md w-full space-y-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800" style={{ fontFamily: "serif" }}>
            Lookscout
          </h1>
          <h2 className="text-xl text-gray-500 font-light">Welcome to Lookscout</h2>

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
                placeholder="Aana Adhikari"
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none bg-transparent"
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
                placeholder="example@email.com"
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none bg-transparent"
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
                placeholder="••••••••"
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none bg-transparent"
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
                placeholder="••••••••"
                required
                className="w-full border-b border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-gray-500 focus:outline-none bg-transparent"
              />
            </div>

            {/* Submit Button */}
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
            <FcGoogle className="w-5 h-5" />
            <span>Sign in with Google</span>
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
