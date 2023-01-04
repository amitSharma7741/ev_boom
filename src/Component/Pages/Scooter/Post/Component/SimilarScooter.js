import React from "react";
import Scooter from "../../Databse/ScooterData.json";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
const SimilarScooter = (props) => {
  const data = Scooter.filter((item) => item.path !== props.name);
  const navigate = useNavigate();

  const setting = {
    // dots: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="container">
        <Slider {...setting}>
          {data.map((item) => {
            return (
              <>
                <div
                  key={item.id}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="card mx-2"
                    style={{
                      maxWidth: "18rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                      boxShadow: "0 0 11px rgba(33,33,33,.2)",
                      borderRadius: "10px",
                      border: "none",
                      overflow: "hidden",
                      marginBottom: "20px",
                      marginTop: "20px",
                      backgroundColor: "#fff",
                    }}
                    onClick={() => {
                      navigate(`/scooter/${item.path}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.scootername}
                      className="card-img-top"
                      style={{
                        height: "180px",
                      }}
                    />
                    <div className="card-body">
                      <div className="card-title text-center">
                        {item.scootername}
                      </div>
                      <div
                        className="card-text text-center"
                        style={{
                          color: "brown",
                          fontWeight: "bold",
                        }}
                      >
                        Rs. {item.price}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default SimilarScooter;
