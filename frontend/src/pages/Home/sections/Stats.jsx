import React, { useEffect } from "react";
import "../homeStyles/stats.css";
import PeopleRaisedIcon from "../../../assets/People-Raise-icon.svg";
import VolunteerIcon from "../../../assets/Volunteer-icon.svg";
import PoorPeopleSavedIcon from "../../../assets/Poor-People-Saved-icon.svg";
import CountryMemberIcon from "../../../assets/Country-Member-icon.svg";
const Stats = () => {
  useEffect(() => {
    const handleScroll = () => {
      const highlightedSection = document.querySelector(".highlighted-section");
      const rect = highlightedSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible) {
        highlightedSection.classList.add("animate");
      } else {
        highlightedSection.classList.remove("animate");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="statsSection highlighted-section">
      {" "}
      <div className="statsTop">
        <h6>
          Our Fun Facts{" "}
          <span
            style={{
              fontWeight: "lighter",
              color: "lightgray",
              fontSize: "20px",
            }}
          >
            &#9473;&#9473;&#9473;&#9473;
          </span>{" "}
        </h6>
        <h2>
          We Believe that We can Save <br />
          More Lifes with you
        </h2>
      </div>
      <div className="statsCardsContainer ">
        <div className="statsCard">
          <img src={PeopleRaisedIcon} alt="People-Raise-icon" loading="lazy" />
          <h1 className="statsDigits" style={{ fontFamily: "Nunito" }}>
            4597+
          </h1>
          <p className="statsText" style={{ fontFamily: "Montserrat" }}>
            People Raised
          </p>
        </div>
        <div className="statsCard">
          <img src={VolunteerIcon} alt="Volunteer-icon" loading="lazy" />
          <h1 className="statsDigits" style={{ fontFamily: "Nunito" }}>
            8945+
          </h1>
          <p className="statsText" style={{ fontFamily: "Montserrat" }}>
            Volunteer
          </p>
        </div>
        <div className="statsCard">
          <img
            src={PoorPeopleSavedIcon}
            alt="Poor-People-Saved-icon"
            loading="lazy"
          />
          <h1 className="statsDigits" style={{ fontFamily: "Nunito" }}>
            10M+
          </h1>
          <p className="statsText" style={{ fontFamily: "Montserrat" }}>
            Poor People Saved
          </p>
        </div>
        <div className="statsCard">
          <img
            src={CountryMemberIcon}
            alt="Country-Member-icon"
            loading="lazy"
          />
          <h1 className="statsDigits" style={{ fontFamily: "Nunito" }}>
            100+
          </h1>
          <p className="statsText" style={{ fontFamily: "Montserrat" }}>
            Country Member
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
