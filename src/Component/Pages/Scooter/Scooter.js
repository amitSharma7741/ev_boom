import React, { useEffect } from "react";
import AllScooter from "./Component/AllScooter";
// import Camparsion from './Component/Camparsion'
import { Outlet } from "react-router-dom";
import ThreeBestScooter from "./Component/ThreeBestScooter";
import HorrizontalImageScooters from "./Component/HorrizontalImageScooters";
import ReactGA from "react-ga";
import Seo from "../../SEO/Seo";
import VideoCarouselForScooterHeader from "./Component/VideoCarouselForScooterHeader";
import CompareTwo from "./Component/CompareTwo/CompareTwo";
// import TryScroll from './Component/TryScroll'
// import "./Post/Post.css"
const Scooter = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Seo
        title="Electric Scooter price , specification, images , mileage, reviews, offers in India | Evstart"
        // description should be 150 to 160 character
        description="Electric Scooter in India 2021: Check out the list of top-rated electric scooters available in the Indian market. Get on-road prices, mileage, reviews, specifications, pictures, videos, and more on Electric Scooter at AutoX."
        image="https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg"
        url="/scooter"
      />

      {/* header videomcarsouel */}

      <VideoCarouselForScooterHeader />

      {/*  */}
      {/* <div className="header">
         
        <img
          className="headerImg"
          src="https://imgd.aeplcdn.com/393x221/n/cw/ec/107243/s1-pro-right-front-three-quarter-2.jpeg?isig=0&q=75"
          alt=""
        /> 
      </div> */}

      {/* <div className="container">
                    <div className="rounded shadow dataContainer bg-white"> */}
      <section
        className="section pt-0 position-relative pull-top"
        style={{ marginTop: "-100px" }}
      >
        <div className="container">
          <div className="rounded shadow dataContainer bg-white">
            <h3 className="text-center">Three best scooters in india</h3>
            <div className="row d-flex justify-content-center ">
              <ThreeBestScooter />
              {/* add three top scooter card */}
              {/* <div className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://wallpaperaccess.com/full/12324.png" className="card-img-top" alt="https://wallpaperaccess.com/full/12324.png" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6  d-flex justify-content-center mt-3   text-center">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://wallpaperaccess.com/full/12324.png" className="card-img-top" alt="https://wallpaperaccess.com/full/12324.png" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
              <div className="col-lg-4 col-md-6 d-flex justify-content-center mt-3    text-center">
                <div className="card" style={{ width: '18rem' }}>
                  <img src="https://wallpaperaccess.com/full/12324.png" className="card-img-top" alt="https://wallpaperaccess.com/full/12324.png" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div> */}
              {/*  <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                <i className="ti-paint-bucket text-primary h1" />
                <h3 className="mt-4 text-capitalize h5 ">themes made easy</h3>
                <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                  tempore ipsam dignissimos molestias.</p>

              </div>
              <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                <i className="ti-paint-bucket text-primary h1" />
                <h3 className="mt-4 text-capitalize h5 ">themes made easy</h3>
                <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                  tempore ipsam dignissimos molestias.</p>

              </div> */}
            </div>
          </div>

          {/* placed all content here */}
          <div className="mt-5">
            <AllScooter />{" "}
          </div>
          <hr />
          {/* cmparesion */}
          {/* <Camparsion /> */}

          {/* horrizontal image gallery */}
          <HorrizontalImageScooters />

          {/* compare two */}
          <div className="mt-5">
            <CompareTwo />
          </div>
          {/* add try slider */}
          {/* <TryScroll/> */}
          {/* above spce for all content */}
        </div>

        <Outlet />
      </section>

      {/* we will use later */}
      {/*  <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <div className="card text-black">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
                  className="card-img-top"
                  alt="iPhone"
                />
                <div className="card-body">
                  <div className="text-center mt-1">
                    <h4 className="card-title">iPhone X</h4>
                    <h6 className="text-primary mb-1 pb-3">Starting at $399</h6>
                  </div>
                  <div className="text-center">
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Quick Look</h5>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">5.8″</span>
                      <span>Super Retina HD display1</span>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">
                        <i className="fas fa-camera-retro" />
                      </span>
                      <ul className="list-unstyled mb-0">
                        <li aria-hidden="true">—</li>
                        <li>Wide</li>
                        <li>Telephoto</li>
                        <li aria-hidden="true">—</li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">2x</span>
                      <span>Optical zoom range</span>
                    </div>
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Capacity</h5>
                    </div>
                    <div className="d-flex flex-column mb-4 lead">
                      <span className="mb-2">64GB</span>
                      <span className="mb-2">256GB</span>
                      <span style={{ color: "transparent" }}>0</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <button
                      type="button"
                      className="btn btn-primary flex-fill me-1"
                      data-mdb-ripple-color="dark"
                    >
                      Learn more
                    </button>
                    <button type="button" className="btn btn-danger flex-fill ms-1">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card text-black">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
                  className="card-img-top"
                  alt="iPhone"
                />
                <div className="card-body">
                  <div className="text-center mt-1">
                    <h4 className="card-title">iPhone 11</h4>
                    <h6 className="text-primary mb-1 pb-3">Starting at $499</h6>
                  </div>
                  <div className="text-center">
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Quick Look</h5>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">6.1″</span>
                      <span>Liquid Retina HD display1</span>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">
                        <i className="fas fa-camera-retro" />
                      </span>
                      <ul className="list-unstyled mb-0">
                        <li aria-hidden="true">Ultra Wide</li>
                        <li>Wide</li>
                        <li aria-hidden="true">—</li>
                        <li aria-hidden="true">—</li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">2x</span>
                      <span>Optical zoom range</span>
                    </div>
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Capacity</h5>
                    </div>
                    <div className="d-flex flex-column mb-4 lead">
                      <span className="mb-2">64GB</span>
                      <span className="mb-2">128GB</span>
                      <span>256GB</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <button
                      type="button"
                      className="btn btn-primary flex-fill me-1"
                      data-mdb-ripple-color="dark"
                    >
                      Learn more
                    </button>
                    <button type="button" className="btn btn-danger flex-fill ms-1">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card text-black">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
                  className="card-img-top"
                  alt="iPhone"
                />
                <div className="card-body">
                  <div className="text-center mt-1">
                    <h4 className="card-title">iPhone 11 Pro</h4>
                    <h6 className="text-primary mb-1 pb-3">Starting at $599</h6>
                  </div>
                  <div className="text-center">
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Quick Look</h5>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">5.8″</span>
                      <span>Super Retina HD display1</span>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">
                        <i className="fas fa-camera-retro" />
                      </span>
                      <ul className="list-unstyled mb-0">
                        <li aria-hidden="true">Ultra Wide</li>
                        <li>Wide</li>
                        <li>Telephoto</li>
                        <li aria-hidden="true">—</li>
                      </ul>
                    </div>
                    <div className="d-flex flex-column mb-4">
                      <span className="h1 mb-0">4x</span>
                      <span>Optical zoom range</span>
                    </div>
                    <div
                      className="p-3 mx-n3 mb-4"
                      style={{ backgroundColor: "#eff1f2" }}
                    >
                      <h5 className="mb-0">Capacity</h5>
                    </div>
                    <div className="d-flex flex-column mb-4 lead">
                      <span className="mb-2">64GB</span>
                      <span className="mb-2">256GB</span>
                      <span>512GB</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <button
                      type="button"
                      className="btn btn-primary flex-fill me-1"
                      data-mdb-ripple-color="dark"
                    >
                      Learn more
                    </button>
                    <button type="button" className="btn btn-danger flex-fill ms-1">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* new section */}
      {/*  <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: 35, height: 35 }}
                  >
                    <p className="text-white mb-0 small">x4</p>
                  </div>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1099</s>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Notebook</h5>
                    <h5 className="text-dark mb-0">$999</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">6</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: 35, height: 35 }}
                  >
                    <p className="text-white mb-0 small">x2</p>
                  </div>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
                  className="card-img-top"
                  alt="Laptop"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1199</s>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">HP Envy</h5>
                    <h5 className="text-dark mb-0">$1099</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">7</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-md-0">
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">Today's Combo Offer</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: 35, height: 35 }}
                  >
                    <p className="text-white mb-0 small">x3</p>
                  </div>
                </div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
                  className="card-img-top"
                  alt="Gaming Laptop"
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small">
                      <a href="#!" className="text-muted">
                        Laptops
                      </a>
                    </p>
                    <p className="small text-danger">
                      <s>$1399</s>
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">Toshiba B77</h5>
                    <h5 className="text-dark mb-0">$1299</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">5</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fa fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* another section */}
      {/*  <div className="container mt-3">
        <h2>Toggleable Pills</h2>
        <br /> 
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-bs-toggle="pill" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="pill" href="#menu1">
              Menu 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="pill" href="#menu2">
              Menu 2
            </a>
          </li>
        </ul> 
        <div className="tab-content">
          <div id="home" className="container tab-pane active">
            <br />
            <h3>HOME</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div id="menu1" className="container tab-pane fade">
            <br />
            <h3>Menu 1</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
              ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div id="menu2" className="container tab-pane fade">
            <br />
            <h3>Menu 2</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>


      </div> */}
    </>
  );
};

export default Scooter;
