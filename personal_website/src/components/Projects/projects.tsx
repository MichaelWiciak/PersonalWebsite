import { useState, useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { pinnedProjects, GITHUB_PROFILE_URL } from "../../data/pinnedProjects";
import TechBadge from "../ui/TechBadge";
import ProjectMedia from "../ui/ProjectMedia";

const Projects: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchRepoCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/MichaelWiciak"
        );
        if (response.ok) {
          const data = await response.json();
          setRepoCount(data.public_repos);
        }
      } catch {
        setRepoCount(46);
      }
    };
    fetchRepoCount();
  }, []);

  return (
    <section
      id="projects"
      className="w-full max-w-card mx-auto px-4 md:px-8 py-12 flex flex-col items-center"
      aria-labelledby="projects-heading"
    >
      <h1 id="projects-heading" className="text-4xl md:text-5xl font-semibold mb-8">Public Projects</h1>

      <div className="w-full max-w-[900px] mx-auto mb-12 p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card text-center">
        <p className="text-lg md:text-xl mb-4">
          I have{" "}
          <span className="font-semibold text-accent">
            {repoCount !== null
              ? `${repoCount} public repos`
              : "many public repos"}
          </span>{" "}
          on GitHub that are all open source, all 100% viewable.
        </p>
        <p className="text-base text-text-muted mb-6">
          Here are some highlights. For full details check out the individual
          READMEs.
        </p>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-black font-medium rounded-lg hover:bg-accent-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
          aria-label="View all repositories on GitHub (opens in new tab)"
        >
          <FiGithub className="w-5 h-5" aria-hidden="true" />
          View all repos on GitHub
          <FiExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>

      <div className="w-full flex flex-col gap-12" role="list" aria-label="Featured projects">
        {pinnedProjects.map((project, index) => (
          <article
            key={project.id}
            className={`w-full max-w-[900px] mx-auto p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1`}
            role="listitem"
          >
            <div
              className={`flex flex-col md:flex-row gap-6 md:gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 h-[250px] md:h-[300px]">
                <ProjectMedia
                  images={project.images}
                  videoUrl={project.videoUrl}
                  title={project.title}
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium mb-3">
                    {project.title}
                  </h2>
                  <p className="text-base text-text-muted mb-4">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6" role="list" aria-label="Technologies used">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-link hover:underline focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-surface-elevated rounded-lg"
                  aria-label={`View ${project.title} on GitHub (opens in new tab)`}
                >
                  View on GitHub
                  <FiExternalLink className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
