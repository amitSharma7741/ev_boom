import React, {  useEffect } from "react";
import AllScooter from "../Scooter/Component/AllScooter";
// import VideoCarousel from './Component/VideoCarousel'
import "./Home.css";
import ReactGA from "react-ga4";
import TryHeader from "./Component/TryHeader/TryHeader";
import EmiCalculator from "../Scooter/Post/Component/EmiCalaculator";
import RunningCostCalculator from "../Scooter/Post/Component/RunningCostCalculator";
import CompareTwo from "./Component/CompareTwo/CompareTwo";
import Seo from "../../SEO/Seo";
import scooter from "../../Databse/ScooterData.json";
import HorrizontalImageScooters from "../Scooter/Component/HorrizontalImageScooters";
import FirstVal from "../Compare/Component/FirstVal";
import ShowBlogs from "../Blog/Component/ShowBlogs/ShowBlogs";
import HomeHeader from "./Component/HomeHeader/HomeHeader";

const Home = () => {
   

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <>
      {/* add seo */}
      <Seo
        title="EVSTART: Electric scooter price, image, specification, review, compare @evstart"
        description="EVSTART is a web application that allows users to search for electric vehicles and compare them to each other. The main goal of EVSTART is to facilitate the understanding and comparison of different types of electric vehicles in order to help buyers make an informed decision"
        image="https://images.unsplash.com/photo-1648204834832-78e68052c04f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        url="/"
      />
      <div className="section-1">
        <TryHeader />
        <HomeHeader />
      </div>

      {/*  <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div> */}

      <div className="section-2">
        <div
          className="container  "
          style={{
            padding: "50px 10px",
          }}
        >
          <AllScooter />
        </div>
      </div>
      <div
        className="container "
        style={{
          padding: "50px 10px",
        }}
      >
        <EmiCalculator price="100000" />
      </div>

      {/* compare two */}

      <div
        className=""
        style={{
          padding: "15px 0 70px 0",
        }}
      >
        <CompareTwo />
      </div>
      {/*  */}

      <div className="">
        <div
          className="container"
          style={{
            padding: "30px 10px",
          }}
        >
          <RunningCostCalculator />
        </div>
      </div>

      {/* Horrizontal scooter */}
      <div className="mb-5">
        <HorrizontalImageScooters />
      </div>
      {/* blogs */}
      <ShowBlogs />
      {/* blogs */}
      {/*  Horrizontal scooter */}
      {scooter.map((item) => {
        return (
          <>
            <div key={item.id}>
              <FirstVal name={item.path} />
            </div>
          </>
        );
      })}
      {/* Comparsion list  */}

      {/* Comparsion list  */}
      {/* video carsoluel */}
      {/* <VideoCarousel/> */}
    </>
  );
};

/* 
<video className="img-fluid" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
            </video>


 <video className="img-fluid" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
            </video>


 <video className="img-fluid" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
            </video>


*/
export default Home;
