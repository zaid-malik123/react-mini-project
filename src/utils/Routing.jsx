import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Men from "../pages/Men"
import Women from "../pages/Women"
import Child from "../pages/Child"
import Login from '../pages/Login';
import Signup from '../pages/Signup';
function Routing() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/jwellary' element={<Child/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing;
