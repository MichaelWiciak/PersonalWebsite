import Hero from "../components/Hero/hero";
import About from "../components/About/about";
import ProgLang from "../components/ProgLang/progLang";
import { useSEO } from "../hooks/useSEO";

const Home: React.FC = () => {
  useSEO();

  return (
    <>
      <Hero />
      <About />
      <ProgLang />
    </>
  );
};

export default Home;
