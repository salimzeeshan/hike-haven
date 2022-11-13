import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Home"
import Login from './Login';
import Pricing from './Pricing';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
    </Routes>
  );
}

export default AllRoutes