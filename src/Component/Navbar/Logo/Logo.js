import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import "./Logo.css"
const Logo = () => {
    return (
        <>
            <div className="d-flex justify-content-center">



                <Player
                    autoplay
                    loop
                    src="https://assets9.lottiefiles.com/packages/lf20_0yqgdrq6.json"
                    style={{ height: '30px', width: '30px',background:"white",borderRadius:"50%" }}

                />
                {/*  <div className=" ">
                <div className="bg"> EVSTART </div>
                <div className="fg"> EVSTART </div>
            </div> */}
                <h4 className='text-white'>
                    EVSTART
                </h4>
            </div>
        </>
    )
}

export default Logo 