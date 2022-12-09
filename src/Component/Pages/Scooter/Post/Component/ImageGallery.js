import React, { useEffect, useState } from 'react'
import { FaImages } from 'react-icons/fa'
import { useMediaQuery } from 'react-responsive'
const ImageGallery = (props) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })


  const [showData , setShowData] = useState([])

  useEffect(() => {
    setShowData(props.galleryData);
  }, [props.galleryData])

  return (
    <>
      <div className=" " style={{
        background: "linear-gradient(to right,#f32c89,#730be2)",
        borderRadius: "10px",

      }}>


        <div className='bg-dark  ' style={{
          width: "100%",
          height: "45px" ,
          borderRadius:"10px 10px 0px 0px",

          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
        }}>
          <FaImages style={{
            /*     display: inline-block;
        background: linear-gradient(to right,#f32c89,#730be2);
        width: 52px;
        height: 52px; */
            display: "inline-block",
            background: "linear-gradient(to right,#f32c89,#730be2)",
            borderRadius: "50%",
            width: "52px",
            height: "40px",
          }} />
          <h2 className="text-center text-white" style={{
            display: "inline-block",
            paddingLeft: "10px",
          }}>Image Gallery</h2>
        </div>
        <div className="row d-flex justify-content-center" style={{ 
          padding: "10px",
          // background: linear-gradient(to right,#f32c89,#f32c89,#5d05f1); 
        }}>
          {showData.map((item,index) => {
            return (
              <>
                <div className="col-md-4 col-lg-4 col-xs-6 col-6 d-md-flex align-items-md-stretch " style={{
                  margin: "0px -10px"
                }} key = {index} 
                >
                  <div className="card" style={{
                    width: "100%",
                    height: isMobile ? "150px" : "250px", 
                    borderRadius: "10px",
                  }}>
                    <img src={item} className="h-100 " alt={props.title} style={{
                      // height:isMobile ? "150px" : "250px",
                    }} />

                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
 
export default ImageGallery