import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      setMessage(res.data.message || "Login successful");

      // Store user safely
      if (res.data.user) localStorage.setItem("user", JSON.stringify(res.data.user));
      else localStorage.removeItem("user");

      // Store token safely
      if (res.data.token) localStorage.setItem("token", res.data.token);
      else localStorage.removeItem("token");

      navigate("/dashboard");
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      setMessage(err.response?.data?.message || "Login failed");
      setIsError(true);
    } finally {
      setLoading(false);
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

            <div className="text-right">
              <span className="text-sm text-gray-400 hover:text-gray-600 cursor-pointer">
                Forgot password?
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-gray-700 px-8 py-3 font-medium text-white hover:bg-gray-800 transition-colors mt-6"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {message && (
              <p className={`mt-2 text-sm ${isError ? "text-red-500" : "text-green-500"}`}>
                {message}
              </p>
            )}

            {/* Or Divider */}
            <div className="flex items-center justify-center mt-8">
              <span className="text-sm text-gray-400">or</span>
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className="w-full flex items-center justify-center space-x-2 border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors mt-4"
            >
              <FcGoogle className="w-5 h-5" />
              <span>Sign in with Google</span>
            </button>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <span className="text-sm text-gray-400">
                New here?
                <span className="text-gray-600 hover:underline cursor-pointer ml-1">
                  <Link to="/auth/register">Signup</Link>
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
