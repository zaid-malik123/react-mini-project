import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const formData = (data) => {
    const existUser = JSON.parse(localStorage.getItem("signUpData")) || [];
    const emailExists = existUser.some((user) => user.email === data.email);

    if (emailExists) {
      toast.error("❌ Email already exists!");
      return;
    }

    const updatedUser = [...existUser, data];
    localStorage.setItem("signUpData", JSON.stringify(updatedUser));
    toast.success("✅ Account created successfully!");
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create Account 🚀</h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Already registered?{" "}
          <Link to="/" className="text-indigo-600 hover:underline">Login here</Link>
        </p>

        <form onSubmit={handleSubmit(formData)} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              id="fullName"
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
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

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="••••••••"
              className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account? <Link to="/" className="text-indigo-600 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
