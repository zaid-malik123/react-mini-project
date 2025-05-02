import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const [theme, setTheme] = useState("light-mode");
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

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
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Brand */}
        <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
          Clothify 👕
        </h1>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex gap-8 items-center text-lg font-semibold">
          <Link className="hover:text-indigo-500 transition-all" to="/home">Home</Link>
          <Link className="hover:text-indigo-500 transition-all" to="/men">Men</Link>
          <Link className="hover:text-indigo-500 transition-all" to="/women">Women</Link>
          <Link className="hover:text-indigo-500 transition-all" to="/jwellary">Jewellery</Link>
        </div>

        {/* Theme Toggle & Logout */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="text-xl text-yellow-500 hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "light-mode" ? <FaSun /> : <FaMoon />}
          </button>

          <Link
            to="/"
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
          >
            Logout
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Navbar Links */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} p-4 bg-zinc-800`}>
        <Link className="block text-lg text-white hover:text-indigo-500 py-2" to="/home">Home</Link>
        <Link className="block text-lg text-white hover:text-indigo-500 py-2" to="/men">Men</Link>
        <Link className="block text-lg text-white hover:text-indigo-500 py-2" to="/women">Women</Link>
        <Link className="block text-lg text-white hover:text-indigo-500 py-2" to="/jwellary">Jewellery</Link>
      </div>
    </nav>
  );
}

export default Nav;
