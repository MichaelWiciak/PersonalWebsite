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
        I’m someone who loves diving into complex problems, whether it’s coding
        up a solution, tuning a machine learning model, or hacking together
        something cool for a group project.
        <br />
        <br />
        My current playground is software engineering, and I’m about to graduate
        with a degree in Computer Science with Artificial Intelligence from the
        University of Leeds.
        <br />
        <br />
        I’ve gotten hands-on with everything from developing an app to automate
        badminton court bookings (because why not?) to creating a scheduler to
        help students stay on top of deadlines.
        <br />
        <br />
        Oh, and I co-founded TimetableX, a project that helped hundreds of
        students keep their coursework organized while I flexed my React and
        TypeScript skills.
        <br />
        <br />
        When I’m not deep into code, you’ll find me teaching others how to
        solder RC cars, speaking Polish or basic Chinese for fun, or playing
        badminton (I've even built tools to book the courts automatically—yes,
        I’m that committed).
        <br />
        <br />
        I’ve got a decent handle on Python, C, C++, and a few other languages,
        and if you challenge me with a new one, I’m game.
        <br />
        <br />
        Overall, I’m always chasing something new, whether it’s a coding
        challenge, a cool project idea, or simply learning how to work smarter.
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
