import React from "react";
import "./skills.css";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import programminglang from "../../assets/programminglang.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle">About Me</span>
      <span className="skillDesc">
        Co-founder of TimetableX, registered under the Company Number 15186230,
        founded in 2022. It hosts and maintains timetablex.com, a scheduler app
        for students but works for any events with ical link. It offers other
        services such as website and bot creation. An example of this is
        sportsbooker.feli.page. It allows for automated booking of courts for a
        university gym (The Edge, Leeds) and allow for scheduled booking at
        specified times. MEng BSc Computer Science with Artificial Intelligence
        at the University of Leeds. Graduating in 07/2025.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={programminglang} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Programming Languages</h2>
            <p>Python, Bash, C, C++, Java, JavaScript, TypeScript</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={frontend} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Front-end Technologies</h2>
            <p>HTML5, CSS3, React</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={backend} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Back-end Technologies</h2>
            <p>
              Databases: MySQL, PostgreSQL, SQLite. Server-Side Frameworks:
              Express.js, Django. APIs: REST. Authentication and Authorisation:
              OAuth, JWT. Containers: Docker, Singularity. VM: Azure
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
