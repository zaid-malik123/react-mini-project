import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const [theme, setTheme] = useState("light-mode");

  const toggleTheme = () => {
    setTheme(prev => prev === "light-mode" ? "dark-mode" : "light-mode");
  };

  useEffect(() => {
    document.querySelector("body").className = theme;
  }, [theme]);

  return (
    <nav
      className={`w-full py-4 px-6 transition-all duration-300 
        ${theme === "light-mode"
          ? "bg-zinc-100 text-black"
          : "bg-zinc-900 text-white"
        } shadow-md`}
    >
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
        {/* Brand */}
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
          Clothify 👕
        </h1>

        {/* Links */}
        <div className="flex gap-8 items-center text-lg font-semibold">
          <Link className="hover:text-indigo-500 transition-all" to="/home">Home</Link>
          <Link className="hover:text-indigo-500 transition-all" to="/men">Men</Link>
          <Link className="hover:text-indigo-500 transition-all" to="/women">Women</Link>
          <Link className="hover:text-indigo-500 transition-all" to="/jwellary">Jewellery</Link>
        </div>

        {/* Theme Toggle + Logout */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl text-yellow-500 hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "light-mode" ?  <FaSun /> : <FaMoon />}
          </button>

          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
