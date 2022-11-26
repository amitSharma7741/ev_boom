import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home/Home';
import Post from './Component/Pages/Scooter/Post/Post';
import Scooter from './Component/Pages/Scooter/Scooter';
import ScooterNav from './Component/Pages/Scooter/ScooterNav';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/scooter" element={<ScooterNav />} >
            <Route path="" element={<Scooter />} />
            <Route path=":post" element={<Post />} />
          </Route>
        </Route>

      </Routes>

    </>
  )
}

export default App