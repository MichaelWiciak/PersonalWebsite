import React from "react";
import "./progLang.css"; // Ensure to create this CSS file for styles later

const languages = [
  { name: "Python", level: 100 },
  { name: "Bash", level: 75 },
  { name: "C", level: 80 },
  { name: "C++", level: 60 },
  { name: "Java", level: 60 },
  { name: "JavaScript", level: 70 },
  { name: "TypeScript", level: 65 },
];

const databases = [
  { name: "MySQL", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "SQLite", level: 65 },
];

const serverTechs = [
  { name: "Express.js", level: 70 },
  { name: "Django", level: 75 },
];

const ProgLang = () => {
  return (
    <section id="progLang">
      <h2>Programming Languages & Technologies</h2>
      <div className="progLangContainer">
        <div className="languageSection">
          <h3>Languages</h3>
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

        <div className="databaseSection">
          <h3>Databases</h3>
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

        <div className="serverTechSection">
          <h3>Server-Side Technologies</h3>
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

      <p className="skillNote">
        * This is just a glimpse of my skills. I enjoy learning new tools and
        technologies quickly!
      </p>
    </section>
  );
};

export default ProgLang;
