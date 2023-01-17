import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ReactGA from "react-ga4";
import Seo from "../../SEO/Seo";

const Compare = () => {
  useEffect(() => { 
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Seo
        title="Electric Vehicle Blogs, News, Reviews, Tips and Tricks"
        description="Electric Vehicle Blogs, News, Reviews, Tips and Tricks"
        image="https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg"
        url="/blog"
      />

      <div
        class="container"
         
      >
        

         <Outlet />
      </div>
    </>
  );
};

export default Compare;
