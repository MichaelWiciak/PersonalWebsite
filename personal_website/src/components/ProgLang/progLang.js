import "./progLang.css";
import {
  languagesData,
  databasesData,
  serverTechsData,
} from "../../data/skills";

const ProgLang = () => {
  return (
    <section id="progLang">
      <h2>Programming Languages & Technologies</h2>
      <div className="progLangBox">
        {" "}
        <div className="languageSection">
          <h3>Languages</h3>
          <div className="languageBars">
            {languagesData
              .sort((a, b) => b.level - a.level)
              .map((lang) => (
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
            {databasesData
              .sort((a, b) => b.level - a.level)
              .map((db) => (
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
            {serverTechsData
              .sort((a, b) => b.level - a.level)
              .map((tech) => (
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
        * This list isn't exhaustive. Like any good software engineer, I'm
        always picking up new tools and tech along the way (sometimes so many, I
        forget half of them...).
      </p>
    </section>
  );
};

export default ProgLang;
