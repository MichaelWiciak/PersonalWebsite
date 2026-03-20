import "./projects.css";
import PDFIcon from "../../assets/ProjectsData/readthedocs.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import { projectsData } from "../../data/projects";

export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
              <div className="carousel">
                <Slider {...settings}>
                  {project.listOfImages.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
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
