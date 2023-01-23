import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ReactGA from "react-ga4";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Seo from "../../SEO/Seo";
import "./Fuel.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { useMediaQuery } from "react-responsive";

const FuelCostCalculator = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  // eslint-disable-next-line
  const [postContent, setPostcontent] = useState("");
  const [pDistPerDay, setpDistPerDay] = useState(50);
  const [pCostPerLtr, setpCostPerLtr] = useState(100);
  const [pYear, setpYear] = useState(2);
  const [pFinalCost, setpFinalCost] = useState(0);
  const [pMilage, setpMilage] = useState(40);

  // for electric
  // const [eDistPerDay, seteDistPerDay] = useState(50)
  const [eCostPerUnit, seteCostPerUnit] = useState(10);
  // const [pYear, setpYear] = useState(2);
  const [eFinalCost, seteFinalCost] = useState(0);
  const [eMilage, seteMilage] = useState(40);

  useEffect(() => {
    const perYearDist = pDistPerDay * 365 * pYear;
    const perYearCost = perYearDist * pCostPerLtr;
    const finalCost = perYearCost / pMilage;
    //  our final cost is 125302

    setpFinalCost(finalCost.toFixed(0));
    // console.log(finalCost);

    // electric
    const electricPerYearDist = pDistPerDay * 365 * pYear;
    const electricPerYearCost = electricPerYearDist * eCostPerUnit;
    const electricFinalCost = electricPerYearCost / eMilage;

    seteFinalCost(electricFinalCost.toFixed(0));
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, [pDistPerDay, pCostPerLtr, pYear, eCostPerUnit, pMilage, eMilage]);

  useEffect(() => {
    import(`./FuelCost.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err));
    });
  });
  const styles = {
    rightInput: {
      float: "right",
      width: "90px",
      height: "30px",
      padding: "5px 15px",
      textAlign: "center",
      //   fontSize:"15px"
    },
    labelText: {
      float: "left",
      fontWeight: "bold",
    },
  };
  return (
    <>
      <Seo
        title="Fuel Cost Calculator | Petrol vs Electric cost calculator | Running Cost Calculator"
        description="Get accurate and up-to-date fuel cost estimates with our easy-to-use fuel cost calculator. Simply enter your vehicle make and model, along with your location and desired fuel type, and our calculator will provide you with an estimate of the cost to fill up your tank. Stay budget-conscious and plan your trips with confidence using our fuel cost calculator. Try it now!"
        image="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        url="/fuel-cost-calculator"
      />
      <div>
        <div
          className="container"
          style={{
            maxWidth: "1000px",
          }}
        >
          <div className="d-flex justify-content-center ">
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/packages/lf20_c21tPU/electric-car-lottie-illustradraw-download.json"
              style={{ height: "300px", width: "300px", marginTop: "-60px" }}
            />
          </div>
          <h1 className="text-center  animate-charcter">
            Fuel Cost Calculator
          </h1>

          <p
            className=" mb-5"
            style={{
              fontSize: "20px",
              textAlign: "justify",
            }}
          >
            The Fuel Cost Calculator is an invaluable tool that helps drivers to
            accurately calculate the fuel cost of their vehicle. This calculator
            can help you to optimize your fuel costs by giving you real-time
            information about the total cost of your journey. With this tool,
            drivers can effectively plan their journeys and ensure that they are
            utilizing the most cost-effective route available.
          </p>

          <div
            className="row shadow"
            style={{
              backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)", 
              padding: "20px",
            }}
          >
            <div className="col-md-6">
              <div className="card">
                <div class="card-header d-flex justify-content-center ">
                  <Player
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/private_files/lf30_mtifqxx7.json"
                    style={{ height: "50px", width: "50px" }}
                  />
                  <div
                    className="d-flex align-items-center "
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    <h5>Petrol Vehicle Cost</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-text mt-3">
                    <label htmlFor="myRange" style={styles.labelText}>
                      Petrol price / litre (INR)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={pCostPerLtr}
                      onChange={({ target: { value: radius } }) => {
                        setpYear(radius);
                      }}
                    />

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
                        setpCostPerLtr(radius);
                      }}
                    />
                  </div>
                  <div className="card-text">
                    <label htmlFor="myRange " style={styles.labelText}>
                      Number of Years
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={pYear}
                      onChange={({ target: { value: radius } }) => {
                        setpYear(radius);
                      }}
                    />
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
                        setpYear(radius);
                      }}
                    />
                  </div>
                  <div className="card-text">
                    <label htmlFor="myRange " style={styles.labelText}>
                      Distance / day (KM)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={pDistPerDay}
                      onChange={({ target: { value: radius } }) => {
                        setpDistPerDay(radius);
                      }}
                    />
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
                        setpDistPerDay(radius);
                      }}
                    />
                  </div>
                  <div className="card-text">
                    <label htmlFor="myRange " style={styles.labelText}>
                      Milage (KM/L)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={pMilage}
                      onChange={({ target: { value: radius } }) => {
                        setpMilage(radius);
                      }}
                    />
                    <input
                      type="range"
                      min={1}
                      max={100}
                      step={1}
                      default={pMilage}
                      value={pMilage}
                      id="myRange"
                      className="slider w-100"
                      onChange={({ target: { value: radius } }) => {
                        setpMilage(radius);
                      }}
                    />
                  </div>

                  <div className="card-footer">
                    Petrol final cost :{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "brown",
                      }}
                    >
                      {" "}
                      {pFinalCost} Rs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6"
              style={{
                marginTop: isMobile ? "20px" : "0px",
              }}
            >
              <div className="card">
                <div class="card-header d-flex justify-content-center ">
                  <Player
                    autoplay
                    loop
                    src="https://assets4.lottiefiles.com/packages/lf20_oiielxdi.json"
                    style={{ height: "50px", width: "50px" }}
                  />
                  <div
                    className="d-flex align-items-center "
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    <h5>Electric Vehicle Cost</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-text mt-3">
                    <label htmlFor="myRange" style={styles.labelText}>
                      Electricity price / unit
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={eCostPerUnit}
                      onChange={({ target: { value: radius } }) => {
                        seteCostPerUnit(radius);
                      }}
                    />

                    <input
                      type="range"
                      min={5}
                      max={50}
                      step={1}
                      default={eCostPerUnit}
                      value={eCostPerUnit}
                      className="slider w-100"
                      id="myRange"
                      onChange={({ target: { value: radius } }) => {
                        seteCostPerUnit(radius);
                      }}
                    />
                  </div>
                  <div className="card-text">
                    <label htmlFor="myRange " style={styles.labelText}>
                      Number of Years
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={pYear}
                      onChange={({ target: { value: radius } }) => {
                        setpYear(radius);
                      }}
                    />
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
                        setpYear(radius);
                      }}
                    />
                  </div>
                  <div className="card-text">
                    <label htmlFor="myRange " style={styles.labelText}>
                      Distance / day (KM)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={pDistPerDay}
                      onChange={({ target: { value: radius } }) => {
                        setpDistPerDay(radius);
                      }}
                    />
                    <input
                      type="range"
                      min={1}
                      max={500}
                      step={1}
                      default={pDistPerDay}
                      value={pDistPerDay}
                      className="slider w-100"
                      id="myRange"
                      onChange={({ target: { value: radius } }) => {
                        setpDistPerDay(radius);
                      }}
                    />
                  </div>
                  <div className="card-text">
                    <label htmlFor="myRange " style={styles.labelText}>
                      Milage (KM/L)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      style={styles.rightInput}
                      value={eMilage}
                      onChange={({ target: { value: radius } }) => {
                        seteMilage(radius);
                      }}
                    />
                    <input
                      type="range"
                      min={1}
                      max={100}
                      step={1}
                      default={eMilage}
                      value={eMilage}
                      className="slider w-100"
                      id="myRange"
                      onChange={({ target: { value: radius } }) => {
                        seteMilage(radius);
                      }}
                    />
                  </div>

                  <div className="card-footer">
                    Electric final cost :{" "}
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "brown",
                      }}
                    >
                      {" "}
                      {eFinalCost} Rs{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h3
                className="text-center text-black "
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  background:"#f5f5f5",
                  padding:"10px",
                  borderRadius:"15px"
                }}
              >
                Electric vehicle Save{" "}
                <span
                  style={{
                    color: "green",
                    fontSize: "25px",
                  }}
                >
                  &#8377; {pFinalCost - eFinalCost}
                </span>{" "}
                in {pYear} years
              </h3>
            </div>
          </div>
          <div className="boxy mt-5">
            <ReactMarkdown
              children={postContent}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FuelCostCalculator;
