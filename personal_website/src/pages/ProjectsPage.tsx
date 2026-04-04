import Projects from "../components/Projects/projects";
import { useSEO } from "../hooks/useSEO";

const ProjectsPage: React.FC = () => {
  useSEO();

  return (
    <>
      <Projects />
    </>
  );
};

export default ProjectsPage;
