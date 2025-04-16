import React from 'react'
import {Link} from "react-router-dom"
function Nav() {
  return (
    <div className='flex items-center gap-[100px] justify-center p-10'>
      <Link className='text-2xl font-bold' to="/home">Home</Link>
      <Link className='text-2xl font-bold' to="/men">Men</Link>
      <Link className='text-2xl font-bold' to="/women">Women</Link>
      <Link className='text-2xl font-bold' to="/jwellary">Jwellary</Link>
      <Link className='px-5 py-2 bg-red-600 text-white rounded-md text-xl'to="/">LogOut</Link>
    </div>
  )
}

export default Nav;
