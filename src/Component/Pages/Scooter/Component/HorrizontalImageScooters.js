import React from "react";
import Slider from "react-slick"; 
import Scooter from "../Databse/ScooterData.json";
const HorrizontalImageScooters = () => {
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
//   add css on card when some one hover on card

   
  return (
    <>
      <div className="container">
        <Slider {...setting}>
          {Scooter.map((item) => {
            return (
                <>
                <div key={item.id} style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}>

              <div className="card mx-2"  style={{
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
              
              >
                <img src= {item.image} className="card-img-top" alt= {item.scootername} style={{
                    height: "180px"
                }} />
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
                </div>
                </>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default HorrizontalImageScooters;
