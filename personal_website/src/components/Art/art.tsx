import { artProjects } from "../../data/artProjects";
import ArtProjectCard from "./ArtProjectCard";
import ArtBlogList from "./ArtBlogList";

const Art: React.FC = () => {
  return (
    <section
      id="artworkPage"
      className="w-full max-w-container mx-auto px-4 md:px-8 py-8 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        Generative Art & Simulations
      </h1>
      <p className="text-base md:text-lg text-text-muted text-center mb-8 max-w-2xl">
        Exploring the intersection of mathematics, algorithms, and visual art.
        From procedurally generated patterns to biologically inspired
        simulations.
      </p>

      <div className="w-full flex flex-col gap-12">
        {artProjects.map((project) => (
          <ArtProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="w-full max-w-[900px] mx-auto mt-16">
        <ArtBlogList />
      </div>
    </section>
  );
};

export default Art;
