import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ArtPage from "./pages/ArtPage";
import CVPage from "./pages/CVPage";
import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  useEffect(() => {
    const spawnSnowflakes = (numSnowflakes: number) => {
      const particles = numSnowflakes;
      const colors = ["#ffffff", "#f2f2f2", "#d9d9d9", "#bfbfbf", "#a6a6a6"];
      const shapes = ["100%", "50% 50%", "25% 75%", "75% 25%"];
      const layers = [
        "particle-layer1",
        "particle-layer2",
        "particle-layer3",
        "particle-layer4",
        "particle-layer5",
        "particle-layer6",
        "particle-layer7",
        "particle-layer8",
        "particle-layer9",
        "particle-layer10",
      ];

      for (let i = 0; i < particles; i++) {
        const particle = document.createElement("div");
        const layer = layers[i % layers.length];
        particle.className = `particle ${layer}`;

        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDelay = `${Math.random() * 0}s`;
        particle.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius =
          shapes[Math.floor(Math.random() * shapes.length)];
        document.body.appendChild(particle);

        particle.addEventListener("animationend", () => {
          particle.remove();
        });
      }
    };

    spawnSnowflakes(100);

    const interval = setInterval(() => {
      const currentLayer1Snowflakes =
        document.querySelectorAll(".particle-layer1").length;
      const currentLayer2Snowflakes =
        document.querySelectorAll(".particle-layer2").length;
      const currentLayer3Snowflakes =
        document.querySelectorAll(".particle-layer3").length;
      const currentLayer4Snowflakes =
        document.querySelectorAll(".particle-layer4").length;
      const currentLayer5Snowflakes =
        document.querySelectorAll(".particle-layer5").length;
      const currentLayer6Snowflakes =
        document.querySelectorAll(".particle-layer6").length;
      const currentLayer7Snowflakes =
        document.querySelectorAll(".particle-layer7").length;
      const currentLayer8Snowflakes =
        document.querySelectorAll(".particle-layer8").length;
      const currentLayer9Snowflakes =
        document.querySelectorAll(".particle-layer9").length;
      const currentLayer10Snowflakes =
        document.querySelectorAll(".particle-layer10").length;
      const remainingLayer1Snowflakes = 15 - currentLayer1Snowflakes;
      const remainingLayer2Snowflakes = 15 - currentLayer2Snowflakes;
      const remainingLayer3Snowflakes = 15 - currentLayer3Snowflakes;
      const remainingLayer4Snowflakes = 15 - currentLayer4Snowflakes;
      const remainingLayer5Snowflakes = 15 - currentLayer5Snowflakes;
      const remainingLayer6Snowflakes = 15 - currentLayer6Snowflakes;
      const remainingLayer7Snowflakes = 15 - currentLayer7Snowflakes;
      const remainingLayer8Snowflakes = 15 - currentLayer8Snowflakes;
      const remainingLayer9Snowflakes = 15 - currentLayer9Snowflakes;
      const remainingLayer10Snowflakes = 15 - currentLayer10Snowflakes;

      const totalRemainingSnowflakes =
        remainingLayer1Snowflakes +
        remainingLayer2Snowflakes +
        remainingLayer3Snowflakes +
        remainingLayer4Snowflakes +
        remainingLayer5Snowflakes +
        remainingLayer6Snowflakes +
        remainingLayer7Snowflakes +
        remainingLayer8Snowflakes +
        remainingLayer9Snowflakes +
        remainingLayer10Snowflakes;

      if (totalRemainingSnowflakes > 0) {
        spawnSnowflakes(totalRemainingSnowflakes);
      }
    }, 8000);

    return () => {
      clearInterval(interval);
      document
        .querySelectorAll(".particle")
        .forEach((particle) => particle.remove());
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="art" element={<ArtPage />} />
          <Route path="cv" element={<CVPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
