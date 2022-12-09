import React from 'react'
import "./TryHeader.css"
const TryHeader = () => {

    const isMobile = window.innerWidth <= 500;
    return (
        <>
            <div>
                {/*Hey! This is the original version
of Simple CSS Waves*/}
                <div className="header">
                    {/*Content before waves*/}
                    <div className="inner-header flex">
                        {/*Just the logo.. Don't mind this*/}
                     
                        <div className = "position-absolute" style={{
                             top: "50%",
                             left: "50%",
                             transform: "translate(-50%, -50%)",
                             color: "white",
                             textAlign: "center",
                             marginTop: isMobile ? "0" : "50px",
                            //  fontSize: "30px",
                            //  fontWeight: "bold",
                            //  textShadow: "2px 2px 4px #000000",
                            //  backgroundColor: "rgba(0, 0, 0, 0.5)",
                             padding: "20px",
                            //  borderRadius: "10px",
                             // backgroundImage: `url(${blob})`,
                            //  backgroundSize: "cover",
                            //  backgroundRepeat: "no-repeat",
                            //  backgroundPosition: "center"
                        }}>
                               <svg version="1.1" className="logo" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
                            <path fill="#FFFFFF" stroke="#000000" strokeWidth={10} strokeMiterlimit={10} d="M57,283" />
                            <g><path fill="#fff" d="M250.4,0.8C112.7,0.8,1,112.4,1,250.2c0,137.7,111.7,249.4,249.4,249.4c137.7,0,249.4-111.7,249.4-249.4C499.8,112.4,388.1,0.8,250.4,0.8z M383.8,326.3c-62,0-101.4-14.1-117.6-46.3c-17.1-34.1-2.3-75.4,13.2-104.1c-22.4,3-38.4,9.2-47.8,18.3c-11.2,10.9-13.6,26.7-16.3,45c-3.1,20.8-6.6,44.4-25.3,62.4c-19.8,19.1-51.6,26.9-100.2,24.6l1.8-39.7c35.9,1.6,59.7-2.9,70.8-13.6c8.9-8.6,11.1-22.9,13.5-39.6c6.3-42,14.8-99.4,141.4-99.4h41L333,166c-12.6,16-45.4,68.2-31.2,96.2	c9.2,18.3,41.5,25.6,91.2,24.2l1.1,39.8C390.5,326.2,387.1,326.3,383.8,326.3z" />
                            </g>
                        </svg>
                        <h1 style={{
                            fontSize: isMobile ? "30px" : "50px",
                            fontWeight: "bold",
                        }}>Electric scooters are the future of personal transportation.</h1>
                        {/* <p>
                        They're green, eco-friendly, and easy to use. The global electric scooter market is expected to grow exponentially in the years to come.
                        </p> */}
                        </div>
                    </div>
                    {/*Waves Container*/}
                    <div>
                        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                            <defs>
                                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                            </defs>
                            <g className="parallax">
                                <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                                <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                                <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                                <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                            </g>
                        </svg>
                    </div>
                    {/*Waves end*/}
                </div>
                {/*Header ends*/}
                {/*Content starts*/}
                <div className="content flex">
                    {/* <p>By.Goodkatz |&nbsp;Free to use </p> */}
                </div>
                {/*Content ends*/}
            </div>

        </>
    )
}

export default TryHeader    