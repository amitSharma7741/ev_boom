import React from 'react'
import { FaImages } from 'react-icons/fa'
const ImageGallery = () => {


  const showData = [
    {
      id: 1,
      image: 'https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2018/09/search-by-image-mac.jpg?resize=660%2C430&ssl=1',
      title: 'Title 1'
    },
    {
      id: 2,
      image: ' https://static.toiimg.com/thumb/msid-93094501,imgsize-896134,width-1000,height-562,resizemode-8/93094501.jpg',
      title: 'Title 2'
    },
    {
      id: 3,
      image: "https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Families.jpg",
      title: 'Title 3'
    },
    {
      id: 4,
      image: 'https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2018/09/search-by-image-mac.jpg?resize=660%2C430&ssl=1',
      title: 'Title 4'
    },
    {
      id: 5,
      image: ' https://static.toiimg.com/thumb/msid-93094501,imgsize-896134,width-1000,height-562,resizemode-8/93094501.jpg',
      title: 'Title 5'
    },
    {
      id: 6,
      image: "https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Families.jpg",
      title: 'Title 6'
    }
  ]
  return (
    <>
      <div className=" " style={{
        background: "linear-gradient(to right,#f32c89,#730be2)",
      }}>


        <div className='bg-dark  ' style={{
          width: "100%",
          height: "45px" 
        }}>
          <FaImages style={{
            /*     display: inline-block;
        background: linear-gradient(to right,#f32c89,#730be2);
        width: 52px;
        height: 52px; */
            display: "inline-block",
            background: "linear-gradient(to right,#f32c89,#730be2)",
            width: "52px",
            height: "45px",
          }} />
          <h6 className="text-center text-white" style={{
            display: "inline-block",
            paddingLeft: "10px",
          }}>Image Gallery</h6>
        </div>
        <div className="row d-flex justify-content-center" style={{ 
          padding: "10px",
          // background: linear-gradient(to right,#f32c89,#f32c89,#5d05f1); 
        }}>
          {showData.map((item) => {
            return (
              <>
                <div className="col-md-4 col-lg-4 col-xs-3 col-4 d-md-flex align-items-md-stretch " style={{
                  margin: "0px -10px"
                }}>
                  <div className="card" style={{
                    width: "100%",
                    height: "250px", 
                    borderRadius: "10px",
                  }}>
                    <img src={item.image} className=" h-100" alt="..." />

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