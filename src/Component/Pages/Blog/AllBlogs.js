import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactGa from "react-ga";
import { BlogsData } from "./BlogsData";
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';
const AllBlogs = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    //   reverse the array to show latest blogs first
     BlogsData.reverse();
    setBlogs(BlogsData); 
    //  add location to google analytics 
    ReactGa.pageview(window.location.pathname + window.location.search); 
  }, []);
  return (
    <>
      <div className="container">
        <div className="">
          {blogs.map((blog) => {
            return (
              <div
                className="card mb-3"
                style={{ maxWidth: 600,
                  cursor: "pointer", 
                  background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
                  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                  transition: "0.3s",
                  borderRadius: "5px",
                   
                }} 
                onClick={() => navigate(`/blog/${blog.path}`)}
                key={blog.Id}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={blog.img}
                      className="img-fluid rounded-start h-100"
                      alt={blog.title}  
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{blog.title}</h5>
                      <p className="card-text text-black">
                        {blog.description?.slice(0, 100)}
                      </p>
                     {/*  <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p> */}

                      <div
                        className=" mb-2 mt-2 "
                        style={{
                          display: "flex",
                          alignItems: "start",
                        }}
                      >
                        <div
                          className=""
                          style={{
                            paddingRight: "10px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Link to="/scooter">
                            <img
                              className=" "
                              src= {blog.authorImg}
                              style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%",
                              }}
                              alt={blog.title}
                            />
                          </Link>
                        </div>
                        <div className="">
                          <Link
                            to="/scooter"
                            className=""
                            style={{
                              fontWeight: "bold",
                              color: "black",
                            }}
                          >
                            {blog.author}
                          </Link>
                          <div
                            className=""
                            style={{
                              fontSize: "12px",
                              color: "gray",
                            }}
                          >
                            Posted on {blog.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/*  <div
            className="card mb-3"
            style={{ maxWidth: 540 }}
            onClick={() => navigate("/blog/1")}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src=" https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg"
                  className="img-fluid rounded-start h-100"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text text-black">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="d-flex justify-content-center">


                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src=" https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg" className="img-fluid rounded-start h-100" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

        {/*   <div className="d-flex justify-content-center">


                    <div className="card mb-3" style={{ maxWidth: 540 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src=" https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text text-black">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
    </>
  );
};
// suggest a image link

export default AllBlogs;
