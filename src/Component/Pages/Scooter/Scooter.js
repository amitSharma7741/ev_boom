import React, { useEffect } from "react";
import AllScooter from "./Component/AllScooter";
// import Camparsion from './Component/Camparsion'
import { Outlet } from "react-router-dom";
import ThreeBestScooter from "./Component/ThreeBestScooter";
import HorrizontalImageScooters from "./Component/HorrizontalImageScooters";
import ReactGA from "react-ga4";
import Seo from "../../SEO/Seo";
import VideoCarouselForScooterHeader from "./Component/VideoCarouselForScooterHeader";
import CompareTwo from "../Home/Component/CompareTwo/CompareTwo";
// import TryScroll from './Component/TryScroll'
// import "./Post/Post.css"
const Scooter = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Seo
        title="Electric Scooter price , specification, images , mileage, reviews, offers in India | Evstart"
        // description should be 150 to 160 character
        description="Electric Scooter in India 2021: Check out the list of top-rated electric scooters available in the Indian market. Get on-road prices, mileage, reviews, specifications, pictures, videos, and more on Electric Scooter at AutoX."
        image="https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg"
        url="/scooter"
      />

      {/* header videomcarsouel */}

      <VideoCarouselForScooterHeader />

      {/*  */}
      {/* <div className="header">
         
        <img
          className="headerImg"
          src="https://imgd.aeplcdn.com/393x221/n/cw/ec/107243/s1-pro-right-front-three-quarter-2.jpeg?isig=0&q=75"
          alt=""
        /> 
      </div> */}

      {/* <div className="container">
                    <div className="rounded shadow dataContainer bg-white"> */}
      <section
        className="section pt-0 position-relative pull-top"
        style={{ marginTop: "-100px" }}
      >
        <div className="container">
          <div className="rounded shadow dataContainer bg-white">
            <h3 className="text-center">Three best scooters in india</h3>
            <div className="row d-flex justify-content-center ">
              <ThreeBestScooter />
           
            </div>
          </div>

          {/* placed all content here */}
          <div className="mt-5">
            <AllScooter />{" "}
          </div>
          <hr />
          {/* cmparesion */}
          {/* <Camparsion /> */}

          {/* horrizontal image gallery */}
          <HorrizontalImageScooters />

          {/* compare two */}
          <div className="mt-5">
            <CompareTwo />
          </div>
          {/* add try slider */}
          {/* <TryScroll/> */}
          {/* above spce for all content */}
        </div>

        <Outlet />
      </section>
 
    </>
  );
};

export default Scooter;
