import React from 'react'
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center">


                    <div className="card mb-3" style={{ maxWidth: 540 }}
                        onClick={() => navigate("/blog/1")}
                        >
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
                </div>
                
                <div className="d-flex justify-content-center">


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
                </div>
                
                <div className="d-flex justify-content-center">


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
                </div>
                

            </div>
        </>
    )
}
// suggest a image link

export default AllBlogs