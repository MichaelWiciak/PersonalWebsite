import "./about.css";
import { aboutData, additionalSkills } from "../../data/about";

const About: React.FC = () => {
  return (
    <section id="about">
      <span className="skillsTitle">About Me</span>
      <span className="skillDesc">
        {aboutData.description}
        <br />
        <br />I have co-founded the platforms{" "}
        <a
          href={aboutData.links[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="introName"
        >
          {aboutData.links[0].text}
        </a>{" "}
        and{" "}
        <a
          href={aboutData.links[1].url}
          target="_blank"
          rel="noopener noreferrer"
          className="introName"
        >
          {aboutData.links[1].text}
        </a>
        .
        <br />
        <br />
        {additionalSkills}
        <br />
      </span>
    </section>
  );
};

export default About;
