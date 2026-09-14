import Tools from "../components/Tools/tools";
import { useSEO } from "../hooks/useSEO";

const ToolsPage: React.FC = () => {
  useSEO();

  return <Tools />;
};

export default ToolsPage;