import { teamsData } from "../../data/teams";

const Teams: React.FC = () => {
  return (
    <section id="teams" className="w-full max-w-container mx-auto px-4 md:px-8 py-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-semibold pt-12 mb-6">Teams I Am Part Of</h1>

      <div className="w-full flex flex-col items-center">
        {teamsData.map((team, index) => (
          <div
            key={index}
            className="w-full max-w-[80%] mx-auto my-6 p-6 md:p-8 rounded-lg bg-surface-elevated shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
          >
            <img
              src={team.icon}
              alt={`${team.title} icon`}
              className="w-32 h-32 md:w-20 md:h-20 object-cover rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl md:text-3xl font-medium mb-2">{team.title}</h2>
            <p className="text-base md:text-lg mb-4">{team.description}</p>
            
            {team.video && (
              <div className="my-4">
                <iframe
                  className="w-full max-w-full border-none rounded-lg shadow-md"
                  height="315"
                  src={team.video}
                  title={`${team.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            )}
            
            {team.repoLink && (
              <a
                href={team.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link hover:underline"
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
