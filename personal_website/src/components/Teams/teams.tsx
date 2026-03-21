import "./teams.css";
import { teamsData } from "../../data/teams";

const Teams: React.FC = () => {
  return (
    <section id="teams">
      <h1 className="teamsTitle">Teams I Am Part Of</h1>
      <div className="teamsContainer">
        {teamsData.map((team, index) => (
          <div className="teamBox" key={index}>
            <img
              src={team.icon}
              alt={`${team.title} icon`}
              className="teamIcon"
            />
            <h2 className="teamTitle">{team.title}</h2>
            <p className="teamDescription">{team.description}</p>
            {team.video && (
              <div className="videoWrapper">
                <iframe
                  width="100%"
                  height="315"
                  src={team.video}
                  title={`${team.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {team.repoLink && (
              <a
                href={team.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Check out the repo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
