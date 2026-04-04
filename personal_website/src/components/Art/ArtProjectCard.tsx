import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ArtProject } from "../../data/artProjects";
import TechBadge from "../ui/TechBadge";
import ProjectMedia from "../ui/ProjectMedia";
import { usePostHog } from "@posthog/react";

interface ArtProjectCardProps {
  project: ArtProject;
  reverse?: boolean;
}

const ArtProjectCard: React.FC<ArtProjectCardProps> = ({
  project,
  reverse = false,
}) => {
  const posthog = usePostHog();

  return (
    <div
      className={`w-full max-w-[900px] mx-auto p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1`}
    >
      <div
        className={`flex flex-col md:flex-row gap-6 md:gap-8 ${
          reverse ? "md:flex-row-reverse" : ""
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
            <p className="text-sm text-text-muted mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-link hover:underline"
              onClick={() => posthog?.capture('art_project_github_clicked', { project_title: project.title })}
            >
              <FiGithub className="w-4 h-4" />
              View on GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-link hover:underline"
                onClick={() => posthog?.capture('art_project_live_demo_clicked', { project_title: project.title })}
              >
                <FiExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtProjectCard;
