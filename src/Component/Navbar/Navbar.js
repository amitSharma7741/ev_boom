import React from 'react'
import "./Navbar.css"
import { Link, Outlet } from "react-router-dom"
import Footer from '../Footer/Footer';
// import Logo from './Logo/Logo';

const Navbar = () => {

  const showNav = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "Scooter",
      path: "/scooter"
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog"
    }
    /* {
      id: 4,
      name: "privacy policy",
      path: "/privacy-policy"
    } */
  ]
  //  if scroll down, navbar background color changes

  /*  const scrollFunction = () => {
     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
       document.getElementById("navbar").style.backgroundColor = "black";
     } else {
       document.getElementById("navbar").style.backgroundColor = "transparent";
     }
   }
   window.onscroll = function () {
     scrollFunction()
   }; */
  /* 
  if we are not in home page than navbar backgroud color is 
  background: linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%); 
  and in home page navbar background color is transparent
  */
  /*    const path = window.location.pathname;
      if(path !== "/"){
        document.getElementById("navbar").style.backgroundColor = "transparent";
      }
      else {
        document.getElementById("navbar").style.backgroundColor = "linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)";
      } */



  /* const styles = {
    text :{
      color: "white",
      textDecoration: "none",
      // text in uppercase
      textTransform: "uppercase",

    }
  } */
  return (
    <>
      {/* 
<nav className="navbar navbar-expand-sm     fixed-top" style={{
  backgroundColor:  "transparent"
}}>
  <div className="container-fluid">
  <ul className="navbar-nav">
  <li className="nav-item">
    <Link className="nav-link active" href="/">
      Active
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/">
      Link
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" href="/">
      Link
    </Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link d " href="/">
      Disabled
    </Link>
  </li>
</ul>

  </div>
</nav> */}










      <div className="top" id='navbar' style={{
        backgroundColor: "transparent",
        backgroundImage: " linear-gradient(60deg, rgba(84, 58, 183, 1) 0%, rgba(0, 172, 193, 1) 100%)",
      }}>

        <div className="topCenter">
          <ul className="topList">
            {/* <li className=" " style={{
              // backgroundColor: "white",
            }}>
              <Logo/>
            </li> */}
            {showNav.map((item) => {
              return (
                <li className="" key={item.id}>
                  <Link className="" to={item.path} style={{
                    color: "white",
                    textDecoration: "none",
                    // text in uppercase
                    textTransform: "uppercase",
                    margin: "0 10px",
                    fontSize: "20px",
                    fontWeight: "bold",


                  }} >
                    {item.name}
                  </Link>
                </li>
              )
            })}
             
            {/* <li className="topListItem">
              <Link className="link" to="/post">
                Post
              </Link>
            </li>  */}
          </ul>
        </div>
        <div className="topRight">

          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
      <div style={{
        minHeight: "100vh"
      }}>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Navbar