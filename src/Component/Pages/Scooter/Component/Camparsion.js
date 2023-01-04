import React from "react";
import { useNavigate } from "react-router-dom";
import scooter from "../Databse/ScooterData.json";
// imprt react-responsive
import { useMediaQuery } from "react-responsive";
const Camparsion = () => {
  const navigate = useNavigate();
  // http://localhost:3000/scooter/ola-s1-pro we want to get ola-s1-pro

  const currentPath = window.location.pathname.split("/")[2];
  const currentScooter = scooter.filter((item) => item.path === currentPath);
 
  const otherScoter = scooter.filter((item) => item.path !== currentPath);
  const oddScoter = otherScoter.filter((item, index) => index % 2 === 0);

  //  we want to check rating of product if rating 4.5 we want to show 4 full starts and one half start and if rating 4.0 we want to show 4 full starts
  // FaStar is full star
  // FaStarHalfAlt is half star
  // FaRegStar is empty star
  const rating = (rating) => {
    const fullStar = Math.floor(rating);
    const halfStar = Math.ceil(rating - fullStar);
    const emptyStar = 5 - fullStar - halfStar;
    const fullStarArray = Array(fullStar).fill("FaStar");
    const halfStarArray = Array(halfStar).fill("FaStarHalfAlt");
    const emptyStarArray = Array(emptyStar).fill("FaRegStar");
    const starArray = [...fullStarArray, ...halfStarArray, ...emptyStarArray];
    return starArray;
  };
  // console.log(rating(4.5));

  const isMobile = useMediaQuery({
    query: `(max-width:750px)`,
  });

  const showData = [
    {
      id: 1,
      name: currentScooter[0].scootername,
      value: currentScooter[0],
    },
    {
      id: 2,
      name: oddScoter[0].scootername,
      value: oddScoter[0],
    },
    {
      id: 3,
      name: oddScoter[1].scootername,
      value: oddScoter[1],
    },
    {
      id: 4,
      name: oddScoter[2].scootername,
      value: oddScoter[2],
    },
  ];
  return (
    <>
      <div className="table-responsive mt-5 shadow p-3 mb-5 bg-body rounded">
        <h1 className=" ">Compare with similar Scooter</h1>
        <table className="table table-striped text-successtable-border border-light ">
          <thead className="border-light">
            <tr>
              <th scope="col" />
              {showData.map((item) => {
                return (
                  <th
                    scope="col"
                    key={item.id}
                    onClick={() => {
                      navigate(`/scooter/${item.value.path}`);
                      window.scrollTo(0, 0);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={item.value.image}
                      className="w-100"
                      alt={item.value.scootername}
                      style={{
                        height: isMobile ? "100px" : "150px",
                      }}
                    />
                    <h5
                      className="text-center mt-2"
                      style={{
                        fontSize: isMobile ? "10px" : "20px",
                        color: "blue",
                        textDecoration: "underline",
                      }}
                    >
                      {item.name}
                    </h5>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Top Speed</th>
              {showData.map((item, index) => {
                return (
                  <td
                    key={item.id}
                    style={{
                      backgroundColor: index === 0 ? "bisque" : "",
                      fontWeight: "600",
                    }}
                  >
                    {item.value.topSpeed}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th scope="row">Price</th>
              {showData.map((item) => {
                return (
                  <td
                    key={item.id}
                    style={{
                      color: "#B12704",
                      fontWeight: "bold",
                    }}
                  >
                    ₹{item.value.price}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th scope="row">Range/Full charge</th>
              {showData.map((item, index) => {
                return (
                  <td
                    key={item.id}
                    style={{
                      backgroundColor: index === 0 ? "bisque" : "",
                      fontWeight: "600",
                    }}
                  >
                    {item.value.araiRange}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th scope="row">Battery</th>
              {showData.map((item) => {
                return (
                  <td
                    key={item.id}
                    style={{
                      color: "#007185",
                      fontWeight: "bold",
                    }}
                  >
                    {item.value.batteryCapacity}
                  </td>
                );
              })}
            </tr>
            <tr>
              <th scope="row">Reviews</th>
              {showData.map((item, index) => {
                return (
                  <td
                    key={item.id}
                    style={{
                      backgroundColor: index === 0 ? "bisque" : "",
                      fontWeight: "600",
                    }}
                  >
                    {rating(item.value.rating).map((item, index) => {
                      return (
                        <i className={item} key={index} style={{ color: "gold" }} />
                      );
                    })}
                    {item.value.rating}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Camparsion;
