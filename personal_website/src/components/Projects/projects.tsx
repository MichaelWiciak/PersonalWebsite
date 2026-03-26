import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PDFIcon from "../../assets/ProjectsData/readthedocs.svg";
import { projectsData } from "../../data/projects";

interface CarouselProps {
  images: string[];
  title: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, title }) => {
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

  emblaApi?.on("select", () => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  });

  return (
    <div className="w-full max-w-card mx-auto my-8">
      <div className="relative">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex backface-hidden">
            {images.map((image, index) => (
              <div className="flex-none basis-full min-w-0 relative h-[400px]" key={index}>
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
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
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full max-w-card mx-auto flex flex-col items-center overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-semibold pt-12 mb-6">Projects</h1>

      <div className="w-full flex flex-col items-center">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-[80%] mx-auto my-6 p-6 md:p-8 rounded-lg bg-surface-elevated shadow-card transition-all duration-300 hover:shadow-cardHover hover:-translate-y-1"
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-2">{project.title}</h2>
            <p className="font-semibold text-base mb-4 text-[#f0a500]">
              {project.IndividualBool ? "Individual Project" : "Group Project"}
            </p>
            <div className="mb-4">
              {project.description.map((para, idx) => (
                <p key={idx} className="mb-4 text-base">
                  {para.trim()}
                </p>
              ))}
            </div>

            {project.video && project.video.length > 0 && (
              <div className="flex flex-wrap justify-center gap-4 my-4">
                {project.video.map((videoUrl, idx) => (
                  <iframe
                    key={idx}
                    className="w-full max-w-full border-none rounded-lg shadow-md"
                    height="315"
                    src={videoUrl}
                    title={`${project.title} demo ${idx + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ))}
              </div>
            )}

            {project.listOfImages && project.listOfImages.length > 0 && (
              <Carousel images={project.listOfImages} title={project.title} />
            )}

            <div className="flex justify-center items-center gap-4 mt-4">
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline"
                >
                  Check out the repo
                </a>
              )}

              {project.courseLink && (
                <a
                  href={project.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline"
                >
                  Check out the course
                </a>
              )}
              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline inline-flex items-center"
                >
                  <img src={PDFIcon} alt="PDF" className="w-6 h-6 mr-2" />
                  View PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
