import LiveProjects from "../components/LiveProjects/LiveProjects";
import { useSEO } from "../hooks/useSEO";

const LiveProjectsPage: React.FC = () => {
  useSEO();

  return <LiveProjects />;
};

export default LiveProjectsPage;
