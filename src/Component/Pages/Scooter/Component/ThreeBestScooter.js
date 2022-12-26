import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import scooter from "../Databse/ScooterData.json"
const ThreeBestScooter = () => {

    const navigate = useNavigate();
    return (
        <>
            {scooter.slice(0,3).map((item) => {
                return (
                    <div className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center" key={item.id}>
                        <div className="card shadow  mb-5 bg-body rounded" style={{ width: '18rem' }} 
                        onClick={()=>{
                            navigate(`/scooter/${item.path}`)
                        }}
                        >
                            <img src={item.image} className="card-img-top" alt={item.company}
                                style={{
                                    height: "180px"
                                }} />
                            <div className="card-body" style={{ 
                                // aad liner gradient
                                 
                            }}>
                                <h5 className="card-title">
                                    {item.scootername}
                                </h5>
                               
                                <p className="card-text text-black" style={{
                                    fontWeight: "bold",
                                    fontSize: "20px"
                                }}>
                                   Rs.  {item.price}
                                </p>
                                <Link to={`/scooter/${item.path}`} className="btn btn-primary">View More</Link> 
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default ThreeBestScooter