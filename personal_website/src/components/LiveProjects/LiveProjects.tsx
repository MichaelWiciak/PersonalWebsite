import { FiExternalLink, FiGlobe } from "react-icons/fi";
import { liveProjects } from "../../data/liveProjects";

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
          Code is not public for these projects, but feel free to explore the live
          deployments.
        </p>
      </div>

      <div className="w-full flex flex-col gap-8">
        {liveProjects.map((project) => (
          <div
            key={project.id}
            className="w-full max-w-[900px] mx-auto p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-medium mb-2">
                    {project.title}
                  </h2>
                  <p className="text-base text-text-muted mb-4">
                    {project.tagline}
                  </p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0a500] text-black font-medium rounded-lg hover:bg-[#f0b800] transition-colors duration-300 whitespace-nowrap"
                >
                  <FiGlobe className="w-5 h-5" />
                  Visit Site
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>

              {project.videoUrls && project.videoUrls.length > 0 && (
                <div className="flex flex-col md:flex-row gap-4">
                  {project.videoUrls.map((videoUrl, index) => (
                    <div
                      key={index}
                      className="flex-1 aspect-video rounded-lg overflow-hidden"
                    >
                      <iframe
                        className="w-full h-full"
                        src={videoUrl}
                        title={`${project.title} demo ${index + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
              )}

              {project.description && project.description.length > 0 && (
                <div className="border-t border-white/10 pt-4">
                  {project.description.map((para, idx) => (
                    <p key={idx} className="text-base text-text-muted mb-3">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveProjects;
