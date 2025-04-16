import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const Navigate = useNavigate();

    const formData = (data) => {
        const existUser = JSON.parse(localStorage.getItem("signUpData")) || [];
        const email = existUser.some((user) => user.email === data.email);
        if (email) {
            alert("Email already exists");
            return;
        }

        const updatedUser = [...existUser, data];
        console.log(updatedUser); // Check if array is updated correctly

        localStorage.setItem("signUpData", JSON.stringify(updatedUser));
        alert("Account created successfully!");
        Navigate("/")
        console.log("Stored data successfully");
    };

    return (
        <div className="flex h-screen w-full bg-gradient-to-r from-blue-500 to-indigo-600">
            {/* Left Image Section */}
            <div className="w-2/5 h-full hidden md:block">
                <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
                    alt="Signup Visual"
                    className="h-full w-full object-cover"
                />
            </div>

            {/* Signup Form Section */}
            <div className="flex flex-col justify-center items-center w-full md:w-3/5 px-10">
                <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Account</h2>
                    <p className="text-center text-sm text-gray-500 mb-6">
                        Already have an account?{' '}
                        <Link to="/" className="text-blue-500 hover:underline">
                            Login here
                        </Link>
                    </p>

                    <form onSubmit={handleSubmit(formData)} className="space-y-5">
                        {/* Full Name Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                            <input
                                {...register("fullName", { required: "Full name is required" })}
                                type="text"
                                placeholder="John Doe"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                        </div>

                        {/* Email Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Email Address</label>
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="email"
                                placeholder="john@example.com"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Password</label>
                            <input
                                {...register("password", { required: "Password is required" })}
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition duration-200"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
