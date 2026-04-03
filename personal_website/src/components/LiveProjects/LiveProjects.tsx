import { FiExternalLink, FiGlobe } from "react-icons/fi";
import { liveProjects } from "../../data/liveProjects";
import TechBadge from "../ui/TechBadge";

const LiveProjects: React.FC = () => {
  return (
    <section
      id="live-projects"
      className="w-full max-w-card mx-auto px-4 md:px-8 py-12 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-8">Live Projects</h1>

      <div className="w-full max-w-[900px] mx-auto mb-12 p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card text-center">
        <p className="text-lg md:text-xl mb-4">
          Commercial projects I have built and currently maintain.
        </p>
        <p className="text-base text-text-muted">
          Code is not public for these, but feel free to explore the live deployments.
        </p>
      </div>

      <div className="w-full flex flex-col gap-12">
        {liveProjects.map((project, index) => (
          <div
            key={project.id}
            className="w-full max-w-[900px] mx-auto p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
          >
            <div
              className={`flex flex-col md:flex-row gap-6 md:gap-8 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                {project.videoUrls && project.videoUrls.length > 0 && (
                  <div className="flex flex-col gap-4">
                    {project.videoUrls.map((videoUrl, idx) => (
                      <div
                        key={idx}
                        className="aspect-video rounded-lg overflow-hidden"
                      >
                        <iframe
                          className="w-full h-full"
                          src={videoUrl}
                          title={`${project.title} demo ${idx + 1}`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ))}
                  </div>
                )}
                {!project.videoUrls && (
                  <div className="w-full h-[250px] md:h-[300px] bg-surface flex items-center justify-center rounded-lg">
                    <div className="text-center text-text-muted">
                      <FiGlobe className="w-16 h-16 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Visit site for live demo</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-medium mb-3">
                    {project.title}
                  </h2>
                  <p className="text-base text-text-muted mb-4">
                    {project.tagline}
                  </p>
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <TechBadge key={tech} tech={tech} />
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-link hover:underline"
                >
                  Visit Site
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveProjects;
