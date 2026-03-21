import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./projects.css";
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
  const [totalSlides] = useState(images.length);

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
    <div className="carousel">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {images.map((image, index) => (
              <div className="embla__slide" key={index}>
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="embla__dots">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
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
    <section id="projects">
      <h1 className="projectsTitle">Projects</h1>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <div className="projectBox" key={index}>
            <h2 className="projectTitle">{project.title}</h2>
            <p className="projectType">
              {project.IndividualBool ? "Individual Project" : "Group Project"}
            </p>
            <div className="projectDescription">
              {project.description.map((para, index) => (
                <p key={index} className="projectDescriptionParagraph">
                  {para.trim()}
                </p>
              ))}
            </div>

            {project.video && project.video.length > 0 && (
              <div className="videoWrapper">
                {project.video.map((videoUrl, index) => (
                  <iframe
                    key={index}
                    width="100%"
                    height="315"
                    src={videoUrl}
                    title={`${project.title} demo ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            )}

            {project.listOfImages && project.listOfImages.length > 0 && (
              <Carousel images={project.listOfImages} title={project.title} />
            )}
            <div className="projectLinks">
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repoLink"
                >
                  Check out the repo
                </a>
              )}

              {project.courseLink && (
                <a
                  href={project.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="courseLink"
                >
                  Check out the course
                </a>
              )}
              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdfLink"
                >
                  <img src={PDFIcon} alt="Download PDF" className="pdfIcon" />
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
