import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ReactGA from 'react-ga';

function Blog() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
        window.scrollTo(0, 0)
    }, [])

    return (

        <div class="container">
            <h1 className="text-center mt-5 " style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "50px"

            }}>Blog page</h1>

            <div className="row mt-5">
                <div className="col-12 col-md-8 col-lg-8">
                    <Outlet />
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center" style={{
                   
                }}>
                    <div className="card w-100  text-white" style={{
                        height:"300px",
                        maxWidth:"350px",
                        borderRadius:"20px",

                    }}>
                        <img src="https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg" className="card-img h-100" alt="ola s1 pro"  style={{
                            borderRadius:"20px",
                        }}/>
                        <div className="card-img-overlay d-flex justify-content-center">
                            <h5 className="card-title" style={{
                                fontWeight:"800",
                                fontSize:"20px",
                                color:"white",
                                marginTop:"230px",
                                backgroundColor:"black",
                                padding:"0 10px",
                                borderRadius:"10px"

                            }}>
                                Ola S1 Pro
                            </h5>
                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text">Last updated 3 mins ago</p> */}
                        </div>
                    </div>


                 {/*    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>

                        </div>

                    </div> */}
                </div>
            </div>
        </div>

    );
}

export default Blog;