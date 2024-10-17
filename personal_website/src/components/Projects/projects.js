import React from "react";
import "./projects.css";

import IndividualProjects from "./individualProjects";
import GroupProjects from "./groupProjects";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projectsTitle">Projects</h1>
      <IndividualProjects />
      <GroupProjects />
    </section>
  );
};

export default Projects;
