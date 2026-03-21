import { useState, useEffect } from "react";
import "./hero.css";
import bg from "../../assets/MW.JPG";
import { introTitles, introBio, introName } from "../../data/intro";

const Hero: React.FC = () => {
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
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Hero;
