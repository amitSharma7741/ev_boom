import React from "react";
import Slider from "react-slick";
import Scooter from "../../../../Databse/ScooterData.json";
// impoert react-responsive
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
const CompareTwo = () => { 
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const first1 = Scooter.filter((item) => item.id < 3);
  const first2 = Scooter.filter((item) => item.id < 5 && item.id > 2)
  const first3 =  Scooter.filter((item) => item.id < 7 && item.id > 4)
  const first4 = Scooter.filter((item) => item.id < 9 && item.id > 6)
  const data = [
    {
      id: 1,
      name: "Scooter",
      value: first1,
      comare:`${first1[0].scootername} vs ${first1[1].scootername}`
    },
    {
      id: 2,
      name: "Scooter",
      value: first2,
      comare:`${first2[0].scootername} vs ${first2[1].scootername}`
    },
    {
      id: 3,
      name: "Scooter",
      value:first3,
      comare:`${first3[0].scootername} vs ${first3[1].scootername}`
    },
    {
      id: 4,
      name: "Scooter",
      value:first4,
      comare:`${first4[0].scootername} vs ${first4[1].scootername}`
    }
  ]
 

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
          dots: true,
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
    val:{
      fontSize: isMobile ? "10px" : "13px",
      color: "brown",
      fontWeight: "bold",
    }
  };
  return (
    <div className="container mt-3 shadow py-4">
      <h3 className=" container text-start mb-4">Popular Electric Scooters Comparison</h3>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <>
              <div   key={item.id}>
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
                      position:"relative"
                      
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
                                <h5
                                  className="card-title"
                                  style={{
                                    textAlign: "center",
                                    fontSize: isMobile ? "12px" : "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  {elem.scootername}
                                </h5>
                                {/* <p className="card-text mb-4" style={styles.para}>
                                  Price :{" "}
                                  <span
                                    style={{
                                      color: "brown",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {elem.price}
                                  </span>
                                </p> */}
                                <div className="row">
                                  <div className="col-12">
                                    <p className ="float-start" style={styles.para}>
                                      Price 
                                    </p>
                                    <p className="float-end" style={styles.val}>
                                      {elem.price}
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <p className ="float-start" style={styles.para}>
                                      Range
                                    </p>
                                    <p className="float-end" style={styles.val}>
                                      {elem.araiRange}
                                    </p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-12">
                                    <p className ="float-start" style={styles.para}>
                                      Top Speed
                                    </p>
                                    <p className="float-end" style={styles.val}>
                                    {elem.topSpeed}
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
                                      {elem.price}
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
                                      {elem.araiRange}
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
                                      {elem.topSpeed}
                                    </p> 
                                </div> */}
                                {/* <p className="card-text" style={styles.para}>
                                  Top Speed : {elem.topSpeed}
                                </p> */}
                              </div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                    <div style={{
                      position:"absolute",
                      bottom:"0",
                      display:"flex",
                      justifyContent:"center",
                      
                    }}>
                      <button className="btn btn-primary mb-2 " 
                      onClick={()=>{
                        navigate(`/compare/${item.comare.toLowerCase().replace(/ /g, "-")}`)
                      }}
                      >
                         {item.comare}
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
  );
};

export default CompareTwo;
