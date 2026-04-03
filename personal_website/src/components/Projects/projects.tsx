import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { pinnedProjects, GITHUB_PROFILE_URL } from "../../data/pinnedProjects";
import TechBadge from "../ui/TechBadge";

interface ProjectMediaProps {
  images?: { src: string; alt: string }[];
  videoUrl?: string;
  title: string;
}

const ProjectMedia: React.FC<ProjectMediaProps> = ({
  images,
  videoUrl,
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

  const hasMedia = (images && images.length > 0) || videoUrl;
  const hasMultipleMedia =
    (images && images.length > 1) || (videoUrl && images && images.length > 0);

  if (!hasMedia) {
    return (
      <div className="w-full h-full min-h-[250px] bg-surface flex items-center justify-center rounded-lg">
        <div className="text-center text-text-muted">
          <FiGithub className="w-16 h-16 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No preview available</p>
        </div>
      </div>
    );
  }

  if (videoUrl && !hasMultipleMedia) {
    return (
      <div className="w-full h-full">
        <iframe
          className="w-full h-full min-h-[250px] rounded-lg"
          src={videoUrl}
          title={`${title} demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const mediaItems = [
    ...(videoUrl ? [{ type: "video" as const, src: videoUrl }] : []),
    ...(images?.map((img) => ({
      type: "image" as const,
      src: img.src,
      alt: img.alt,
    })) || []),
  ];

  return (
    <div className="w-full h-full relative">
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {mediaItems.map((item, index) => (
            <div className="flex-none basis-full min-w-0 h-full" key={index}>
              {item.type === "video" ? (
                <iframe
                  className="w-full h-full min-h-[250px] rounded-lg"
                  src={item.src}
                  title={`${title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain rounded-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {hasMultipleMedia && mediaItems.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4">
          {mediaItems.map((_, index) => (
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
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-8">Public Projects</h1>

      <div className="w-full max-w-[900px] mx-auto mb-12 p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card text-center">
        <p className="text-lg md:text-xl mb-4">
          I have{" "}
          <span className="font-semibold text-[#f0a500]">
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
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0a500] text-black font-medium rounded-lg hover:bg-[#f0b800] transition-colors duration-300"
        >
          <FiGithub className="w-5 h-5" />
          View all repos on GitHub
          <FiExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="w-full flex flex-col gap-12">
        {pinnedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`w-full max-w-[900px] mx-auto p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1`}
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <TechBadge key={tech} tech={tech} />
                    ))}
                  </div>
                </div>

                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-link hover:underline"
                >
                  View on GitHub
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

export default Projects;
