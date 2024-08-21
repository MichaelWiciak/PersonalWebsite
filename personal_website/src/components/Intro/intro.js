import React from "react";
import "./intro.css";
import bg from "../../assets/MW.JPG";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  const redirectToWebsite = () => {
    window.location.href = "https://www.linkedin.com/in/michael-wiciak1/";
  };
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Michael Wiciak</span> <br /> Software
          Engineer
        </span>
        <p className="introPara">
          I'm dedicated to excelling as a versatile software engineer,
          <br />
          with a strong grasp of both software and hardware,
          <br />
          complemented by business management skills.
        </p>
        <Link>
          <button className="btn" onClick={redirectToWebsite}>
            <img src={btnImg} alt="Hire Me Image" className="btnImg" />
            Hire Me
          </button>{" "}
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
