import Courses from "../components/Courses/courses";
import { useSEO } from "../hooks/useSEO";

const CoursesPage: React.FC = () => {
  useSEO();

  return <Courses />;
};

export default CoursesPage;