import React from 'react'
import scooter from "../../Databse/ScooterData.json"
// import { useMediaQuery } from 'react-responsive'
const ImageCarousel = () => {
    const data = scooter.find((item) => item.id === 1)



    return (
        <>
            <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                style={{
                    maxHeight: "350px",
                }}
            >
                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                        <img src="https://bd.gaadicdn.com/processedimages/tvs/iqube-electric/494X300/iqube-electric63368c7e20470.jpg?imwidth=400&impolicy=resize" className="d-block w-100" alt="..." />
                    </div> */}
                    {data.gallery.map((item,index) => {
                        return (
                            <>
                                <div className={index ===0 ? "carousel-item active":"carousel-item"} key={item}>
                                    <img src={item} className="d-block w-100" alt="..." />
                                </div>
                            </>
                        )})}
                    
                 {/*    <div className="carousel-item">
                        <img src="https://bd.gaadicdn.com/processedimages/tvs/iqube-electric/494X300/iqube-electric63368c7ea0ee9.jpg?imwidth=400&impolicy=resize" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://bd.gaadicdn.com/processedimages/tvs/iqube-electric/494X300/iqube-electric6285bdf0e536a.jpg?tr=w-290" className="d-block w-100" alt="..." />
                    </div> */}
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default ImageCarousel