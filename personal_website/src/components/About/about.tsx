import { aboutData, additionalSkills } from "../../data/about";

const About: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-container mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-semibold pt-12 mb-6">About Me</h2>
      <div className="text-base md:text-lg font-normal max-w-3xl leading-relaxed text-left md:text-center">
        <p className="mb-4">{aboutData.description}</p>
        <p className="mb-4">
          I have co-founded the platforms{" "}
          <a
            href={aboutData.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover hover:underline"
          >
            {aboutData.links[0].text}
          </a>{" "}
          and{" "}
          <a
            href={aboutData.links[1].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover hover:underline"
          >
            {aboutData.links[1].text}
          </a>
          .
        </p>
        <p className="mb-4">{additionalSkills}</p>
      </div>
    </section>
  );
};

export default About;
