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
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="card" style={{ width: "18rem" }}>
                        <img src="https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/" className="btn btn-primary">Go somewhere</a>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Blog;