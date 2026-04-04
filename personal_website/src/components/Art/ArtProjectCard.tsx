import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { ArtProject, ProjectImage } from "../../data/artProjects";
import TechBadge from "../ui/TechBadge";

interface ProjectMediaProps {
  images?: ProjectImage[];
  gifUrl?: string;
  title: string;
}

const ProjectMedia: React.FC<ProjectMediaProps> = ({
  images,
  gifUrl,
  title,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotClick = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const hasImages = images && images.length > 0;
  const hasMultipleImages = images && images.length > 1;

  if (!hasImages && !gifUrl) {
    return (
      <div className="w-full h-full min-h-[250px] bg-surface flex items-center justify-center rounded-lg">
        <div className="text-center text-text-muted">
          <FiGithub className="w-16 h-16 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No preview available</p>
        </div>
      </div>
    );
  }

  if (gifUrl && !hasMultipleImages) {
    return (
      <div className="w-full h-full flex items-center justify-center rounded-lg overflow-hidden">
        <img
          src={gifUrl}
          alt={`${title} simulation`}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images?.map((img, index) => (
            <div
              className="flex-none basis-full min-w-0 h-full"
              key={index}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
      {hasMultipleImages && images && images.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white/30 border-none cursor-pointer p-0 transition-colors duration-300 hover:bg-white/50 ${
                index === selectedIndex ? "bg-[#f0a500]" : ""
              }`}
              onClick={() => onDotClick(index)}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface ArtProjectCardProps {
  project: ArtProject;
  reverse?: boolean;
}

const ArtProjectCard: React.FC<ArtProjectCardProps> = ({
  project,
  reverse = false,
}) => {
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
            gifUrl={project.gifUrl}
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
