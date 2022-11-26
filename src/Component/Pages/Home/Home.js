import React from 'react'
import AllScooter from '../Scooter/Component/AllScooter'
import VideoCarousel from './Component/VideoCarousel'
import "./Home.css"
const Home = () => {
  return (
    <>



    <VideoCarousel/>
     {/*  <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div> */}

<div className="bg-light">
      <div className="container ">
        <AllScooter />
      </div>

</div>

      {/* video carsoluel */}
    

    </>
  )
}


/* 
<video className="img-fluid" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
            </video>


 <video className="img-fluid" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
            </video>


 <video className="img-fluid" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
            </video>


*/
export default Home