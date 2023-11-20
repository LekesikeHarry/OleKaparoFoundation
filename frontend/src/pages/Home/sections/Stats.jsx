import React, { useEffect, useRef, useCallback } from "react";
import "../homeStyles/stats.css";
import PeopleRaisedIcon from "../../../assets/People-Raise-icon.svg";
import VolunteerIcon from "../../../assets/Volunteer-icon.svg";
import PoorPeopleSavedIcon from "../../../assets/Poor-People-Saved-icon.svg";
import CountryMemberIcon from "../../../assets/Country-Member-icon.svg";
const Stats = ({ data }) => {
  const highlightedSectionRef = useRef(null);

  const handleScroll = useCallback(() => {
    const highlightedSection = highlightedSectionRef.current;
    const rect = highlightedSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      highlightedSection.classList.add("animate");
    } else {
      highlightedSection.classList.remove("animate");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <section
      ref={highlightedSectionRef}
      className="statsSection highlighted-section"
    >
      {" "}
      <div className="statsTop">
        {data.title === "Our Fun Facts" ? (
          <>
            <h6>
              {data.title}{" "}
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
            <h2>{data.subTitle}</h2>
          </>
        ) : null}
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
