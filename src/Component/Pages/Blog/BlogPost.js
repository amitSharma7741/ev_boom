import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsData } from "./BlogsData";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./CSS/BlogPost.css";
import { useMediaQuery } from "react-responsive";
import Seo from "../../SEO/Seo";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Author from "./Component/Author/Author";
import { MdFacebook } from "react-icons/md"
import { FaWhatsapp, FaTwitter } from "react-icons/fa"
import { SiGooglenews } from "react-icons/si"
import { ExternalLink } from 'react-external-link';
import { Player } from "@lottiefiles/react-lottie-player";
const BlogPost = () => {
  const { blogpost } = useParams();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [readTime, setReadTime] = useState(1);

  const blog = BlogsData.filter((blog) => blog.path === blogpost);
  const urlParam = `/blog/${blogpost}`;
  const fullUrl = `https://evstart.netlify.app${urlParam}`

  const twitterUrl = `https://twitter.com/share?url=${fullUrl}`
  const whatsAppUrl = `whatsapp://send?text=${blog[0]?.description.slice(0, 150)}.....\n\n${fullUrl}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`
  const googleNewsUrl = ""



  useEffect(() => {
    window.scrollTo(0, 0);
    const text = blog[0]?.description;
    const wordsPerMinute = 200;
    const noOfWords = text.split(/\s/g).length; // split by space
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes); // round up
    setReadTime(readTime);
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

  }, [blog]);

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
        <div className=" shadow-sm mb-5 bg-body rounded">
          <div className="  ">
            <LazyLoadImage
              src={blog[0]?.img}
              className="img-fluid w-100"
              alt={blog[0].title}
              effect="blur"
              style={{
                borderRadius: "5px 5px 0 0",
              }}
            />
            <div
              style={{
                padding: "10px 20px",
              }}
            >
              <div className="d-flex justify-content-between">
                <div>

              <Author
                author={blog[0]?.author}
                authorImg={blog[0]?.authorImg}
                date={blog[0]?.date}
                title={blog[0]?.title}
              />
                </div>
                <div className="d-flex justify-content-center mt-3" >
                  <Player
                  src = "https://assets8.lottiefiles.com/packages/lf20_kblbXu.json"
                  autoplay
                  loop
                  speed={0.5}
                  style={{
                    width:"20px",
                    height:"20px"
                  }}
/>
                <p className="" style={{fontSize:"16px"}}>{readTime} min read</p>
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
              <div className="d-flex justify-content-center mt-3">
                <div className="d-flex align-items-center ">
                  {/*  social media icons */}
                  <div>
                    <ExternalLink href={facebookUrl}>

                      <MdFacebook style={{
                        color: "blue",
                        fontSize: "30px",
                        cursor: "pointer"
                      }}

                      />
                    </ExternalLink>
                    <ExternalLink href={whatsAppUrl}>
                      <FaWhatsapp style={{
                        color: "green",
                        fontSize: "30px",
                        marginLeft: "10px",
                        cursor: "pointer"
                      }}
                      />
                    </ExternalLink>
                    <ExternalLink href={twitterUrl}>
                      <FaTwitter style={{
                        color: "blue",
                        fontSize: "30px",
                        margin: "0 10px",
                        cursor: "pointer"
                      }}
                      />
                    </ExternalLink>
                  </div>
                </div>
                <div className="d-flex align-items-center ">
                  <ExternalLink href={googleNewsUrl}>
                    <div style={{
                      border: "1px solid black",
                      borderRadius: "15px",
                      padding: "5px 6px",
                      background: "rgba(80,171,241,.2)",

                    }} >
                      <SiGooglenews style={{
                        color: "blue",
                        fontSize: "20px"
                      }} /> <span style={{ 
                        textDecoration: "none", color: "black" }}>Follow Us</span>
                    </div>
                  </ExternalLink>
                </div>

              </div>


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
                  linkTarget="_blank"
                  //  lazy load image
                  components={{
                    img: ({ node, ...props }) => (
                      <LazyLoadImage
                        src={props.src}
                        alt={props.alt}
                        effect="blur"
                      />
                    ),
                    // blackquote tag style text wrap
                    blockquote: ({ node, ...props }) => (
                      <blockquote
                        className="blockquote"
                        style={{
                          borderLeft: "5px solid #007bff",
                          padding: "10px 20px",
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "15px",
                          textAlign: "justify",
                        }}
                      >
                        {props.children}
                      </blockquote>
                    ),
                  }}
                />
              </div>
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
