import React,{ useState,useEffect } from "react";
import Seo from "../../SEO/Seo";
import Calculate from "./Calculate";
import ReactMarkdown from "react-markdown";
import ReactGA from "react-ga4";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; 
import { useMediaQuery } from "react-responsive";
import ShowBlogs from "../Blog/Component/ShowBlogs/ShowBlogs";
const EmiCostCalculator = () => {
  const [postContent, setPostcontent] = useState("");
  const isMobile = useMediaQuery({
    query:"(max-width:767px)"
  })

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    window.scrollTo(0, 0);
    import(`./EmiCostCalculator.md`).then((res) => {
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err));
    });
  });
  return (
    <>
      <Seo
        title="EMI cost calculator | EMI for Home Loan, Car Loan & Personal Loan"
        description="Get accurate and up-to-date emi cost estimates with our easy-to-use emi cost calculator. Calculate EMI for Home Loan, Car Loan & Personal Loan"
        image="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
        url="/emi-cost-calculator"
      />

      <div
        className="container mb-5"
        style={{
          maxWidth: "1100px",
        }}
      >
        <div>
          <h1 className="text-center mt-5">
            EMI Calculator for Home Loan, Car Loan & Personal Loan in India
          </h1>

          <div className="row">
            <div className="col-md-8 px-4">
              <Calculate />
            </div>
            <div
              className= {isMobile ? "col-md-4 px-4 mt-5" :"col-md-4 px-4" }
            >
              <div style={{
                border: "1px solid #ccc", 
                borderRadius: "5px",
                backgroundColor: "#fff",
              }}>
              <img 
              src= "https://images.unsplash.com/photo-1642013138541-1d0209cca4e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNhbGN1bGF0b3J8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt = "emi cost calculator"
              className="img-fluid w-100"
              />
              </div>
              {/* for google ads */}
            </div>
          </div>

          <div
            className="boxy container mt-5"
            style={{
              maxWidth: "600px",
            }}
          >
            <ReactMarkdown
              children={postContent}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            />
          </div>
        </div>
        {/* blogs */}
       <ShowBlogs />
      {/* blogs */}
      </div>
    </>
  );
};

export default EmiCostCalculator;
