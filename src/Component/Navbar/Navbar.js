import React from "react";
// import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
// import Logo from './Logo/Logo';

const Navbar = () => {
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
      name: "Blogs",
      path: "/blog",
    },
  ];

  return (
    <>
      <div
        className=""
        style={{
          backgroundColor: "white",
          position: "fixed",
          width: "100%",
          zIndex: "100",
          top: "0",
        }}
      >
        <nav className="navbar navbar-expand-lg bg-white">
          <div className="container">
            <Link
              className="navbar-brand"
              href="/"
              style={{
                fontWeight: "900",
              }}
            >
              Evstart
            </Link>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                {showNav.map((item) => {
                  return (
                    <li className="nav-item" key={item.id}>
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        style={{
                          fontWeight: "bold",
                        }}
                        to={item.path}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>

     
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Navbar;
