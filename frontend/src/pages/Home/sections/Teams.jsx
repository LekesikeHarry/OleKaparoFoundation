import React from "react";
import "../homeStyles/teams.css";
import { teamMembers } from "../../../data";

const Teams = () => {
  return (
    <section className="teamsSection">
      <div className="teamsHeader">
        <h3>Our Team </h3>
        <span
          style={{
            fontWeight: "lighter",
            color: "lightgray",
            fontSize: "20px",
          }}
        >
          &#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;&#9473;
        </span>{" "}
      </div>
      <div className="teamsInnerContainer">
        <div className="teamLists">
          {teamMembers.map((item) => {
            return (
              <>
                <div className="teamItem" key={item.id}>
                  <div className="imgContainer">
                    <img
                      src={item.profileImg}
                      alt="team-image"
                      loading="lazy"
                    />
                  </div>
                  <hr />
                  <p className="name">{item.name}</p>
                  <p
                    style={{
                      color: "#219D80",
                      fontWeight: "400",
                    }}
                  >
                    {item.designation}
                  </p>
                  <hr />
                </div>
                <hr className="separator" />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Teams;
