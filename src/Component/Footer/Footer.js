import React from "react";
import { Link } from "react-router-dom";
import scooter from "../Databse/ScooterData.json";
import { BlogsData } from "../Pages/Blog/BlogsData";
const Footer = () => {
  const showNav = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Scooter",
      path: "/scooter",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      name: "privacy",
      path: "/privacy-policy",
    },
    {
      id: 5,
      name: "terms and conditions",
      path: "/terms-and-conditions",
    },
  ];
  return (
    <>
      <div className="bg-light" >
        <div className="container">
          <footer className="pt-5 ">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              {showNav.map((nav) => {
                return (
                  <li className="nav-item" key={nav.id}>
                    <Link to={nav.path} className="nav-link px-2 text-muted">
                      {nav.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* <p className="text-center text-muted">© 2022 Company, Inc</p> */}
          </footer>
          {/*  */}

          <footer className="bg-light text-center text-lg-start">
            {/* Grid container */}
            <div className="container p-4">
              {/*Grid row*/}
              <div className="row">
                {/*Grid column*/}
                <div className="col-lg-4  col-md-6 mb-4 mb-md-0">
                  <h5 className=" text-center fw-bold mb-4">Scooters</h5>
                  <div className="row">
                    <div className="col-6">
                      <ul className="list-unstyled mb-0">
                        {scooter.slice(0, 4).map((item, index) => {
                          return (
                            <>
                              <li
                                key={item.id}
                                className={
                                  index > 0
                                    ? " text-center mt-3"
                                    : " text-center"
                                }
                              >
                                <Link
                                  to={`/scooter/${item.path}`}
                                  className="text-dark"
                                  style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                  }}
                                >
                                  {item.scootername}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list-unstyled mb-0">
                        {scooter.slice(4).map((item, index) => {
                          return (
                            <>
                              <li
                                key={item.id}
                                className={
                                  index > 0
                                    ? " text-center mt-3"
                                    : " text-center"
                                }
                              >
                                <Link
                                  to={`/scooter/${item.path}`}
                                  className="text-dark"
                                  style={{
                                    textDecoration: "none",
                                    fontWeight: "500",
                                  }}
                                >
                                  {item.scootername}
                                </Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                {/*Grid column*/}

                {/*Grid column*/}
                <div className="col-lg-4  col-md-6 mb-4 mb-md-0">
                  <h5 className=" text-center fw-bold mb-4">Blogs</h5>

                  <ul className="list-unstyled">
                    {BlogsData.slice(0, 2).map((item) => {
                      return (
                        <>
                          <li key={item.Id} className="mb-2">
                            <div className="d-flex   ">
                              <div>
                                <img
                                  src={item.img}
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                  }}
                                  alt={item.title}
                                />
                              </div>
                              <div
                                className=" "
                                style={{
                                  marginLeft: "10px",
                                }}
                              >
                                <div
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: "500",
                                    color: "#000",
                                    //  start from top
                                  }}
                                >
                                  <Link
                                    to={`/blog/${item.path}`}
                                    style={{
                                      textDecoration: "none",
                                      color: "#000",
                                    }}
                                  >
                                    {item.title}
                                  </Link>
                                </div>
                                <p
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    color: "#000",
                                    //  start from top
                                    marginTop: "5px",
                                  }}
                                >
                                  {item.date}
                                </p>
                              </div>
                            </div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>

                <div className="col-lg-4  col-md-6 mb-4 mb-md-0">
                  <h5 className=" text-center fw-bold   mb-4">Tool</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="text-center">
                      <Link
                        to="/fuel-cost-calculator"
                        style={{
                          textDecoration: "none",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        Fuel Cost Calculator
                      </Link>
                    </li>
                    <li className="text-center mt-2">
                      <Link
                        to="/fuel-cost-calculator"
                        style={{
                          textDecoration: "none",
                          fontWeight: "500",
                          color: "#000",
                        }}
                      >
                        Emi Cost Calculator
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*Grid column*/}
              </div>
              {/*Grid row*/}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            {/* Copyright */}
          </footer>

          {/*  */}
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <Link
            to="https://evstart.netlify.app/"
            style={{
              marginLeft: "10px",
              textDecoration: "none",
              color: "#000",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            EVSTART
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
