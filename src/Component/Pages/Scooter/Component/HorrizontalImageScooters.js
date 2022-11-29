import React  from 'react'
import { FaAngleLeft, FaAngleRight  } from 'react-icons/fa'
import "./CSS/HorrizontalImageScooters.css"
// import { useState, useRef } from "react";
const HorrizontalImageScooters = () => {
//    show button when horizantal scroll is done
   /*  const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [showRightBtn, setShowRightBtn] = useState(false);

    const scrollRef = useRef(null);

    const handleLeftBtn = () => {
        scrollRef.current.scrollLeft -= 200;
    };
    const handleRightBtn = () => {
        scrollRef.current.scrollLeft += 200;
    };

    const handleScroll = (e) => {
        const { scrollWidth, clientWidth, scrollLeft } = e.target;
        if (scrollLeft > 0) {
            setShowLeftBtn(true);
        } else {
            setShowLeftBtn(false);
        }
        if (scrollLeft + clientWidth < scrollWidth) {
            setShowRightBtn(true);
        } else {
            setShowRightBtn(false);
        }
    };

    useEffect(() => {
        //  TypeError: Cannot read properties of null (reading 'addEventListener')
        // solve this error by using useRef


        scrollRef.current.addEventListener('scroll', handleScroll);
    }, [scrollRef]); */

    const showData = [
        {
            id: 1,
            imageUrl: " https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
            name: "Ola S1",
            price: "Rs. 99,999"

        },
        {
            id: 2,
            imageUrl: "http://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRX42AsvJz2kqHvnYClHiZdw",
            name: "vida va",
            price: "Rs. 99,999"
        },
        {
            id: 3,
            imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
            name: "beaches",
            price: "Rs. 99,999"

        },
        {
            id: 4,
            imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
            name: "beaches",
            price: "Rs. 99,999"
        },
        {
            id: 5,
            imageUrl: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp",
            name: "beaches",
            price: "Rs. 99,999"
        }
    ]
    return (
        <>

            <div className="container mt-5">
                
                <div className=" " style={{
                    overflowX: "scroll",
                    overflowY: "hidden",
                    whiteSpace: "nowrap",
                    scrollBehavior: "smooth"
                }}>
                    {/* CARD 1*/}
                    {showData.map((item) => {
                        return (
                            <>
                                <div className="topBox" key={item.id}>
                                    <div className="img-topBox">
                                        <img src={item.imageUrl} alt="javohir" />
                                    </div>
                                    <div className="content">
                                        <h2> {item.name}
                                            <br /><span>Javohir Berdiyev</span></h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod perferendis blanditiis ab? Nulla voluptate deleniti eius hic, perferendis.</p>

                                    </div>
                                </div>
                            </>
                        )
                    })}
 
                        <button className='scrollBtn showLeft' style={{
                         
                        }}
                            // onClick = {handleLeftBtn}
                        >
                            <FaAngleLeft />
                        </button>
 
                    {/* arrow in right side */}
                  
                        <button className='scrollBtn showRight' style={{
                           
                        }}
                            // onClick= {handleRightBtn}
                        >
                            <FaAngleRight />
                        </button>
                   
                </div>
            </div>


            {/* <div className="topBox" >
                <div className="img-topBox">
                    <img src="http://i.mycdn.me/i?r=AyH4iRPQ2q0otWIFepML2LxRX42AsvJz2kqHvnYClHiZdw" alt="javohir" />
                </div>
                <div className="content">
                    <h2>Someone Famous <br /><span>Javohir Berdiyev</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod perferendis blanditiis ab? Nulla voluptate deleniti eius hic, perferendis.</p>

                </div>
            </div> */}

        </>
    )
}

export default HorrizontalImageScooters 