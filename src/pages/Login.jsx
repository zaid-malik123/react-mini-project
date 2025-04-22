import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [redirect, setRedirect] = useState(false);

  const handleLogin = (data) => {
    const storedData = JSON.parse(localStorage.getItem("signUpData"));

    if (storedData) {
      const user = storedData.find(user => user.email === data.email);
      if (user && user.password === data.password) {
        setRedirect(true);
      } else {
        toast.error("❌ Invalid email or password");
      }
    } else {
      toast.info("ℹ️ No user found. Please sign up first.");
    }
  };

  // ✅ Show toast once when redirect becomes true
  useEffect(() => {
    if (redirect) {
      toast.success("✅ Login successful!");
    }
  }, [redirect]);

  // ✅ Redirect if login is successful
  if (redirect) return <Navigate to="/home" />;

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login 🔐</h2>

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="you@example.com"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Remember Me + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-indigo-500" />
              <span>Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-indigo-600 hover:underline">Forgot password?</Link>
          </div>

          {/* Submit */}
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
