import React, { useEffect, useState } from "react";
import "./Post.css";
import { useParams } from "react-router-dom";
// how to import json file
import scooter from "../Databse/ScooterData.json";
import FourSpecification from "./Component/FourSpecification";
import EmiCalaculator from "./Component/EmiCalaculator";
import SimilarScooter from "./Component/SimilarScooter";
import ImageCarousel from "./Component/ImageCarousel";
// import blob from "./Component/SVG/scooter.svg"
import RunningCostCalculator from "./Component/RunningCostCalculator";
import ImageGallery from "./Component/ImageGallery";
import ReactGA from "react-ga";
// import TryEmiCalculator from './Component/TryEmiCalculator';
import { useMediaQuery } from "react-responsive";
import Camparsion from "../Component/Camparsion";
import Seo from "../../../SEO/Seo";
import RecentlyViewed from "./Component/RecentlyViewed/RecentlyViewed";
const Post = () => {
  const { post } = useParams();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const showData = scooter.filter((item) => item.path === post);
  // const realData = scooter.find((item) => item.id === 1)
  // console.log(realData)

  // add read more button in info className tag
  const title =
    showData[0].scootername +
    " Price, Range, Battery Charging Time, Top Speed, Images";
  const urlParam = `/scooter/${post}`;

  const [isreadMore, setIsreadMore] = useState(true);
  const [localData, setLocalData] = useState([]);
  const text = showData[0].longDescription;

  const ForMobile = () => {
    return (
      <>
        <div className="fixed-bottom">
          <div
            className="row bg-dark"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              height: "50px",
            }}
          >
            <div className="col-6 d-flex justify-content-center">
              <button className="btn  text-white btn-block">
                {showData[0].scootername}
              </button>
            </div>
            <div className="col-6  d-flex justify-content-center">
              <button className="btn  text-white btn-block">
                Rs. {showData[0].price}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };

  const setLocalStorage = (item) => {
    let scooters = {
      count: 1,
      dataArr: [],
    };
    //  store the data in object
    const data = {
      id: Math.random() * 1000,
      path: item,
    };

    if (localStorage.getItem("scooters") === null) {
      // if the data is not present in the local storage then store it
      scooters.dataArr?.push(data);
      localStorage.setItem("scooters", JSON.stringify(scooters));
    } else {
      // if the data is present in the local storage then get the data and then store it
      scooters = JSON.parse(localStorage.getItem("scooters"));
      if (!scooters.dataArr?.some((item) => item.path === data.path)) {
        scooters.dataArr?.push(data);
        scooters.count = scooters.count + 1;
        localStorage.setItem("scooters", JSON.stringify(scooters));
      }
    }
    //  now check what we store in the local storage
    // console.log(JSON.parse(localStorage.getItem("scooters")));
  };

  //  we set data in local storage localStorage.setItem("scooter", JSON.stringify(item)); // convert the object to string
  //  we want get the local storage data

  // let localData = [];
  // console.log(localData);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    // open always in top
    window.scrollTo(0, 0);
    setLocalStorage(post);
    const scooterLocalStorage = JSON.parse(localStorage.getItem("scooters"));
    // remove the data from local storage
    // localStorage.removeItem("scooters");
    const dummyData = [];
    // if scooterLocalStorage count is greater than 1 then move forward
    if (scooterLocalStorage.length !== null) {
      if (scooterLocalStorage.count > 1) {
        for (let i = 0; i < scooterLocalStorage.dataArr.length; i++) {
          for (let j = 0; j < scooter.length; j++) {
            if (scooterLocalStorage.dataArr[i].path === scooter[j].path) {
              dummyData.push(scooter[j]);
            }
          }
        }
        // dummyData.filter((item) => item.path !== post);
        //  reverse the array
        dummyData.reverse();
        // console.log(dummyData);
        setLocalData(dummyData);
      }
    }
    // getLocalStorage();
  }, [post]);
  const styles = {
    detailText: {
      width: isMobile ? "100%" : "75%",
      textAlign: "justify",
    },
  };
  return (
    <>
      {/* add seo */}
      <Seo
        title={title}
        description={showData[0].longDescription.slice(0, 150)}
        image={showData[0].image}
        url={urlParam}
      />
      {/*  */}
      {/*  <header>
            <div
                id="intro-example"
                className="p-5 text-center bg-image"
                style={{
                    backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")'
                }}
            >
                <div className="mask" style={{ backgroundimage: `url(${blob})` }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                            <h5 className="mb-4">Best &amp; free guide of responsive web design</h5>

                        </div>
                    </div>
                </div>
            </div>
            </header> */}
      <div className="header">
        <div
          className=" position-absolute "
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
            textShadow: "2px 2px 4px #000000",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
            // backgroundImage: `url(${blob})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <p className="text-center">{showData[0].scootername}</p>
          <p className="text-center">{showData[0].price}</p>
        
        </div>

        <img
          className="headerImg"
          src={showData[0].image}
          alt={showData[0].company}
        />
      </div>

      <section
        className="section pt-0 position-relative pull-top"
        style={{ marginTop: "-100px" }}
      >
        <div className="container">
          <div className="rounded shadow dataContainer bg-white">
            <div className="container mt-3">
              <h2 className="text-start" style={{ textAlign: "justify" }}>
                {showData[0].scootername} Price, Range, Battery Charging Time,
                Top Speed, Images and many more
              </h2>
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <FourSpecification path={showData[0].path} />
 
            </div>
            {/* short info */}
            {/*  <div className="mt-5">
                            <h1>Info</h1>
                            <p className="text-black" style={styles.detailText}>
                                {text.slice(0, 200)}
                            </p>
                            {/*    <button onClick={() => setIsreadMore(!isreadMore)}>{isreadMore ? "Read More" : "Read Less"}</button> */}
            {/* </div> */}

            {/* emi calculator */}
            <div className="mt-5">
              <EmiCalaculator price={showData[0].price} />
            </div>

            {/*  specification */}
            <div
              className="row "
              style={{
                marginTop: "100px",
              }}
            >
              <div className="col-lg-6 col-md-6 col-12">
                <h1>Specification</h1>
                <table
                  className="table table-striped"
                  style={{ maxWidth: "500px" }}
                >
                  <thead>Pro Highlights</thead>
                  <tbody>
                    <tr>
                      <td>Top Speed</td>
                      <td>{showData[0].topSpeed}</td>
                    </tr>
                    <tr>
                      <td>Range</td>
                      <td>{showData[0].araiRange}</td>
                    </tr>
                    <tr>
                      <td>Battery</td>
                      <td> {showData[0].batteryCapacity}</td>
                    </tr>
                    <tr>
                      <td>Charging Time</td>
                      <td>{showData[0].chargingTime}</td>
                    </tr>
                    <tr>
                      <td>Motor Power</td>
                      <td>1.5 kW</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                {/* image carousel */}
                <ImageCarousel
                  galleryData={showData[0].gallery}
                  altText={title}
                />
              </div>
            </div>

            {/* full detail */}

            <div
              className=""
              style={{
                marginTop: "100px",
              }}
            >
              <h1>Full Detail</h1>
              <p className="text-black" style={styles.detailText}>
                {isreadMore ? text.slice(0, 300) : text}
              </p>
              <button onClick={() => setIsreadMore(!isreadMore)}>
                {isreadMore ? "Read More" : "Read Less"}
              </button>
            </div>

            {/* Running Cost Calculator */}

            <div
              style={{
                marginTop: "100px",
              }}
            >
              <RunningCostCalculator />
            </div>
            {/* comparision */}
            <Camparsion />

            {/* similar scooter */}
            <div className="mb-5 mt-2 py-3 shadow-sm bg-body">
              <h3 className="container">
                Similar scooter to {showData[0].scootername}
              </h3>
              <SimilarScooter name={post} />
            </div> 

            {/* image gallery */}

            <ImageGallery galleryData={showData[0].gallery} altText={title} />
            {/*  */}
            {/* get local storage items */}
            <div className="mb-5 mt-5 py-3 shadow-sm bg-body">
              <h3 className="container">Recently Viewed</h3>
              <RecentlyViewed data={localData} />
            </div>
            {/*  */}
            {/* try new emi calculator */}
            {/* <TryEmiCalculator price={showData[0].price}  /> */}
          </div>
        </div>
      </section>

      {isMobile ? <ForMobile /> : ""}
    </>
  );
};

export default Post;
