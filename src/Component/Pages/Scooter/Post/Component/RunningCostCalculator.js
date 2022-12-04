import React, { useEffect, useState } from 'react'
// import "./CSS/RunningCostCalculator.css"
import { useMediaQuery } from 'react-responsive'
const RunningCostCalculator = () => {

    const isMobile = useMediaQuery({
        // screen width is less than 768px or greater than 450px
        query: '(max-width: 950px) and (min-width: 450px)' 
    })
    const isSmallMobile = useMediaQuery({
        query: '(max-width: 450px)'
    })
    // eslint-disable-next-line
    const [pDistPerDay, setpDistPerDay] = useState(50)
    const [pCostPerLtr, setpCostPerLtr] = useState(100)
    const [pYear, setpYear] = useState(2)
    const [pFinalCost, setpFinalCost] = useState(0)


    // for electric 
    const [eDistPerDay, seteDistPerDay] = useState(50)
    const [eCostPerUnit, seteCostPerUnit] = useState(10);
    const [eYear, seteYear] = useState(2);
    const [eFinalCost, seteFinalCost] = useState(0);
    useEffect(() => {

        const perYearDist = pDistPerDay * 365 * pYear;
        const perYearCost = perYearDist * pCostPerLtr
        const finalCost = perYearCost / 40;

        setpFinalCost(finalCost.toFixed(0))
        console.log(finalCost)


        // electric
        const electricPerYearDist = eDistPerDay * 365 * eYear;
        const electricPerYearCost = electricPerYearDist * eCostPerUnit
        const electricFinalCost = electricPerYearCost / 40;

        seteFinalCost(electricFinalCost.toFixed(0))

    }, [pDistPerDay, pCostPerLtr, pYear, eDistPerDay, eCostPerUnit, eYear])

    const styles = {
        rightInput: {
            float: "right",
            width: isMobile || isSmallMobile ? "2rem" : "4rem",
            height: "2rem",
            padding: "0.2rem ",
            textAlign: "center",
            fontSize:isMobile || isSmallMobile ? "0.8rem"  : "1rem",
        },
        labelText: {
            fontSize: isMobile ? "11px" : isSmallMobile ? "8px" : "14px",
            fontWeight: "700",
        }

    }
    return (
        <>
            <div className='mt-5'>
                <h2 className='  text-black '>Running Cost Calculator</h2>

                <div className="card mb-3"  >
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center ">
                            <img src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg" className="img-fluid rounded-start h-100" alt="iage" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-md-6 col-xs-6 col-6" style={{
                                        backgroundColor: ""
                                    }}>
                                        <p className='text-center text-black '>
                                            Petrol cost Calculator
                                        </p>
                                        <div className="card-text">
                                            <label htmlFor="myRange " style={styles.labelText}>Petrol price / litre (INR) </label>
                                            <input type="number"
                                                className="form-control"
                                                style={styles.rightInput}
                                                value={pCostPerLtr}

                                                onChange={({ target: { value: radius } }) => {
                                                    setpYear(radius)
                                                }} />
                                            <input
                                                type="range"
                                                min={70}
                                                max={150}
                                                step={1}
                                                default={pCostPerLtr}
                                                value={pCostPerLtr}
                                                className="slider w-100"
                                                id="myRange"
                                                onChange={({ target: { value: radius } }) => {
                                                    setpCostPerLtr(radius)
                                                }}

                                            />
                                        </div>
                                        <div className="card-text">
                                            <label htmlFor="myRange " style={styles.labelText}>Number of Years</label>
                                            <input type="number"
                                                className="form-control"
                                                style={styles.rightInput}
                                                value={pYear}

                                                onChange={({ target: { value: radius } }) => {
                                                    setpYear(radius)
                                                }} />
                                            <input
                                                type="range"
                                                min={1}
                                                max={5}
                                                step={1}
                                                default={pYear}
                                                value={pYear}
                                                className="slider w-100"
                                                id="myRange"
                                                onChange={({ target: { value: radius } }) => {
                                                    setpYear(radius)
                                                }}

                                            />
                                        </div>


                                        <div className="card-text">
                                            <label htmlFor="myRange " style={styles.labelText}>
                                                Distance / day (KM)
                                            </label>
                                            <input type="number"
                                                className="form-control"
                                                style={styles.rightInput}
                                                value={pDistPerDay}

                                                onChange={({ target: { value: radius } }) => {
                                                    setpDistPerDay(radius)
                                                }} />
                                            <input
                                                type="range"
                                                min={1}
                                                max={500}
                                                step={1}
                                                default={pDistPerDay}
                                                value={pDistPerDay}
                                                id="myRange"
                                                className="slider w-100"
                                                onChange={({ target: { value: radius } }) => {
                                                    setpDistPerDay(radius)
                                                }}

                                            />
                                        </div>
                                        <p  style={{
                                            fontSize:"9px",
                                            color:"rgb(136, 136, 136)"
                                        }}>
                                            Note : 1 litre petrol = 40 km
                                        </p>
                                        <h6 className=''>
                                            Petrol Cost &#8377; {pFinalCost}
                                        </h6>

                                    </div>
                                    <div className="col-md-6  col-xs-6 col-6"  >
                                        <p className='text-center text-black'>
                                            Electric cost Calculator
                                        </p>
                                        <div className="card-text">
                                            <label htmlFor="myRange " style={styles.labelText}>Electricity  price / unit </label>
                                            <input type="number"

                                                className="form-control"
                                                style={styles.rightInput}
                                                value={eCostPerUnit}

                                                onChange={({ target: { value: radius } }) => {
                                                    seteCostPerUnit(radius)
                                                }} />
                                            <input
                                                type="range"
                                                min={5}
                                                max={13}
                                                step={1}
                                                default={eCostPerUnit}
                                                value={eCostPerUnit}
                                                className="slider w-100"
                                                id="myRange"
                                                onChange={({ target: { value: radius } }) => {
                                                    seteCostPerUnit(radius)
                                                }}
                                            />
                                        </div>
                                        <div className="card-text">
                                            <label htmlFor="myRange " style={styles.labelText}>Number of Years</label>
                                            <input type="number"

                                                className="form-control"
                                                style={styles.rightInput}
                                                value={eYear}

                                                onChange={({ target: { value: radius } }) => {
                                                    seteYear(radius)
                                                }} />
                                            <input
                                                type="range"
                                                min={1}
                                                max={5}
                                                step={1}
                                                default={eYear}
                                                value={eYear}
                                                className="slider w-100"
                                                id="myRange"
                                                onChange={({ target: { value: radius } }) => {
                                                    seteYear(radius)
                                                }}
                                            />
                                        </div>
                                        <div className="card-text">
                                            <label htmlFor="myRange " style={styles.labelText}>Distance / day (KM) </label>
                                            <input type="number"

                                                className="form-control"
                                                style={styles.rightInput}
                                                value={eDistPerDay}

                                                onChange={({ target: { value: radius } }) => {
                                                    seteDistPerDay(radius)
                                                }} />
                                            <input
                                                type="range"
                                                min={1}
                                                max={500}
                                                step={1}
                                                default={eDistPerDay}
                                                value={eDistPerDay}
                                                className="slider w-100"
                                                id="myRange"
                                                onChange={({ target: { value: radius } }) => {
                                                    seteDistPerDay(radius)
                                                }}
                                            />
                                        </div>
                                        <p  style={{
                                            fontSize:"9px",
                                            color:"rgb(136, 136, 136)"
                                        }}>
                                            Note : 1  unit electricity = 40 km
                                        </p>
                                        <h6 className=''>
                                            Electric Cost &#8377;  {eFinalCost}
                                        </h6>
                                    </div>
                                </div>
                                
                            </div>
                            <p className='text-center text-black ' style={{
                                    fontSize: '15px',
                                    fontWeight: 'bold',
                                    // background: aliceblue;
                                    background: 'aliceblue',
                                }}>
                                    Electric Scooter Save <span style={{
                                        color: 'green',
                                        fontSize: '20px',


                                    }}>
                                        &#8377; {pFinalCost - eFinalCost}
                                    </span>  in {eYear} years
                                </p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default RunningCostCalculator