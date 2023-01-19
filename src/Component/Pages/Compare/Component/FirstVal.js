import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import Scooter from "../../../Databse/ScooterData.json";
import { useMediaQuery } from "react-responsive";
import ReactGA from "react-ga4";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FirstVal = (props) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  var val = props.name;
  //    we don't want to val value  = -vida-v1 or vida-v1-
  //  we wanr vida-v1 value
  //  we don't want hypen sign starting or end if it so remove this sign

  const data = Scooter.filter((item) => item.path === val);
  const otherScooter = Scooter.filter((item) => item.path !== val);

  const settings = {
    // dots: true,
    // arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
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

  const styles = {
    para: {
      fontSize: isMobile ? "10px" : "13px",
    },
    val: {
      fontSize: isMobile ? "10px" : "13px",
      color: "brown",
      fontWeight: "bold",
    },
  };
  return (
    <>
      <div className="container mt-3 shadow py-4">
        <h3 className=" container text-start mb-4">
          Similar Scooter to {data[0]?.scootername}
        </h3>
        <Slider {...settings}>
          {otherScooter.map((item) => {
            return (
              <>
                <div key={item.id}>
                  <div
                    className="container "
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      className="row  shadow-sm bg-body pb-3 w-100"
                      style={{
                        // border: "1px solid black",
                        borderRadius: "10px",
                        padding: "10px",
                        position: "relative",

                        //   height: "300px",
                      }}
                    >
                      <div className="col-6">
                        <div
                          className="card mb-3"
                          style={{
                            width: "100%",
                            border: "none",
                          }}
                        >
                          <LazyLoadImage
                            src={data[0]?.image}
                            className="card-img-top"
                            alt={data[0]?.scootername}
                            style={{
                              height: "150px",
                            }}
                            effect="blur"
                          />
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{
                                textAlign: "center",
                                fontSize: isMobile ? "12px" : "16px",
                                fontWeight: "bold",
                                textDecoration: "underline",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                navigate(`/scooter/${data[0]?.path}`);
                                ReactGA.event({
                                  category: `${window.location.pathname}`,
                                  action: ` "Click on ${data[0]?.scootername}"`,
                                  label: "Click on scooter name",
                                });
                              }}
                            >
                              {data[0]?.scootername}
                            </h5>

                            <div className="row">
                              <div className="col-12">
                                <p className="float-start" style={styles.para}>
                                  Price
                                </p>
                                <p className="float-end" style={styles.val}>
                                  {data[0]?.price}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <p className="float-start" style={styles.para}>
                                  Range
                                </p>
                                <p className="float-end" style={styles.val}>
                                  {data[0]?.araiRange}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <p className="float-start" style={styles.para}>
                                  Range
                                </p>
                                <p className="float-end" style={styles.val}>
                                  {data[0]?.topSpeed}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div
                          className="card mb-3"
                          style={{
                            width: "100%",
                            border: "none",
                          }}
                        >
                          <LazyLoadImage
                            src={item.image}
                            className="card-img-top"
                            alt={item.scootername}
                            style={{
                              height: "150px",
                            }}
                          />
                          <div className="card-body">
                            <h5
                              className="card-title"
                              style={{
                                textAlign: "center",
                                fontSize: isMobile ? "12px" : "16px",
                                fontWeight: "bold",
                                textDecoration: "underline",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                navigate(`/scooter/${data[0]?.path}`);
                                ReactGA.event({
                                  category: `${window.location.pathname}`,
                                  action: ` "Click on ${item.scootername}"`,
                                  label: "Click on scooter name",
                                });
                              }}
                            >
                              {item.scootername}
                            </h5>
                            {/* <p className="card-text mb-4" style={styles.para}>
                                  Price :{" "}
                                  <span
                                    style={{
                                      color: "brown",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {item.price}
                                  </span>
                                </p> */}
                            <div className="row">
                              <div className="col-12">
                                <p className="float-start" style={styles.para}>
                                  Price
                                </p>
                                <p className="float-end" style={styles.val}>
                                  {item.price}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <p className="float-start" style={styles.para}>
                                  Range
                                </p>
                                <p className="float-end" style={styles.val}>
                                  {item.araiRange}
                                </p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-12">
                                <p className="float-start" style={styles.para}>
                                  Top Speed
                                </p>
                                <p className="float-end" style={styles.val}>
                                  {item.topSpeed}
                                </p>
                              </div>
                            </div>
                            {/* <div className="card-text w-100" style={styles.para}> 
                                    <p className="float-start" >
                                      Price
                                    </p>
                                    <p className=" float-end" style={{
                                      color: "brown",
                                      fontWeight: "bold",
                                    }}>
                                      {item.price}
                                    </p> 
                                </div> */}
                            {/* <div className="card-text w-100" style={styles.para}> 
                                    <p className="float-start" >
                                      Range
                                    </p>
                                    <p className=" float-end" style={{
                                      color: "brown",
                                      fontWeight: "bold",
                                    }}>
                                      {item.araiRange}
                                    </p> 
                                </div>
                                <div className="card-tex w-100t" style={styles.para}> 
                                    <p className="float-start" >
                                      Top Speed
                                    </p>
                                    <p className=" float-end" style={{
                                      color: "brown",
                                      fontWeight: "bold",
                                    }}>
                                      {item.topSpeed}
                                    </p> 
                                </div> */}
                            {/* <p className="card-text" style={styles.para}>
                                  Top Speed : {item.topSpeed}
                                </p> */}
                          </div>
                        </div>
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          className="btn btn-primary mb-2 "
                          onClick={() => {
                            navigate(
                              `/compare/${data[0]?.path}-vs-${item.path}`
                            );
                            ReactGA.event({
                              category: `${Window.location.pathname}`,
                              action: ` "Click on ${data[0]?.scootername} vs ${item.scootername} button"`,
                              label: "Click on  vs button",
                            });
                            window.scrollTo(0, 0);
                          }}
                        >
                          {data[0]?.scootername} vs {item.scootername}
                        </button>
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

export default FirstVal;
