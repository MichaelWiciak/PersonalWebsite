import Art from "../components/Art/art";
import { useSEO } from "../hooks/useSEO";

const ArtPage: React.FC = () => {
  useSEO();

  return <Art />;
};

export default ArtPage;