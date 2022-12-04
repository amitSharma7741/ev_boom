import React, { useEffect, useState } from 'react'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


const EmiCalaculator = (props) => {

    const [value, setValue] = useState(30000)
    const [month, setMonth] = useState(3)
    const [interest, setInterest] = useState(8.5) 
    const [emi, setEmi] = useState(1000)
    const [toalInterest, setToalInterest] = useState(0)
    const [finalPrice, setFinalPrice] = useState(0)

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
        setToalInterest(( perMonthEmi * month *12 ).toFixed(0))
        setFinalPrice((remaining + ( perMonthEmi * month *12 )).toFixed(0))
    }, [value, month, interest, props.price])

      const chartValue = (toalInterest / finalPrice)*100;
    const state = {
        labels: [ 'Total Interest', 'Principl Loan Amount' ],
        datasets: [
            {
                label: 'Percentage',
                backgroundColor: [
                    // '#B21F00',
                    '#7F8BF3',
                    '#E6E3FF' 
                ],
                hoverBackgroundColor: [
                    // '#501800',
                    '#4B5000',
                    '#175000' 
                ],
                data: [chartValue, 100-chartValue]
            }
        ]
    
    }

        const styles = {
            rightInput: {
                float: "right",
                width: "4rem",
                height: "2rem",
                padding: "0.2rem ",
                textAlign: "center"
            },
            textBox: {
                padding: "18px 0",
                textAlign: "center",
                borderBottom: "1px dotted #DBDAD7"
            },
            textH4: {
                color: "#888",
                fontSize: "14px",
                lineHeight: "20px",
                margin: "0 auto",
                padding: "0"
            },
            textP: {
                fontSize: "24px",
                lineHeight: "36px",
                fontWeight: "700",
                color: "#000000"
            }

        }


        return (
            <>
                <div className='conatiner mt-3'>
                    <div className='row d-flex  justify-content-center '>
                        <div className='col-lg-4 col-md-6 d-flex mt-3 justify-content-center    text-center'>
                            <div className="card w-100"  >
                                <h5 className="card-title bg-dark text-white">
                                    EMI Calculator
                                </h5>
                                <div className="card-body">

                                    <div className="card-text mb-5">
                                        <label htmlFor="price" className='float-start'>Down Payment:</label>
                                        <input type="text" id="price" name="price"
                                        value={value}
                                        onChange={({ target: { value: radius } }) => {
                                            setValue(radius)
                                        }}
                                            style={styles.rightInput} />

                                        <input 
                                            type="range"
                                            min={10000}
                                            max={props.price.replace(/,/g, '')}
                                            className="slider w-100"
                                            id="myRange"
                                            default={value}
                                            value={value}
                                            onChange={({ target: { value: radius } }) => {
                                                setValue(radius)
                                            }}
                                        />
                                        <div className='float-start'>₹ 10000</div>
                                        <div className='float-end'>₹ {props.price.replace(/,/g, '')}</div>

                                    </div>


                                    <div className="card-text mb-5">
                                        <label htmlFor="price" className='float-start'>Loan Tenure:</label>
                                        <input type="text" id="price" name="price"
                                        value={month}
                                        onChange={({ target: { value: radius } }) => {
                                            setMonth(radius)
                                        }}
                                            style={styles.rightInput} />

                                        <input
                                           type="range"
                                           min={1}
                                           max={5}
                                           step={1}
                                           value={month}
                                           className="slider w-100"
                                           id="myRange"
                                           default={month}
                                           onChange={({ target: { value: radius } }) => {
                                               setMonth(radius)
                                           }}
                                        />
                                        <div className='float-start'>1 yrs</div>
                                        <div className='float-end'>5 yrs</div>
                                    </div>
                                    <div className="card-text ">
                                        <label htmlFor="price" className='float-start'>Interest Rate: </label>
                                        <input type="text" id="price" name="price"
                                        value={interest}
                                        onChange={({ target: { value: radius } }) => {
                                            setInterest(radius)
                                        }}
                                            style={styles.rightInput} />

                                        <input
                                             type="range"
                                             min={7}
                                             max={15}
                                             step={0.5}
                                             value={interest}
                                             className="slider w-100"
                                             id="myRange"
                                             default={interest}
                                             onChange={({ target: { value: radius } }) => {
                                                 setInterest(radius)
                                             }}
                                        />
                                        <div className='float-start'>7%</div>
                                        <div className='float-end'>15%</div>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center'>
                            <div className="card w-100"  >
                                <div style={styles.textBox}>
                                    <h5 style={styles.textH4}> Loan Amount</h5>
                                    <p style={styles.textP}>
                                        ₹ {props.price.replace(/,/g, '') - value}
                                    </p>
                                </div>
                                <div style={styles.textBox}>
                                    <h5 style={styles.textH4}> Loan Emi</h5>
                                    <p style={styles.textP}>
                                        Rs. {emi}
                                    </p>
                                </div>
                                <div style={styles.textBox}>
                                    <h5 style={styles.textH4}> Total Interest Payable</h5>
                                    <p style={styles.textP}>
                                        Rs.  {toalInterest}
                                    </p>
                                </div>
                                <div style={styles.textBox}>
                                    <h5 style={styles.textH4}>Total of Payments
                                        (Principal + Interest)</h5>
                                    <p style={styles.textP}>
                                        Rs. {finalPrice}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 d-flex mt-3 justify-content-center   text-center'>
                            <div className="card w-100 d-flex justify-content-center align-items-center"  >
                                <Chart type='pie' data={state}
                                    options={{
                                        title: {
                                            display: true,
                                            text: 'Average Rainfall per month',
                                            fontSize: 20
                                        },
                                        legend: {
                                            display: true,
                                            position: 'right'
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }


/* 

 <div className="row pt-3" style={{ border: '1px solid #E6E6E6', boxSizing: 'border-box', boxShadow: '0px 1px 2px rgba(129, 126, 126, 0.2)', borderRadius: 4 }}>
                <div className="col-12 col-md-8 nopad-mob">
                    <div className="outer_div pb-0" style={{
                        minHeight: "100px",
                        paddingTop: "15px",
                        marginBottom: "2px"
                    }}>
                        <div className="inner_div row" style={{

                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            paddingLeft: '10px',
                            position: 'relative'

                        }}>

                            <label htmlFor="myRange">Petrol price / litre (INR) </label>
                            <input type="number"
                                className="form-control"
                                style={styles.rightInput}
                                value={52} />
                            <input
                                type="range"
                                min={70}
                                max={150}
                                step={1}
                                default={50}
                                value={50}
                                className="slider w-100"
                                id="myRange"


                            />
                            /*  <div className="col-9 col-md-9 pl-0 sip-2" style={{
                                fontSize: '16px',
                                color: '#777777',
                                fontFamily: 'CircularXXSub-Book,sans-serif !important',
                            }}>Monthly Investment</div>
                            <div className="col-md-3 pl-0 col-3 mobile-pad-right slider_box pt-2 pb-2">
                                <input className="text_input w-100 pr-1" onkeydown="limit(this);" style={{
                                    textAlign: 'right', 
                                    height: "35px",
                                    
                                }} maxLength={6} autoComplete="off" id="textValue" onkeyup="setWattValue()" placeholder={10000} oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
                            </div>
                            <div className="col-md-12 mt-3 pl-0 space col-12 mobile-pad-right">
                                <input defaultValue={10000} min={500} max={100000} step={500} type="range" className="col-12 pr-0 pl-0" id="watts" list="steplist" />
                                <span id="showValue" className="hide-span" style={{ left: 32 }}>5000</span>
                            </div> */
/*  <div className="col-md-12 col-12 mt-2 pl-0 mobile-pad-right">
     <div className="row">
         <div className="col-md-6 col-6 pl-0">
             <small className="sip-2-labell">₹ 500</small>
         </div>
         <div className="col-md-6 col-6 pr-0">
             <small className="sip-2-labell right-float">₹ 1,00,000</small>
         </div>
     </div>
 </div>
</div>
</div>
<div className="outer_div pb-0">
<div className="inner_div row">
 <div className="col-9 pl-0 col-md-9 sip-2">Expected Return Rate (p.a)</div>
 <div className="col-md-3 pl-0 col-3 mobile-pad-right slider_box pt-2 pb-2">
     <input className="text_input w-100 pr-1" style={{ textAlign: 'right' }} maxLength={4} id="textValue2" autoComplete="off" onkeyup="setVoltValue()" placeholder={12} oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
 </div>
 <div className="col-md-12 mt-3 space pl-0 col-12 w-100 mobile-pad-right">
     <input defaultValue={12} min={1} max={30} step="0.1" type="range" className="col-12 pr-0 pl-0" id="volts" list="steplist" />
     <span id="showValue2" className="hide-span">1</span>
 </div>
 <div className="col-md-12 col-12 mt-2 pl-0 mobile-pad-right">
     <div className="row">
         <div className="col-md-6 col-6 pl-0">
             <small className="sip-2-labell">1%</small>
         </div>
         <div className="col-md-6 col-6 pr-0">
             <small className="sip-2-labell right-float">30%</small>
         </div>
     </div>
 </div>
</div>
</div> */
/*   <div className="outer_div pb-0">
      <div className="inner_div row">
          <div className="col-9 pl-0 col-md-9 sip-2">Time Period (in years)</div>
          <div className="col-md-3 pl-0 col-3 mobile-pad-right slider_box pt-2 pb-2">
              <input className="text_input w-100 pr-1" style={{ textAlign: 'right' }} maxLength={2} id="textValue3" autoComplete="off" onkeyup="setYearValue()" placeholder={10} oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
          </div>
          <div className="col-md-12 mt-3 space pl-0 col-12 w-100 mobile-pad-right">
              <input defaultValue={10} min={1} max={30} step={1} type="range" className="col-12 pr-0 pl-0" id="years" list="steplist" />
              <span id="showValue3" className="hide-span">1</span>
          </div>
          <div className="col-md-12 col-12 mt-2 pl-0 mobile-pad-right">
              <div className="row">
                  <div className="col-md-6 col-6 pl-0">
                      <small className="sip-2-labell">1 yr</small>
                  </div>
                  <div className="col-md-6 col-6 pr-0">
                      <small className="sip-2-labell right-float">30 yrs</small>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>
<div className="col-md-4 pl-0 pr-0 hide">
  <div className="row" style={{ position: 'relative', top: 22 }}>
      <div className="col-md-1" />
      <div className="col-md-5 pl-0 pr-0">
          <span className="blue-chip" /><small className="sip-2-label">Investment Amount</small>
      </div>
      <div className="col-md-5 pr-0">
          <span className="blue-chip-1" /><small className="sip-2-label">Maturity Value</small>
      </div>
      <div className="col-md-1" />
  </div>
  <canvas id="myChart" className="p-4" style={{ position: 'relative', top: 20, boxSizing: 'border-box', display: 'block', height: '326.4px', width: '327.2px' }} width={409} height={408} />
</div>
<div className="row reverse">
  <div className="col-md-4 p-0">
      <div className="showing">
          <div className="row" style={{ position: 'relative', top: 22 }}>
              <div className="col-6">
                  <span className="blue-chip" /><small className="sip-2-label">Investment Amount</small>
              </div>
              <div className="col-6">
                  <span className="blue-chip-1" /><small className="sip-2-label">Estimated Profits</small>
              </div>
          </div>
      </div>
      <div className="showing">
          <canvas id="myChart1" className="p-4" style={{ position: 'relative', top: 20, boxSizing: 'border-box', display: 'block', height: 0, width: 0 }} width={0} height={0} />
      </div>
  </div>
  <div className>
      <div className="outer_div outer_div2 row mb-0 mt-3" style={{ position: 'relative', backgroundColor: '#F2F2FF' }}>
          <div className="col-6 col-md-3 pl-0 pr-0">
              <div className="sip-2">Investment Amount</div>
              <div className="display_result" id="showInvested">₹ 6,00,000</div>
          </div>
          <div className="col-6 col-md-3 pl-0 pr-0">
              <div className="sip-2">Estimated Profits</div>
              <div className="display_result_green" id="showReturn">₹ 5,61,695</div>
          </div>
          <div className="col-6 col-md-3 pl-0 pr-0 space">
              <div className="sip-2">Total Value</div>
              <div className="display_result" id="showAmps">₹ 11,61,695</div>
          </div>
      </div>
  </div>
  
  </div>
</div>
  */

export default EmiCalaculator