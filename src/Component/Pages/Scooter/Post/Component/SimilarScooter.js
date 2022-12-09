import React from 'react'
import { Link } from 'react-router-dom'
import scooter from "../../Databse/ScooterData.json"
const SimilarScooter = (props) => {

    const valData = scooter.find((item) => item.path === props.name)

    const showData = [
        {
            id: 1,
            value: scooter.filter((item) => item.scootername === valData.similarScooter[0])
        },
        {
            id: 2,
            value: scooter.filter((item) => item.scootername === valData.similarScooter[1])
        },
        {
            id: 3,
            value: scooter.filter((item) => item.scootername === valData.similarScooter[2])
        }
    ]
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12 d-md-flex align-items-md-stretch">
                        <div className="count-box py-5">
                            <h1 className='text-center'>
                                Similar Scooter to {props.name.replace(/-/g, " ")}
                            </h1>
                            <div className="row d-flex justify-content-center ">
                                {/* add three top scooter card */}
                                {showData.map((item) => {
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center" key={item.id}>
                                                <div className="card" style={{ width: '18rem' }}>
                                                    <img src={item.value[0].image} className="card-img-top" alt={item.value[0].company} />
                                                    <div className="card-body">
                                                        <Link to={`/scooter/${item.value[0].path}`}  >

                                                            <h5 className="card-title">
                                                                {item.value[0].scootername}
                                                            </h5>
                                                        </Link>


                                                        <div className="card-text" style={{
                                                            fontWeight: "700",
                                                            fontSize: "20px",
                                                        }}>

                                                            <span>&#8377;</span> {item.value[0].price}
                                                            <div style={{
                                                                fontSize: "10px",
                                                                color: "grey",
                                                                display: "inline-block",
                                                                lineHeight: "0px",
                                                                marginLeft: "5px"
                                                            }}>Estimated Price</div>
                                                        </div>

                                                        <p className="card-text text-black">
                                                            {item.value[0].oneLine}
                                                        </p>
                                                        <Link to={`/scooter/${item.value[0].path}`} className="btn btn-primary">
                                                            Know More
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}


                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default SimilarScooter