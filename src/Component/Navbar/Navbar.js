import React from 'react'
import "./Navbar.css"
import { Link, Outlet } from "react-router-dom"
import Footer from '../Footer/Footer';

const Navbar = () => { 
  //  if scroll down, navbar background color changes

  const scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.backgroundColor = "black";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }
  window.onscroll = function () {
    scrollFunction()
  };

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










      <div className="top" id='navbar'>
        
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li> 
            <li className="topListItem">
              <Link className="link" to="/scooter">
                Scooter
              </Link>
            </li> 
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