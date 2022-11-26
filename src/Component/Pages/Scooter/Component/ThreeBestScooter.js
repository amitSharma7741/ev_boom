import React from 'react'
import scooter from "../Databse/ScooterData.json"
const ThreeBestScooter = () => {

    return (
        <>
            {scooter.slice(0,3).map((item) => {
                return (
                    <div className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center" key={item.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={item.image} className="card-img-top" alt={item.company}
                                style={{
                                    height: "180px"
                                }} />
                            <div className="card-body" style={{
                                backgroundColor: "rgb(238, 238, 238)"
                            }}>
                                <h5 className="card-title">
                                    {item.scootername}
                                </h5>
                                <p className="card-text">
                                    {item.company}
                                </p>
                                <p className="card-text">
                                    {item.price}
                                </p>
                                <a href="/" className="btn btn-primary">View More</a>
                            </div>
                        </div>
                    </div>
                )

            })}
        </>
    )
}

export default ThreeBestScooter