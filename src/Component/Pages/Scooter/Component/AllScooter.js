import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import scooter from "../../../Databse/ScooterData.json";
import ReactGA from "react-ga4";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Player } from "@lottiefiles/react-lottie-player";
import { useMediaQuery } from "react-responsive";
const AllScooter = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [isreadMore, setIsreadMore] = useState(true);

  const showData = [
    {
      id: 1,
      name: "All",
      value: isreadMore ? scooter.slice(0, 6) : scooter,
    },
    {
      id: 2,
      name: "Ola",
      value: scooter.filter((item) => item.company === "Ola"),
    },
    {
      id: 3,
      name: "Ather",
      value: scooter.filter((item) => item.company === "Ather"),
    },
    {
      id: 4,
      name: "Aura",
      value: scooter.filter((item) => item.company === "Benling"),
    },
  ];

  const styles = {
    thText: {
      fontSize: isMobile ? "11px" : "13px",
      fontWeight: "bold",
    },
    player: {
      height: "30px",
      width: "30px",
    },
  };

  return (
    <>
      <Tabs className="shadow py-5">
        <TabList>
          {showData.map((item) => (
            <Tab
              key={item.id}
              style={{
                backgroundColor: "white",
                color: "black",
                margin: "10px",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              {item.name}
            </Tab>
          ))}
        </TabList>

        {showData.map((item) => (
          <TabPanel key={item.id}>
            {/* <h2>{item.value[0].company}</h2> */}
            <div className="row">
              {item.value.map((item) => (
                <div
                  className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center col-6 d-md-flex align-items-md-stretch  text-center"
                  key={item.id}
                >
                  <div
                    className="card shadow mb-5 bg-body rounded"
                    style={{ width: "18rem", cursor: "pointer" }}
                    onClick={() => {
                      ReactGA.event({
                        category: `${window.location.pathname}`,
                        action: `Click on ${item.scootername}`,
                        label: "Click on scooter name",
                      });
                      navigate(`/scooter/${item.path}`);
                    }}
                  >
                    <LazyLoadImage
                      src={item.image}
                      className="card-img-top"
                      alt={item.company}
                      style={{
                        height: "180px",
                      }}
                      effect="blur"
                    />
                    <div
                      className="card-body"
                      style={
                        {
                          // backgroundColor: "rgb(238, 238, 238)"
                        }
                      }
                    >
                      <Link
                        to={`/scooter/${item.path}`}
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                      >
                        <h5 className="card-title">{item.scootername}</h5>
                      </Link>
                      <div
                        className="card-text"
                        style={{
                          fontWeight: "700",
                          fontSize: "20px",
                          color: "crimson",
                        }}
                      >
                        <span>&#8377;</span> {item.price}
                        <div
                          style={{
                            fontSize: "10px",
                            color: "grey",
                            display: "inline-block",
                            lineHeight: "0px",
                            marginLeft: "5px",
                          }}
                        >
                          Estimated Price
                        </div>
                      </div>
                      <table style={{ width: "100%" }}>
                        <tr>
                          <th>
                            <Player
                              autoplay
                              loop
                              src="https://assets5.lottiefiles.com/packages/lf20_hbr24n88.json"
                              style={styles.player}
                            ></Player>
                          </th>
                          <th style={styles.thText}>
                            {item.chargingTime.slice(0, 1)} hrs
                          </th>
                          <th>
                            <Player
                              autoplay
                              loop
                              src="https://assets3.lottiefiles.com/private_files/lf30_zznbmhwf.json"
                              style={styles.player}
                            ></Player>
                          </th>
                          <th style={styles.thText}>{item.topSpeed}</th>
                        </tr>
                        <tr>
                          <th>
                            <Player
                              autoplay
                              loop
                              src="https://assets3.lottiefiles.com/private_files/lf30_0oldmhje.json"
                              style={styles.player}
                            ></Player>
                          </th>
                          <th style={styles.thText}>{item.araiRange}</th>
                          <th>
                            <Player
                              autoplay
                              loop
                              src="https://assets6.lottiefiles.com/packages/lf20_ncjjwhb5.json"
                              style={styles.player}
                            ></Player>
                          </th>
                          <th style={styles.thText}>{item.batteryCapacity}</th>
                        </tr>
                      </table>
                      {/*   <div className="card-text d-flex justify-content-between mt-2">
                        <div>
                          <Player
                            autoplay
                            loop
                            src="https://assets5.lottiefiles.com/packages/lf20_hbr24n88.json"
                            style={styles.player}
                          ></Player>
                        </div>
                        <div>{item.chargingTime}</div>
                      </div> */}
                      {/* <div>
                        <Player
                          autoplay
                          loop
                          src="https://assets3.lottiefiles.com/packages/lf20_spob0nkc.json"
                          style={styles.player}
                        ></Player>
                        <p>{item.topSpeed} ||</p>
                      </div>
                      <div>
                        <Player
                          autoplay
                          loop
                          src="https://assets5.lottiefiles.com/packages/lf20_hbr24n88.json"
                          style={styles.player}
                        ></Player>
                        <p>{item.araiRange} ||</p>
                      </div> */}
                      {/* {item.oneLine} */}
                    </div>
                    <div className="card-footer d-flex justify-content-center">
                      <Link
                        to={`/scooter/${item.path}`}
                        className="btn btn-primary"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <div className="d-flex justify-content-center">

              <button onClick={() => setIsreadMore(!isreadMore)} style={{
                backgroundColor: "transparent",
                border:  "1px solid crimson",
                borderRadius: "15px",
                cursor: "pointer",
                color: "crimson",
                fontWeight: "700",
                fontSize: "20px",
                marginTop: "20px",
                marginBottom: "20px",

              }}>
                {isreadMore ? "Show More" : "Show Less"}
              </button>
              </div>

            </div>
            {/*  <div className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://wallpaperaccess.com/full/12324.png" className="card-img-top" alt="https://wallpaperaccess.com/full/12324.png" 
                                
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div> */}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default AllScooter;
