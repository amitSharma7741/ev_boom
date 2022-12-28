import React from 'react'
import Snowfall from 'react-snowfall'
const ReactSnowfall = () => {
  return (
    <>
    <div  style={{
        position: 'absolute',
        top: 0,
        left: 0, 
        // show on full screen
    //     width: '100vw',
    // height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        
    }}> 

        <Snowfall
            color="white"
            snowflakeCount={100}
            style={{zIndex: 1, position: 'fixed',
            width: '100vw',
            height: '100vh',}}
        />
    </div>

    
    </>
  )
}

export default ReactSnowfall    