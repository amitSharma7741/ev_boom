import React, { useState, useEffect } from "react";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const Calculate = () => {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [roi, setRoi] = useState(8.5);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [Interest, setInterest] = useState(0); 
  
//  convert string to number
const total = Number(loanAmount) + Number(Interest);  
  const showValues = [
    {
      id: 1,
      name: "Loan Amount",
      useStateValue:  loanAmount,
      setUseStateValue: setLoanAmount,
      min: 50000,
      max: 5000000,
      step: 1000,
    },
    {
      id: 2,
      name: "Rate of Interest",
      useStateValue: roi,
      setUseStateValue: setRoi,
      min: 6,
      max: 20,
      step: 0.1,
    },
    {
      id: 3,
      name: "Loan Tenure",
      useStateValue: tenure,
      setUseStateValue: setTenure,
      min: 0,
      max: 20,
      step: 1,
    },
  ];

  const state = {
    labels: [" Interest", "Principal Amount"],
    datasets: [
      {
        label: "Percentage",
        backgroundColor: [
          // '#B21F00',
          "#7F8BF3",
          "#E6E3FF",
        ],
        hoverBackgroundColor: [
          // '#501800',
          "#4B5000",
          "#175000",
        ],
        data: [Interest, loanAmount],
      },
    ],
  };

  const styles = {
    labelText: {
      float: "left",
      fontSize: "14px",
      fontWeight: "600",
      color: "#000",
    },
    rightInput: {
      float: "right",
      width: "50%",
      height: "30px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      padding: "5px",
      fontSize: "14px",
      fontWeight: "600",
      color: "#000",
      textAlign: "center",
    },
    text: {
      float: "left",
    },
    pric: {
      float: "right",
    },
  };

  useEffect(() => {
    const r = roi / 12 / 100;
    const n = tenure * 12;
    const emiVal =
      (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

    setEmi(emiVal.toFixed(2));
    const interestVal = emiVal * n - loanAmount;
    setInterest(interestVal.toFixed(2)); 
  }, [loanAmount, roi, tenure, emi]);

  return (
    <>
      <div className="row  shadow"  style={{
              backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)", 
              borderRadius:"15px"

            }}>
        <div className="col-md-6 p-5 ">
          {showValues.map((item) => {
            return (
              <>
                <div key={item.id} className="mb-5">
                  <label htmlFor="myRange" style={styles.labelText}>
                    {item.name}
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    value={item.useStateValue}
                    style={styles.rightInput}
                    onChange={(e) => item.setUseStateValue(e.target.value)}
                  />
                  <input
                    type="range"
                    min={item.min}
                    max={item.max}
                    step={item.step}
                    value={item.useStateValue}
                    // defaultValue={item.useStateValue}
                    className="slider w-100"
                    id="myRange"
                    onChange={(e) => item.setUseStateValue(e.target.value)}
                  />
                </div>
              </>
            );
          })}

          <div >
            <table style={{width:"100%"}}>
              <tr>
                <th style={styles.text}>Monthly EMI</th>
                <th style={styles.pric}>₹ <span style={{color:"brown"}}>{emi}</span></th>
              </tr>
              <tr>
                <th style={styles.text}>Principal Amount</th>
                <th style={styles.pric}>₹ {loanAmount} {loanAmount.toString().length > 5 ? "L":""}</th>
              </tr>
              <tr>
                <th style={styles.text}>Total interest</th>
                <th style={styles.pric}>₹ {Interest}</th>
              </tr>
              <tr>
                <th style={styles.text}>Total Amount</th>
                <th style={styles.pric}>₹ {total}</th>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-md-6 py-5">
          <Chart
            type="pie"
            data={state}
            options={{
              title: {
                display: true,
                text: "EMI Breakup",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Calculate;
