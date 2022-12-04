import React, { useState } from 'react'
import "./Post.css"
import { useParams } from "react-router-dom";
// how to import json file
import scooter from "../Databse/ScooterData.json"
import FourSpecification from './Component/FourSpecification'
import EmiCalaculator from './Component/EmiCalaculator'
import SimilarScooter from './Component/SimilarScooter'
import ImageCarousel from './Component/ImageCarousel'
import blob from "./Component/SVG/scooter.svg"
import RunningCostCalculator from './Component/RunningCostCalculator';
import ImageGallery from './Component/ImageGallery';
// import TryEmiCalculator from './Component/TryEmiCalculator';
const Post = () => {

    const { post } = useParams();

    const showData = scooter.filter((item) => item.path === post);
    // const realData = scooter.find((item) => item.id === 1)
    // console.log(realData)

    // add read more button in info className tag 

    const [isreadMore, setIsreadMore] = useState(true)
    const text = showData[0].shortDescription;



    return (
        <>
            {/*  <header>
            <div
                id="intro-example"
                className="p-5 text-center bg-image"
                style={{
                    backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")'
                }}
            >
                <div className="mask" style={{ backgroundimage: `url(${blob})` }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                            <h5 className="mb-4">Best &amp; free guide of responsive web design</h5>

                        </div>
                    </div>
                </div>
            </div>
            </header> */}
            <div className="header">
                <div className=" position-absolute " style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    // color: "white",
                    // textAlign: "center",
                    // fontSize: "30px",
                    // fontWeight: "bold",
                    // textShadow: "2px 2px 4px #000000",
                    // backgroundColor: "rgba(0, 0, 0, 0.5)",
                    // padding: "20px",
                    // borderRadius: "10px",
                    // backgroundImage: `url(${blob})`,
                    // backgroundSize: "cover",
                    // backgroundRepeat: "no-repeat",
                    // backgroundPosition: "center"



                }}>
                    <div className='card   text-white' style={{
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        border: "0px solid",
                    }}>
                        <img src={blob} className="card-img" alt="..." />
                        <div className="card-img-overlay  " style={{
                            display: "inline-block",
                            marginTop: "40px",
                            overflowWrap: "break-word",
                        }}>
                            <p className='text-center' style={{
                                fontSize: "30px",
                            }} >
                                {showData[0].scootername}
                            </p>
                            <p className='text-center'  >
                                {showData[0].price}
                            </p>
                        </div>
                    </div>
                    {/* <div className="text-white" > 
                        
                         
                    </div> */}
                </div>

                <img
                    className="headerImg"
                    src={showData[0].image}
                    alt=""
                />
            </div>

            <section className="section pt-0 position-relative pull-top" style={{ marginTop: "-100px" }}>
                <div className="container">
                    <div className="rounded shadow dataContainer bg-white">
                        {/*  <div className="row">
                            <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                                <i className="ti-paint-bucket text-primary h1" />
                                <h3 className="mt-4 text-capitalize h5 ">themes made easy</h3>
                                <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                                    tempore ipsam dignissimos molestias.</p>
                            </div>
                            <div className="col-lg-4 col-md-6 mt-5 mt-md-0 text-center">
                                <i className="ti-shine text-primary h1" />
                                <h3 className="mt-4 text-capitalize h5 ">powerful design</h3>
                                <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                                    tempore ipsam dignissimos molestias.</p>
                            </div>
                            <div className="col-lg-4 col-md-12 mt-5 mt-lg-0 text-center">
                                <i className="ti-thought text-primary h1" />
                                <h3 className="mt-4 text-capitalize h5 ">creative content</h3>
                                <p className="regular text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non, recusandae
                                    tempore ipsam dignissimos molestias.</p>
                                <p />
                            </div>
                        </div> */}
                        <div className="row d-flex justify-content-center">
                            {/* {scooter.map((item) => {
                                        return (
                                            <>
                                                <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch" key={item.id}>
                                                    <p>{item.topSpeed}</p>
                                                </div>
                                            </>
                                        )
                                    })} */}

                            <FourSpecification path={showData[0].path} />

                            {/* 
                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box pb-5 pt-0 pt-lg-5">
                                            {" "}
                                            <i className="bi bi-clock" />{" "}
                                            <span
                                                data-purecounter-start={0}
                                                data-purecounter-end={27}
                                                className="purecounter"
                                                data-purecounter-duration={0}
                                            >
                                                27
                                            </span>
                                            <p>Years of experience</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                                        <div className="count-box pb-5 pt-0 pt-lg-5">
                                            {" "}
                                            <i className="bi bi-award" />{" "}
                                            <span
                                                data-purecounter-start={0}
                                                data-purecounter-end={22}
                                                className="purecounter"
                                                data-purecounter-duration={0}
                                            >
                                                22
                                            </span>
                                            <p>Awards</p>
                                        </div>
                                    </div> */}

                        </div>
                        {/* short info */}
                        <div>
                            <h1>Info</h1>
                            <p className='text-black'>
                                {isreadMore ? text.slice(0, 200) : text}
                            </p>
                            <button onClick={() => setIsreadMore(!isreadMore)}>{isreadMore ? "Read More" : "Read Less"}</button>
                        </div>

                        {/* emi calculator */}
                        <div className="mt-5">
                            <EmiCalaculator price={showData[0].price} />
                        </div>



                        {/*  specification */}
                        <div className='row mt-5'>
                            <div className="col-lg-6 col-md-6 col-12">
                                <h1>Specification</h1>
                                <table className="table table-striped" style={{ maxWidth: "500px" }}>
                                    <thead>
                                        Pro Highlights
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Top Speed</td>
                                            <td>80 kmph</td>
                                        </tr>
                                        <tr>
                                            <td>Range</td>
                                            <td>80 km</td>
                                        </tr>
                                        <tr>
                                            <td>Battery</td>
                                            <td>2.5 kWh</td>
                                        </tr>
                                        <tr>
                                            <td>Charging Time</td>
                                            <td>3.5 hours</td>
                                        </tr>
                                        <tr>
                                            <td>Motor Power</td>
                                            <td>1.5 kW</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                {/* image carousel */}
                                <ImageCarousel />
                            </div>

                        </div>




                        {/* full detail */}

                        <div>
                            <h1>Full Detail</h1>
                            <p className='text-black'>
                                {isreadMore ? text.slice(0, 300) : text}
                            </p>
                            <button onClick={() => setIsreadMore(!isreadMore)}>{isreadMore ? "Read More" : "Read Less"}</button>
                        </div>


                        {/* Running Cost Calculator */}


                        <RunningCostCalculator />
                        {/* similar scooter */}
                        <SimilarScooter name="ola-s1-pro" />





                        <ImageGallery />

                        {/* try new emi calculator */}
                        {/* <TryEmiCalculator price={showData[0].price}  /> */}


                    </div>
                </div>
            </section>


        </>
    )
}

export default Post