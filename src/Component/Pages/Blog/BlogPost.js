import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BlogsData } from "./BlogsData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./CSS/BlogPost.css";
import { useMediaQuery } from "react-responsive";
import Seo from "../../SEO/Seo";
const BlogPost = () => {
  const { blogpost } = useParams();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const blog = BlogsData.filter((blog) => blog.Id === blogpost);
  const urlParam = `/blog/${blogpost}`;

  useEffect(() => {
    // window.scrollTo(0, 0);
    /*  // change table tag class name
        const table = document.querySelector("table")
        table.classList.add("table table-striped text-successtable-border border-light")
        // change threr tag class name
        const thead = document.querySelector("thead")
        thead.classList.add("border-light")
        // change  th tag  attribute scope 
        const th = document.querySelectorAll("th")
        th.forEach((item) => {
        })
        item.setAttribute("scope", "row") */
  }, []);

  return (
    <>
      {/* add seo */}
      <Seo
        title={blog[0]?.title}
        description={blog[0]?.description.slice(0, 150)}
        image={blog[0]?.img}
        url={urlParam}
      />

      {/*  */}

      <div
        className="container"
        style={{
          color: "black",
        }}
      >
        <div className="row shadow-sm mb-5 bg-body rounded">
          <div className="col-12 ">
            <img src={blog[0]?.img} className="img-fluid" alt={blog[0].title} />
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
                    src={blog[0]?.img}
                    style={{
                      width: "45px",
                      height: "45px",
                      borderRadius: "50%",
                    }}
                    alt={blog[0]?.title}
                  />
                </Link>
              </div>
              <div className="">
                <Link
                  to="/scooter"
                  className=""
                  style={{
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {blog[0]?.author}
                </Link>
                <div
                  className=""
                  style={{
                    fontSize: "12px",
                    color: "gray",
                  }}
                >
                  Posted on {blog[0]?.date}
                </div>
              </div>
            </div>
            <h1
              className="text-start "
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: isMobile ? "30px" : "40px",
                textAlign: "justify",
              }}
            >
              {blog[0]?.title}
            </h1>

            <hr />

            <div
              className="mt-5 boxy"
              style={{
                color: "black",
                // fontWeight: "bold",
                // fontSize: "20px"
              }}
            >
              <ReactMarkdown
                children={blog[0]?.description}
                remarkPlugins={[remarkGfm]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//  image adderss
// https://static.autox.com/uploads/2021/11/Ola-Electric-S1-Pro.jpg

export default BlogPost;
