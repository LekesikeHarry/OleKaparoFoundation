import React from "react";
import "./BlogContent.css";
import { Link } from "react-router-dom";
const BlogSideBar = () => {
  return (
    <div className="contentSideBar">
      <div className="recentsPost">
        <div className="headContainer">
          <h4> Recent Posts</h4>
          <span style={{ color: "#219D80", fontSize: "10px" }}>
            &#9473;&#9473;&#9473;&#9473;
          </span>
        </div>
        <div className="recents">
          <Link className="recentPost">
            <div className="recentImgContainer">
              <img
                src="https://images.pexels.com/photos/7315906/pexels-photo-7315906.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="post-image"
                loading="lazy"
              />
            </div>
            <div className="details">
              <h5>Charity, Expectations vs. Reality</h5>
              <span>Homeless</span>
            </div>
          </Link>
          <Link className="recentPost">
            <div className="recentImgContainer">
              <img
                src="https://images.pexels.com/photos/7315906/pexels-photo-7315906.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="post-image"
                loading="lazy"
              />
            </div>
            <div className="details">
              <h5>Charity, Expectations vs. Reality</h5>
              <span>Homeless</span>
            </div>
          </Link>
          <Link className="recentPost">
            <div className="recentImgContainer">
              <img
                src="https://images.pexels.com/photos/7315906/pexels-photo-7315906.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="post-image"
                loading="lazy"
              />
            </div>
            <div className="details">
              <h5>Charity, Expectations vs. Reality</h5>
              <span>Homeless</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="categoriesContainer">
        <div className="headContainer">
          <h4>Categories</h4>
          <span style={{ color: "#219D80" }}>&#9473;&#9473;&#9473;&#9473;</span>
        </div>

        <ul className="categs">
          <Link>
            Education <span>(3)</span>
          </Link>
          <hr />
          <Link>
            Food <span>(3)</span>
          </Link>
          <hr />
          <Link>
            Medical <span>(3)</span>
          </Link>
          <hr />
          <Link>
            Home <span>(3)</span>
          </Link>
          <hr />
          <Link>
            Water <span>(3)</span>
          </Link>
          <hr />
        </ul>
      </div>

      <div className="popularTags">
        <div className="headContainer">
          <h4> Recent Posts</h4>
          <span style={{ color: "#219D80" }}>&#9473;&#9473;&#9473;&#9473;</span>
        </div>
        <ul className="tags">
          <Link className="primaryButton">Food</Link>
          <Link className="primaryButton">Food</Link>
          <Link className="primaryButton">Food</Link>
          <Link className="primaryButton">Food</Link>
          <Link className="primaryButton">Food</Link>
          <Link className="primaryButton">Food</Link>
        </ul>
      </div>
    </div>
  );
};

export default BlogSideBar;
