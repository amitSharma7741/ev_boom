import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Scooter from "../../../Databse/ScooterData.json";
const VideoCarouselForScooterHeader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Scooter);
  }, []);

  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.map((item, index) => {
            return (
              <div
                className={
                  index === 0 ? "carousel-item active" : "carousel-item "
                }
                data-bs-interval={3000}
                key={index}
              >
                <img
                  src={item.image}
                  className="d-block w-100"
                  alt= {item.scootername}
                  style={{
                    height: "500px",
                  }}
                />
              </div>
            );
          })}
         {/*  <div className="carousel-item active" data-bs-interval={3000}>
            <img
              src="https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg"
              className="d-block w-100"
              alt="ola s1 pro"
              style={{
                height: "500px",
              }}
            />
          </div>
          <div className="carousel-item" data-bs-interval={3000}>
            <img
              src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/132397/v1-right-front-three-quarter.jpeg?isig=0&q=80"
              className="d-block w-100"
              alt="hero vida v1"
              style={{
                height: "500px",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/126579/450x-gen-3-right-front-three-quarter.jpeg?isig=0&q=80"
              className="d-block w-100"
              alt="ather 450x"
              style={{
                height: "500px",
              }}
            />
          </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <FaAngleLeft  className="carousel-control-prev-icon color-black" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <FaAngleRight className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default VideoCarouselForScooterHeader;
