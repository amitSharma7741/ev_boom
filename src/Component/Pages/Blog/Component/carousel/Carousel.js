import React from "react";
import Slider from "react-slick";

import scooter from "../../../../Databse/ScooterData.json";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        {scooter.map((item) => {
          return (
            <>
            <div key={item.id}>
              <div className="card  text-white" style={{
                maxWidth:"400px",
                maxHeight:"400px",
              }}>
                <img src={item.image} className="card-img" alt={item.image}/>
                <div className="card-img-overlay" style={{
                    //  overlay text in bottom of image
                     bottom: 0,
                        background: "rgba(0, 0, 0, 0.5)",
                        color: "#f1f1f1",
                        width: "100%",
                        padding: "20px",
                        textAlign: "center",

                }}>
                    <h5 className="card-title">{item.scootername}</h5>
                    <p className="card-text">{item.price}</p>
                  
                </div>
              </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default Carousel;
