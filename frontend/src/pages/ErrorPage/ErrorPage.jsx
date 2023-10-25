import React from "react";
import "./errorpage.css";
import groupIcon from "../../assets/Group.svg";
import searchIcon from "../../assets/secrch.svg";
import search from "../../assets/searchIcon.svg"

const ErrorPage = () => {
  return (
    <div className="errorpage">
      <div>
        <p>Search for 'Hospital'</p>
      </div>
      <div>
        <img src={searchIcon} alt="" />
      </div>
      <div className="searchnotfound">
        <p>Oops! search not found</p>
      </div>
      <div>
        <p>
          Nothing matched your search criteria, please try agian with different
          keywords
        </p>
      </div>
      <div className="scontainer">
        <div className="search-container">
          <input type="text" placeholder="Type keywords" className="search-input" />
          <div className="search-icon"><img src={search} alt="" /></div>
        </div>
      </div>
      <div className="errorbutton">
        <button>Or back to HomePage</button>
      </div>
    </div>
  );
};

export default ErrorPage;
