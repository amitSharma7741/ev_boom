import React from 'react'
import scooter from "../../Databse/ScooterData.json"

import "./Style.css"

const FourSpecification = (props) => {

    const data = scooter.find((item) => item.path === props.path)

    const showData = [
        {
            id: 1,
            name: "Top Speed",
            value: data.topSpeed,
            color: "backTopSpeed"
        },
        {
            id: 2,
            name: "Range/Full Charge",
            value: data.araiRange,
            color: "backRange"
        },
        {
            id: 3,
            name: "Battery",
            value: data.batteryCapacity,
            color: "backBattery"
        },
        {
            id: 4,
            name: "Charging Time",
            value: data.chargingTime,
            color: "backCharging"
        }

    ]
    return (
        <>
            {showData.map((item) => {
                return (
                    <div className="col-lg-3  p-3 col-md-5 col-6 d-md-flex align-items-md-stretch" key={item.id}  >
                        <div className='box' id={item.color} style={{
                            borderRadius: "10px",
                            height: "100px",
                            width: "100%",
                            overflowWrap: "break-word"
                        }} >
                            
                            <p className='d-flex pt-4 justify-content-center'> <b>{item.name} </b></p>
                           
                            
                            <p className='d-flex  justify-content-center'><b>{item.value} </b></p> 
                        </div>

                    </div>
                )
            })}

            {/*   <div className="col-lg-3 col-md-5 col-6 d-md-flex align-items-md-stretch">
                <div className="count-box py-5">
                    {" "}
                    <i className="bi bi-journal-richtext" />{" "}
                    <span
                        data-purecounter-start={0}
                        data-purecounter-end={85}
                        className="purecounter"
                        data-purecounter-duration={0}
                    >
                        85
                    </span>
                    <p>{data.batteryCapacity}</p>
                </div>
            </div> */}
        </>
    )
}

export default FourSpecification