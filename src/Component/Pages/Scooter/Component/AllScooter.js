import React from 'react'
import { Link  } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import scooter from "../Databse/ScooterData.json"
const AllScooter = () => {
    // const navigate = useNavigate();



    const showData = [
        {
            id: 1,
            name: "All",
            value: scooter
        },
        {
            id: 2,
            name: "Ola",
            value: scooter.filter((item) => item.company === "Ola")
        },
        {
            id: 3,
            name: "Ather",
            value: scooter.filter((item) => item.company === "Ather")
        },
        {
            id: 4,
            name: "Aura",
            value: scooter.filter((item) => item.company === "Benling")
        }
    ]

    return (
        <>
            <Tabs>
                <TabList>
                    {showData.map((item) => (
                        <Tab key={item.id} style={{
                            backgroundColor: "white",
                            color: "black",
                            margin: "10px",
                            fontWeight: "bold",
                            padding: "10px"

                        }}>{item.name}</Tab>
                    ))}
                </TabList>

                {showData.map((item) => (
                    <TabPanel key={item.id}>
                        <h2>{item.value[0].company}</h2>
                        <div className="row">
                            {item.value.map((item) => (
                                <div className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center col-6 d-md-flex align-items-md-stretch  text-center" key={item.id}>
                                    <div className="card" style={{ width: '18rem' }}>
                                        <img src={item.image} className="card-img-top" alt={item.company}
                                            style={{
                                                height: "180px"
                                            }} />
                                        <div className="card-body" style={{
                                            backgroundColor: "rgb(238, 238, 238)"
                                        }}>
                                            <Link to={`/scooter/${item.path}`} style={{
                                                textDecoration: "none",
                                                color: "black"
                                            }}>
                                            <h5 className="card-title">
                                                {item.scootername}
                                            </h5>
                                            </Link>
                                            <p className="card-text" style={{
                                                fontWeight: "500px"
                                            }}>

                                                <span>&#8377;</span> {item.price}
                                                <div style={{
                                                    fontSize: "10px",
                                                    color: "grey",
                                                    display: "inline-block",
                                                    lineHeight: "0px",
                                                    marginLeft: "5px"
                                                }}>Estimated Price</div>
                                            </p>
                                            <p className="card-text">
                                                {item.oneLine}
                                            </p>
                                            <a href="/" className="btn btn-primary">
                                                View More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/*  <div className="col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://wallpaperaccess.com/full/12324.png" className="card-img-top" alt="https://wallpaperaccess.com/full/12324.png" 
                                
                                />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="/" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div> */}
                    </TabPanel>
                ))}
            </Tabs>
        </>
    )
}

export default AllScooter