import React from "react";
import "./projects.css";
import PDFIcon from "../../assets/ProjectsData/readthedocs.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

import DissertationPDF from "../../assets/ProjectsData/Dissertation.pdf";
import DissertationGraph1 from "../../assets/ProjectsData/better.png";
import DissertationGraph2 from "../../assets/ProjectsData/code_token_lengths_histogram.png";
import DissertationGraph3 from "../../assets/ProjectsData/correctnessGraph.png";
import DissertationGraph4 from "../../assets/ProjectsData/lineraRegression.png";
import DissertationGraph5 from "../../assets/ProjectsData/maskingSizeRation.png";
import DissertationGraph6 from "../../assets/ProjectsData/notSmothedTime.png";
import DissertationGraph7 from "../../assets/ProjectsData/pipeline.png";
import DissertationGraph8 from "../../assets/ProjectsData/timedocstring.png";
import DissertationGraph9 from "../../assets/ProjectsData/timeSmoothed.png";

const projectsData = [
  {
    title: "TimetableX",
    description:
      "A scheduling tool designed to optimize learning. Watch the demo below.",
    video: "https://www.youtube.com/embed/AJMGprxFs4w?si=TuTb7c3G_6C7i0Dz",
    listOfImages: [],
    repoLink: null,
    courseLink: null,
    IndividualBool: false,
    pdf: null,
  },
  {
    title: "Dissertation",
    description: "This project focuses on Probabilistic Graphical Models...",
    video: null,
    listOfImages: [
      DissertationGraph1,
      DissertationGraph2,
      DissertationGraph3,
      DissertationGraph4,
      DissertationGraph5,
      DissertationGraph6,
      DissertationGraph7,
      DissertationGraph8,
      DissertationGraph9,
    ],
    repoLink: "https://github.com/MichaelWiciak/Dissertation",
    courseLink: null,
    IndividualBool: true,
    pdf: DissertationPDF,
  },
];

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
            <p className="projectDescription">{project.description}</p>

            {/* Display if project is individual or group */}
            <p className="projectType">
              {project.IndividualBool ? "Individual Project" : "Group Project"}
            </p>

            {/* Render video if available */}
            {project.video && (
              <div className="videoWrapper">
                <iframe
                  width="100%"
                  height="315"
                  src={project.video}
                  title={`${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
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
            {/* Render repo link if available */}
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

            {/* Render course link if available */}
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
            {/* Render PDF link if available */}
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
