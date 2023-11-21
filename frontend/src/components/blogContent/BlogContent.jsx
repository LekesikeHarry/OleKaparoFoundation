import React from "react";
// import Testimonials from "../../Home/sections/Testimonials";
import AuthorIcon from "../../assets/author-icon.svg";
import DateIcon from "../../assets/calendar-icon.svg";
import clockIcon from "../../assets/clock-1.svg";
import "../../pages/OurWorks/workPageStyles/content.css";
const BlogContent = ({ data }) => {
  return (
    <>
      <div className="blogImageContainer">
        <h2>{data.title}</h2>
        <img src={data.image} alt="blog-image" loading="lazy" />
        <div className="blogDetailsTop">
          <div className="iconsContainer">
            <img src={AuthorIcon} alt="" className="icon" />
            <p
              style={{
                color: "#999",
                fontWeight: "500",
                fontFamily: "Montserrat",
                fontSize: "14px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {data.author.username}
            </p>
          </div>
          <div className="iconsContainer">
            <img src={DateIcon} alt="" className="icon" />

            <p
              style={{
                color: "#999",
                fontWeight: "500",
                fontFamily: "Montserrat",
                fontSize: "14px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {new Date(data.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="iconsContainer">
            <img src={clockIcon} alt="" className="icon" />
            <p
              style={{
                color: "#999",
                fontWeight: "500",
                fontFamily: "Montserrat",
                fontSize: "14px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              10 Min Read
            </p>
          </div>
        </div>
      </div>
      <div className="blogDetailsContainer">
        <div className="subSection">
          <h4>{data.title}</h4>
          <p dangerouslySetInnerHTML={{__html:data.content}}/>
        </div>
        {/* <Testimonials /> */}
       
      </div>
    </>
  );
};

export default BlogContent;
