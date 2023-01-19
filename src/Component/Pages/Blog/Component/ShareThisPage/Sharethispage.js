import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaWhatsapp, FaTwitter, FaLink } from "react-icons/fa";
import { SiGooglenews } from "react-icons/si";
import { ExternalLink } from "react-external-link";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sharethispage = (props) => {
  const url = props.url;
  const desc = props.desc;

  const twitterUrl = `https://twitter.com/share?url=${desc}....\n\n${url}`;
  const whatsAppUrl = `whatsapp://send?text=${desc}.....\n\n${url}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const googleNewsUrl = "https://news.google.com/publications/CAAqBwgKMKSXxwsw17LeAw?hl=en-IN&gl=IN&ceid=IN:en";
  return (
    <>
      <div className="d-flex justify-content-center mt-3">
        <div className="d-flex align-items-center ">
          {/*  social media icons */}
          <div>
            <FaLink style={{ 
              color: "black", 
              fontSize: "15px",
              cursor: "pointer",
              }} 
               onClick={() => {
                navigator.clipboard.writeText(url);
                toast.success("Link Copied to Clipboard", {
                  position: "top-center",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }} 
              />
              
            <ExternalLink href={facebookUrl}>
              <MdFacebook
                style={{
                  color: "blue",
                  fontSize: "20px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              />
            </ExternalLink>
            <ExternalLink href={whatsAppUrl}>
              <FaWhatsapp
                style={{
                  color: "green",
                  fontSize: "20px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
              />
            </ExternalLink>
            <ExternalLink href={twitterUrl}>
              <FaTwitter
                style={{
                  color: "blue",
                  fontSize: "20px",
                  margin: "0 10px",
                  cursor: "pointer",
                }}
              />
            </ExternalLink>
          </div>
        </div>
        <div className="d-flex align-items-center ">
          <ExternalLink href={googleNewsUrl}>
            <div
              style={{
                border: "1px solid black",
                borderRadius: "15px",
                padding: "3px 4px",
                background: "rgba(80,171,241,.2)",
              }}
            >
              <SiGooglenews
                style={{
                  color: "blue",
                  fontSize: "15px",
                }}
              />{" "}
              <span
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "15px",
                }}
              >
                Follow Us
              </span>
            </div>
          </ExternalLink>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Sharethispage;
