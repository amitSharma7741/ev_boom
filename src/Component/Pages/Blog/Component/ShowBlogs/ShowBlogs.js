import React from "react";
import { BlogsData } from "../../BlogsData";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive"; 
import { Link, useNavigate } from "react-router-dom"; 
import Author from "../Author/Author";
const Showitems = () => {
   
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  
  const setting = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    addpaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  return (
    <>
      <div className="container shadow py-3">
      <h3 className=" container text-start mb-4">
         Electric vehicle Blogs 
        </h3>
        <Slider {...setting}>
          {BlogsData.map((item) => {
            return (
              <>
                <div
                  key={item.Id}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="card mx-2"
                    style={{
                      maxWidth: "18rem",
                      cursor: "pointer",
                      transition: "all 0.3s ease-in-out",
                      boxShadow: "0 0 11px rgba(33,33,33,.2)",
                      borderRadius: "10px",
                      border: "none",
                      overflow: "hidden",
                      marginBottom: "20px",
                      marginTop: "20px",
                      backgroundColor: "#fff",
                    }}
                    onClick={() => {
                      navigate(`/blog/${item.path}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="card-img-top"
                      style={{
                        height: "180px",
                      }} 
                    />
                    <div className="card-body">
                      <h5
                        className="card-title"
                        style={{
                          fontWeight: "bold",
                          textAlign: "justify",
                        }}
                      >
                        {item.title}
                      </h5>
                      <p
                        className="card-text text-black "
                        style={{
                          fontWeight: "400",
                          fontSize:isMobile ? "14px" : "16px",
                          textAlign: "justify",
                        }}
                      >
                        {item.description?.slice(0, 150)} ...{" "}
                        <Link
                          to={`/blog/${item.path}`}
                          className="card-text"
                          style={{
                            color: "black",
                            fontSize:isMobile ? "14px" : "16px",
                            fontWeight: "500",
                          }}
                        >
                          Read More
                        </Link>
                      </p>
                      {/*  <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p> */}
 
                      <Author
                      author = {item.author}
                      authorImg = {item.authorImg}
                      date = {item.date}
                      title = {item.title}
                      />
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

export default Showitems;
