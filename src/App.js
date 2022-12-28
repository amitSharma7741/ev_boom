import React from 'react'
import { Routes, Route } from "react-router-dom"; 
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Pages/Home/Home';
import Scooter from './Component/Pages/Scooter/Scooter';
import Post from './Component/Pages/Scooter/Post/Post';
import ScooterNav from './Component/Pages/Scooter/ScooterNav';
import Blog from './Component/Pages/Blog/Blog';
import BlogPost from './Component/Pages/Blog/BlogPost';
import AllBlogs from './Component/Pages/Blog/AllBlogs';
import PrivacyPolicy from './Component/Pages/PrivacyPolicy/PrivacyPolicy';
import ErrorPage from './Component/Pages/ErrorPage/ErrorPage';
import TermsAndCondition from './Component/Pages/TermsAndCondition/TermsAndCondition';
import ReactSnowfall from './Component/POPUP/ReactSnowfall/ReactSnowfall';
import Popup from './Component/POPUP/Popup';
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
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/blog" element={<Blog />} >
            <Route path="" element={< AllBlogs />} />
            <Route path=":blogpost" element={<BlogPost />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>

      </Routes>

{/*  */}
      <Popup />

      {/* react - snowfall */}
      <ReactSnowfall/>

    </>
  )
}

export default App