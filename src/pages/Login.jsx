import React from 'react';
import { Link, Navigate } from 'react-router-dom'; // Don't forget to import Navigate
import { useForm } from 'react-hook-form';

function Login() {
   const { register, handleSubmit, formState: {errors} } = useForm();
   const [redirect, setRedirect] = React.useState(false);  // New state for redirection

   const handleLogin = (data) => {
      const localStorageData = JSON.parse(localStorage.getItem("signUpData"));

      if (localStorageData) {
         // Find user by email, assuming localStorage stores an array of users
         const user = localStorageData.find(user => user.email === data.email);

         if (user && user.password === data.password) {
            // If credentials match, redirect to home page
            setRedirect(true);  // Set redirect to true
         } else {
            alert("Invalid email or password.");
         }
      } else {
         alert("No user found. Please sign up first.");
      }
   };

   if (redirect) {
      // If redirect is true, navigate to home page
      return <Navigate to="/home" />; // This will work now with React Router v6
   }

   return (
      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
         <div className="w-full max-w-sm p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back 👋</h2>

            <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
               {/* Email Input */}
               <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-600">Email</label>
                  <input
                     {...register("email",{required:"email is required"})}
                     type="email"
                     id="email"
                     placeholder="Enter your email"
                     className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
               </div>

               {/* Password Input */}
               <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-600">Password</label>
                  <input
                     {...register("password", {required: "password is required"})}
                     type="password"
                     id="password"
                     placeholder="Enter your password"
                     className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
               </div>

               {/* Remember Me & Forgot Password Link */}
               <div className="flex justify-between items-center text-sm">
                  <label className="flex items-center space-x-2">
                     <input type="checkbox" className="form-checkbox text-blue-500" />
                     <span>Remember me</span>
                  </label>
                  <Link to="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</Link>
               </div>

               {/* Submit Button */}
               <button 
                  type="submit"
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
               >
                  Login
               </button>
            </form>

            {/* Sign Up Link */}
            <p className="text-sm text-center mt-6">
               Don't have an account?{' '}
               <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
            </p>
         </div>
      </div>
   );
}

export default Login;
