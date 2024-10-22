import React from "react";
import "./progLang.css"; // Ensure to create this CSS file for styles later

const languages = [
  { name: "Python", level: 100 },
  { name: "Bash", level: 75 },
  { name: "C", level: 80 },
  { name: "C++", level: 60 },
  { name: "Java", level: 60 },
  { name: "JavaScript", level: 70 },
  { name: "Ruby", level: 10 },
  { name: "MATLAB", level: 60 },
  { name: "TypeScript", level: 10 },
];

const databases = [
  { name: "MySQL", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "SQLite", level: 65 },
  { name: "MongoDB", level: 50 },
];

const serverTechs = [
  { name: "Express.js", level: 50 },
  { name: "Django", level: 50 },
  { name: "Vercel", level: 65 },
  { name: "Azure", level: 70 },
  { name: "Next.js", level: 50 },
  { name: "Docker", level: 60 },
  { name: "Cloudflare", level: 65 },
];

const ProgLang = () => {
  return (
    <section id="progLang">
      <h2>Programming Languages & Technologies</h2>
      <div className="progLangBox">
        {" "}
        <div className="languageSection">
          <h3>Languages</h3>
          <div className="languageBars">
            {languages.map((lang) => (
              <div key={lang.name} className="languageBar">
                <span className="languageName">{lang.name}</span>

                <div className="barContainer">
                  <div
                    className="bar"
                    style={{ width: `${lang.level}%` }}
                    title={`${lang.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="databaseSection">
          <h3>Databases</h3>
          <div className="languageBars">
            {databases.map((db) => (
              <div key={db.name} className="databaseBar">
                <span className="databaseName">{db.name}</span>
                <div className="barContainer">
                  <div
                    className="bar"
                    style={{ width: `${db.level}%` }}
                    title={`${db.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="serverTechSection">
          <h3>Server-Side Technologies</h3>
          <div className="languageBars">
            {serverTechs.map((tech) => (
              <div key={tech.name} className="serverTechBar">
                <span className="serverTechName">{tech.name}</span>
                <div className="barContainer">
                  <div
                    className="bar"
                    style={{ width: `${tech.level}%` }}
                    title={`${tech.level}%`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="skillNote">
        * This list is just the tip of the iceberg—like any good software
        engineer, I’m always picking up new tools and tech along the way
        (sometimes so many, I forget half of them!). If it’s not listed here,
        chances are I’ve used it in a project somewhere. And hey, I love diving
        into new technologies, so the list is always growing!
      </p>
    </section>
  );
};

export default ProgLang;
