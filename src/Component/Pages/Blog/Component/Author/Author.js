import React from "react";
import { Link } from "react-router-dom";

const Author = (props) => {
  const authorName = props.author;
  const authorImg = props.authorImg;
  const date = props.date;
  const title = props.title;
  return (
    <>
      <div
        className=" mb-2 mt-2 "
        style={{
          display: "flex",
          alignItems: "start",
        }}
      >
        <div
          className=""
          style={{
            paddingRight: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/scooter">
            <img
              className=" "
              src={authorImg}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
              }}
              alt={title}
            />
          </Link>
        </div>
        <div className="">
          <Link
            to="/scooter"
            className=""
            style={{
              fontWeight: "bold",
              color: "brown",
            }}
          >
            {authorName}
          </Link>
          <div
            className=""
            style={{
              fontSize: "12px",
              color: "gray",
            }}
          >
            Posted on {date}
          </div>
        </div>
      </div>
    </>
  );
};

export default Author;
