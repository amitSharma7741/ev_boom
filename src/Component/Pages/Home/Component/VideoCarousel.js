import React from 'react'

import "./VideoCarousel.css"


const VideoCarousel = () => {

    const showData = [
        {
            id: 1,
            title: "Agua natural",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  .",
            video: "https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4"
        },
        {
            id: 2,
            title: "Forest",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  .",
            video: "https://mdbcdn.b-cdn.net/img/video/forest.mp4"
        },
        {
            id: 3,
            title: "Tropical",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  .",
            video: "https://mdbcdn.b-cdn.net/img/video/Tropical.mp4"

        }


    ]
    return (
        <>




            {/*   */}

            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{
                marginTop: "-60px"
            }}>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">


                    {showData.map((item, index) => {
                        return (
                            <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={item.id}>
                                <video playsinline autoplay muted loop style={{
                                        minHeight: "100%",
                                        minWidth: "100%"
                                    }}>
                                    <source className='h-100' src={item.video} type="video/mp4" />
                                </video>
                                <div style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    // fontSize: "50px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    textShadow: "2px 2px 4px #000000"
                                }}>
                                    <h5>{item.title}</h5>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


 

        </>
    )
}

//  refers to the path of the file
// https://mdbootstrap.com/snippets/standard/mdbootstrap/2936391#html-tab-view
export default VideoCarousel