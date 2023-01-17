import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BlogsData } from "./BlogsData";
import ReactMarkdown from "react-markdown";
import ReactGA from "react-ga4";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "./CSS/BlogPost.css";
import { useMediaQuery } from "react-responsive";
import Seo from "../../SEO/Seo";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Author from "./Component/Author/Author";
import Sharethispage from "./Component/ShareThisPage/Sharethispage";
const BlogPost = () => {
  const { blogpost } = useParams();

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [readTime, setReadTime] = useState(1);
  const [postContent, setPostcontent] = useState("");

  const blog = BlogsData.filter((blog) => blog.path === blogpost);
  const urlParam = `/blog/${blogpost}`;
  const fullUrl = `https://evstart.netlify.app${urlParam}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    import(`./MarkdownFile/${blogpost}.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err));
    });
    const text = postContent;
    const wordsPerMinute = 200;
    const noOfWords = text.split(/\s/g).length; // split by space
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes); // round up
    setReadTime(readTime);
  }, [blog, blogpost, postContent]);

  return (
    <>
      {/* add seo */}
      <Seo
        title={blog[0]?.title}
        description={postContent.slice(0, 150)}
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
                <div className="d-flex justify-content-center mt-3">
                  <p
                    className=""
                    style={{
                      fontSize: isMobile ? "13px" : "15px",
                    }}
                  >
                    {readTime} min read
                  </p>
                </div>
              </div>

              <h1
                className="text-start "
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: isMobile ? "20px" : "40px",
                  textAlign: "justify",
                }}
              >
                {blog[0]?.title}
              </h1>

              <Sharethispage url={fullUrl} desc={postContent.slice(0, 150)} />

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
                  children={postContent}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]} // for html in md
                  linkTarget="_blank"
                  //  lazy load image
                  components={{
                    img: ({ node, ...props }) => (
                      <LazyLoadImage
                        src={props.src}
                        alt={props.alt}
                        effect="blur"
                        className="img-fluid"
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
              <hr />
              <Sharethispage url={fullUrl} desc={postContent.slice(0, 150)} />
              <hr />
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
