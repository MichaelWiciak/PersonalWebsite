import React from "react";
import "./teams.css";
import timetablex from "../../assets/timetableXLogo.png";
import hottomatodev from "../../assets/hottomatodev.png";
import lcbadminton from "../../assets/LCBC.jpeg";
import techcamp from "../../assets/techCampLogo.png";

const Teams = () => {
  return (
    <section id="teams" className="teams-container">
      <span className="teamsTitle">Teams</span>
      <span className="teamsDesc">
        The teams I was part of are:
        <br />
        - TimetableX
        <br />
        - Hot Tomato Dev Team
        <br />
        - Leeds Chinese Badminton Society
        <br />- TechCamp Course Writing Team
      </span>
      <div className="teamBars">
        <div className="teamBar">
          <img src={timetablex} alt="TimetableX" className="teamBarImg" />
          <div className="teamBarText">
            <h2>TimetableX</h2>
            <p>
              Founder of TimetableX. Third-year undergraduate computer science
              with artificial intelligence student at the University of Leeds.
            </p>
          </div>
        </div>
        <div className="teamBar">
          <img
            src={hottomatodev}
            alt="Hot Tomato Dev Team"
            className="teamBarImg"
          />
          <div className="teamBarText">
            <h2>Hot Tomato Dev Team</h2>
            <p>Hot Tomato Dev Team</p>
          </div>
        </div>
        <div className="teamBar">
          <img
            src={lcbadminton}
            alt="Leeds Chinese Badminton Society"
            className="teamBarImg"
          />
          <div className="teamBarText">
            <h2>Leeds Chinese Badminton Society</h2>
            <p>Leeds Chinese Badminton Society</p>
          </div>
        </div>
        <div className="teamBar">
          <img
            src={techcamp}
            alt="TechCamp Course Writing Team"
            className="teamBarImg"
          />
          <div className="teamBarText">
            <h2>TechCamp Course Writing Team</h2>
            <p>TechCamp Course Writing Team</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
