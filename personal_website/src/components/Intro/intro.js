import React, { useState, useEffect } from "react";
import "./intro.css";
import bg from "../../assets/MW.JPG";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const titles = [
  "Software Engineer",
  "Amateur Photographer",
  "Competitive Badminton Player",
  "Climber",
  "Teacher",
  "IT Support",
  "Web Developer",
  "Hardware Engineer",
  "Infrastructure Engineer",
  "DevOps Engineer",
  "Backend Developer",
  "Cloud Engineer",
  "Data Engineer",
  "Machine Learning Engineer",
  "Product Owner",
  "Solutions Architect",
  "Team Leader",
];

const Intro = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(Math.floor(Math.random() * titles.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Michael Wiciak</span> <br />
          <span className="animatedTitle">{titles[currentTitle]}</span>
        </span>
        <p className="introPara">
          I'm a software engineer who loves blending code, hardware, and a bit
          <br />
          of customer-centricity to create cool, practical solutions. At the
          same time,
          <br />I dream of seeding spinach in Sweden so take it as you will (:
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Contact me" className="btnImg" />
            Contact me
          </button>{" "}
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
