import React, { useEffect, useState } from 'react'
import "./CSS/EmiCalaculator.css"
const EmiCalaculator = (props) => {

    const [value, setValue] = useState(30000)
    const [month, setMonth] = useState(3)
    const [interest, setInterest] = useState(8.5) 
    const [emi, setEmi] = useState(1000)
    const [toalInterest, setToalInterest] = useState(0)

    useEffect(() => {
        // calaculate per month emi 
        // [P x R x (1+R)^N]/[(1+R)^N-1]
        //  props price return 1,30,000 but we want 130000
        // const price = props.price.replace(/,/g, '')
        // console.log(props.price.replace(/,/g, ''))
        const remaining = props.price.replace(/,/g, '') - value
        const rate = interest / 100 / 12
        const time = month * 12
        const perMonthEmi = (remaining * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1)

        // let emi = (value * interest * Math.pow(1 + interest, month)) / (Math.pow(1 + interest, month) - 1)
        // emi value only integer
        setEmi(perMonthEmi.toFixed(0))
        setToalInterest((remaining-  perMonthEmi * month ).toFixed(0))
    }, [value, month, interest, props.price])

    return (
        <>
            <div className=" ">

                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-6">
                            <div className="card-body">
                                <h1 className="card-title">
                                    Emi Calculator
                                </h1>
                                <div className="card-text">
                                    <p>
                                        Ex-Showroom Price: <span className="text-danger">₹ {props.price}</span>
                                    </p>

                                </div>
                                <div className="card-text">
                                    <input
                                        type="range"
                                        min={10000}
                                        max={props.price.replace(/,/g, '')}
                                        className="slider"
                                        id="myRange"
                                        default={value}
                                        value={value}
                                        onChange={({ target: { value: radius } }) => {
                                            setValue(radius)
                                        }}
                                    />
                                    <p>Down Payment:  {value}</p>

                                </div>
                                <div className="card-text">
                                    <input
                                        type="range"
                                        min={1}
                                        max={5}
                                        step={1}
                                        value={month}
                                        className="slider"
                                        id="myRange"
                                        default={month}
                                        onChange={({ target: { value: radius } }) => {
                                            setMonth(radius)
                                        }}
                                    />
                                    <p>Loan Tenure:  {month} Years</p>


                                </div>
                                <div className="card-text">
                                    <input
                                        type="range"
                                        min={7}
                                        max={15}
                                        step={0.5}
                                        value={interest}
                                        className="slider"
                                        id="myRange"
                                        default={interest}
                                        onChange={({ target: { value: radius } }) => {
                                            setInterest(radius)
                                        }}
                                    />
                                    <p>Interest Rate:  {interest}%</p>
                                </div>
                                <div className="card-text">
                                    <p>EMI: {emi}</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6   d-flex align-items-center justify-content-center" style={{
                            backgroundImage: `url("https://static.autox.com/uploads/2021/11/Ola-Electric-S1-ProFront-Three-Quarter-Motion.jpg")`,
                            height: "300px"
                        }}>

                            <div className='row rounded shadow mx-5  rightSide bg-white'>
                                <p className='text-center ' >
                                    <span>Your EMI</span>
                                </p>
                                <h4 className='text-center'>
                                    <span>₹</span>
                                    {emi}
                                    <span> / Month</span>
                                </h4>
                                <div className='row text-center'>
                                
                                    <span>Total Interest Payable</span>
                                    <span>₹ {toalInterest}</span>
                                    
                                    
                                
                                </div>
                                <div className='row text-center'> 
                                    <span>Total Amount Payable</span>
                                    <span>₹ 1,00,000</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default EmiCalaculator