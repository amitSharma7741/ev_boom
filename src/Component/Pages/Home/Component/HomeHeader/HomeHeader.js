import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeHeader.css";
const HomeHeader = () => {
    const naviagte = useNavigate();
  const showIcons = [
    {
      id: 1,
      iconSrc:
        "https://assets5.lottiefiles.com/packages/lf20_hbr24n88.json",
      name: "EV Scooter",
      url:"/scooter"
    },
    {
      id: 2,
      iconSrc:
        "https://assets9.lottiefiles.com/private_files/lf30_gclfxdgi.json",
      name: "Running Cost Calculator",
      url:"/fuel-cost-calculator"
    },
    {
      id: 3,
      iconSrc: "https://assets7.lottiefiles.com/datafiles/98a3d0add75fc3c86f6d6f9b148c111e/Newspaper animation.json",
      name: "EV News",
      url:"/blog"
    },
  ];
  return (
    <>
      <div> 
            {/* <img
              src="https://images.zigcdn.com/images/revamp/new-age-of-electric-mobility.jpg"
              alt="EVSTART: Electric scooter price, specification, review, compare @evstart"
              classname="img-fluid "
            />  */}

        <div className="d-flex justify-content-center py-5">
          <div className="shadow p-3 boxBackground" style={{
            borderRadius: "15px",
            //  use linear gradient color for background 
          }}>
            <div
              style ={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {showIcons.map((item) => {
                return (
                  <>
                    <div
                      key={item.id}
                      onClick = {() => naviagte(item.url)}
                      style ={{
                        cursor: "pointer",
                      }}
                    >
                      <Player
                        autoplay
                        loop
                        src={item.iconSrc}
                        style={{
                            height:"40px",
                            width: "40px",
                        }}
                        />
                      <p
                        style={{
                          paddingLeft: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        {item.name}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
