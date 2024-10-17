import React from "react";

const groupProjectsData = [
  {
    title: "TimetableX",
    description:
      "A scheduling tool designed to optimize learning. Watch the demo below.",
    video: "https://www.youtube.com/embed/AJMGprxFs4w?si=TuTb7c3G_6C7i0Dz",
  },
  {
    title: "SportsBooker",
    description: "An automated booking system for badminton courts.",
    video: "https://www.youtube.com/embed/bomcHVP_ZRc?si=x0k2DCV-ZTCgKQxd",
  },
  {
    title: "Robotics",
    description:
      "A robot simulation project using ROS2. Watch the demo and see the results in images and graphs.",
    video: "https://www.youtube.com/embed/UU7TQqW6gh0?si=GU9b9oqX-0pFp8y0",
    images: ["../../assets/ProjectsData/robotics-graph1.png"], // Add more images
  },
  {
    title: "Sports Management Centre",
    description: "An admin system for sports centers.",
    images: ["../../assets/ProjectsData/sportscentre-image1.png"], // Add more images
  },
  {
    title: "Video Player",
    description: "A multi-video player project with example videos.",
    videos: [
      "https://www.youtube.com/embed/sampleVideo1",
      "https://www.youtube.com/embed/sampleVideo2",
    ],
    images: ["../../assets/ProjectsData/videoplayer-image1.png"], // Add more images
  },
];

const GroupProjects = () => {
  return (
    <section>
      <h2>Group Projects</h2>
      <div className="projectsContainer">
        {groupProjectsData.map((project, index) => (
          <div className="projectBox" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {project.video && (
              <div className="videoWrapper">
                <iframe
                  width="100%"
                  height="315"
                  src={project.video}
                  title={`${project.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {project.videos &&
              project.videos.map((video, i) => (
                <div key={i} className="videoWrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src={video}
                    title={`${project.title} video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}

            {project.images &&
              project.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt={`${project.title} image ${i + 1}`}
                  className="projectImage"
                />
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GroupProjects;
