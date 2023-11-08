import React from "react";
import "../workPageStyles/content.css";

import BlogContent from "../../../components/blogContent/BlogContent";
import BlogSideBar from "../../../components/blogContent/BlogSideBar";
const Content = ({ data }) => {
  return (
    <div className="contentContainer">
      <section className="left">
        <BlogContent data={data} />
      </section>
      <section className="right">
        <BlogSideBar />
      </section>
    </div>
  );
};

export default Content;
