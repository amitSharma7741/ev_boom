import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scooter from "../../../Databse/ScooterData.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
const TryScroll = () => {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    addpaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

  };
  return (
    <>
      <div className="container">
        <Slider {...setting}>
          {Scooter.map((item) => {
            return (
              <div className="card"  key={item.id} style={{
                maxWidth: "18rem",
                

              }}>
                <LazyLoadImage src= {item.image} className="card-img-top" alt= {item.scootername} style={{
                    height: "180px"
                }} effect="blur" />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.scootername}
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default TryScroll;
