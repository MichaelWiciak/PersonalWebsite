import React from "react";
import "./projects.css";
import PDFIcon from "../../assets/ProjectsData/readthedocs.svg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    pdf: null, // Replace with actual path to PDF if available
  },
  {
    title: "Stanford PGM",
    description: "This project focuses on Probabilistic Graphical Models...",
    video: null,
    listOfImages: ["path/to/image1.jpg", "path/to/image2.jpg"], // Replace with actual image paths
    repoLink: "https://github.com/MichaelWiciak/Stanford-PGM",
    courseLink: "https://coursera.org/some-course-link",
    IndividualBool: true,
    pdf: "path/to/pdf.pdf", // Replace with actual path to PDF if available
  },
  // Add more project data as needed
];

export const Projects = () => {
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

            {/* Carousel for images if available */}
            {project.listOfImages && project.listOfImages.length > 0 && (
              <Carousel showThumbs={false} infiniteLoop>
                {project.listOfImages.map((image, imgIndex) => (
                  <div key={imgIndex}>
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${imgIndex + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
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
