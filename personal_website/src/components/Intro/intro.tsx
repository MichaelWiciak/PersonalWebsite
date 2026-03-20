import { useState, useEffect } from "react";
import "./intro.css";
import bg from "../../assets/MW.JPG";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";
import { introTitles, introBio, introName } from "../../data/intro";

const Intro: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(Math.floor(Math.random() * introTitles.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">{introName}</span> <br />
          <span className="animatedTitle">{introTitles[currentTitle]}</span>
        </span>
        <p className="introPara">{introBio}</p>
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
