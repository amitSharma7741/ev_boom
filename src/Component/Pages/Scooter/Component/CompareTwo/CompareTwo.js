import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Scooter from "../../Databse/ScooterData.json";
// impoert react-responsive
import { useMediaQuery } from 'react-responsive'
const CompareTwo = () => {
  const [data, setData] = useState([]);

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  useEffect(() => {
    setData([
      {
        id: 1,
        name: "Scooter",
        value: Scooter.filter((item) => item.id < 3),
      },
      {
        id: 2,
        name: "Scooter",
        value: Scooter.filter((item) => item.id < 5 && item.id > 2),
      },
      {
        id: 3,
        name: "Scooter",
        value: Scooter.filter((item) => item.id < 7 && item.id > 4),
      },
    ]);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
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

  const styles = {
    para :{
        fontSize:  isMobile ? "10px" : "13px",
    }
}
  return (
    <div className="container">
      <h1 className="text-start">Compare Two</h1>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <>
              <div>
                <div
                  className="container"
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="row row-cols-2"
                    style={{
                      border: "1px solid black",
                      borderRadius: "10px",
                      padding: "10px",
                    //   height: "300px",
                    }}
                  >
                    {item.value.map((elem) => {
                      return (
                        <>
                          <div className="col" key={elem.id}>
                            <div
                              className="card mb-3"
                              style={{
                                width: "100%",
                                border: "none",
                              }}
                            >
                              <img
                                src={elem.image}
                                className="card-img-top"
                                alt={elem.scootername}
                                style={{
                                  height: "150px",
                                }}
                              />
                              <div className="card-body">
                                <h5 className="card-title" style={{
                                    textAlign: "center",
                                    fontSize:isMobile ? "119px" : "16px",
                                }}>
                                  {elem.scootername}
                                </h5>
                                <p className="card-text" style={styles.para}>
                                    Price :<b style={{
                                        color:"brown"
                                    }}>{elem.price}</b> 
                                </p>
                                <p className="card-text" style={styles.para}>
                                    Top Speed : {elem.topSpeed}</p>
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default CompareTwo;
