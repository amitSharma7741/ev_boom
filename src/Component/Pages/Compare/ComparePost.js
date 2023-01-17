import React from "react";
import { useParams } from "react-router-dom";
import Seo from "../../SEO/Seo";
import FirstVal from "./Component/FirstVal";
import scooter from "../../Databse/ScooterData.json";
import ErrorPage from "../ErrorPage/ErrorPage";

const ComparePost = () => {
  const { comparePost } = useParams();
  //  if comparePost not contain vs then redirect to 404 page
  
  if (!comparePost.includes("vs")) {
    return (
      <>
      <ErrorPage />
      </>
    )
  }
  //  compare post value would be like benling-aura-vs-hero-vida-v1
  const val = comparePost.replace(/-/g, " ");
  //  we want vs before value nad after value
  const firstVal = val.slice(0, val.indexOf(" vs"));
  //  capital first letter
  const finalFirst = firstVal.charAt(0).toUpperCase() + firstVal.slice(1); 
  //  in this path we have two vs word  eg = /tvs-iqube-electric-vs-ampere-magnus-ex
  //  so we want second vs word 
var secondVal;
  if (val.slice(0,3)==="tvs") {
     secondVal = val.slice(22);
  } else {
    secondVal = val.slice(val.indexOf("vs") + 2);
  }
  const finalSecond = secondVal.charAt(0).toUpperCase() + secondVal.slice(1);

  const title = `${finalFirst} vs ${finalSecond}  - Know which is better - Evstart`;
  const description = `Compare ${finalFirst} vs ${finalSecond} latest prices, reviews, features, specs, mileage, images, colours, variants, performance, safety, ownership, pros and cons, and more.`;
  

  const firstData = scooter.filter(
    (item) => item.scootername.toLowerCase() === firstVal.trim()
  );
  const secondData = scooter.filter(
    (item) => item.scootername.toLowerCase() === secondVal.trim()
  );

  const showData = [
    {
      id: 1,
      name: "Price",
      value: [firstData[0]?.price, secondData[0]?.price],
    },
    {
      id: 2,
      name: "Top Speed",
      value: [firstData[0].topSpeed, secondData[0].topSpeed],
    },
    {
      id: 3,
      name: "Range Per Charge",
      value: [firstData[0].araiRange, secondData[0].araiRange],
    },
    {
      id: 4,
      name: "Battery Capacity",
      value: [firstData[0].batteryCapacity, secondData[0].batteryCapacity],
    },
    {
      id: 5,
      name: "Charging Time",
      value: [firstData[0].chargingTime, secondData[0].chargingTime],
    },
  ];
 

  
  return (
    <>
      <Seo
        title={title}
        description={description}
        image="https://bd.gaadicdn.com/processedimages/ather-energy/450x/source/450x62d8d78a1ede1.jpg"
        url={`/compare/${comparePost}`}
      />

      <div className=" ">
        <h4
          className="text-center my-5 animate-charcter"
          
        >
          Compare {finalFirst} and {finalSecond}
        </h4>

        <div className="container">
          <table className="table table-bordered table-striped">
            <thead className="position-sticky "
              style={{
                /*   background: "antiquewhite",
                border: "1px solid #ddd",
                boxShadow: "0 0 10px rgba(0,0,0,.2)", */

                /*  border-radius: 50px;
background: linear-gradient(315deg, #cacaca, #f0f0f0);
box-shadow:  -20px -20px 60px #bebebe,
             20px 20px 60px #ffffff; */
                //  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              <tr>
                <th></th>
                <th>
                  <div className="d-flex justify-content-center">
                    <div
                      className="card"
                      style={{
                        maxWidth: "18rem",
                      }}
                    >
                      <img
                        src={firstData[0].image}
                        alt={firstData[0].scootername}
                        className="img-fluid"
                        style={{
                            height: "200px",
                            width: "200px",


                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{finalFirst}</h5>
                      </div>
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-center">
                    <div
                      className="card"
                      style={{
                        maxWidth: "18rem",
                      }}
                    >
                      <img
                        src={secondData[0].image}
                        alt={secondData[0].scootername}
                        className="img-fluid"
                        style={{
                            height: "200px",
                            width: "200px",
                            

                        }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{finalSecond}</h5>
                      </div>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {showData.map((item) => {
                return (
                  <>
                    <tr key={item.id}>
                      <td>
                        <h6>{item.name}</h6>
                      </td>
                      <td>
                        <h6>{item.value[0]}</h6>
                      </td>
                      <td>
                        <h6>{item.value[1]}</h6>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>

        <FirstVal name={firstVal.trim().replace(/ /g, "-")} />
        <FirstVal name={secondVal.trim().replace(/ /g, "-")} />
        
      </div>
    </>
  );
};

export default ComparePost;
