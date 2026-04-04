import CV from "../components/CV/cv";
import { useSEO } from "../hooks/useSEO";

const CVPage: React.FC = () => {
  useSEO();

  return <CV />;
};

export default CVPage;