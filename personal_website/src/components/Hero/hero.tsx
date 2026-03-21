import { useState, useEffect } from "react";
import bg from "../../assets/MW.JPG";
import { introTitles, introBio, introName } from "../../data/intro";

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(Math.floor(Math.random() * introTitles.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="h-[calc(100vh-5rem)] w-full max-w-container mx-auto relative overflow-hidden">
      <div className="h-full w-full p-8 flex flex-col justify-center">
        <span className="text-[1.75rem] font-light">Hello,</span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          I'm <span className="text-accent transition-colors duration-300 hover:text-yellow-400">{introName}</span>
          <br />
          <span className="animated-title inline-block">{introTitles[currentTitle]}</span>
        </h1>
        <p className="text-base md:text-lg font-light tracking-wide mt-4 max-w-2xl">
          {introBio}
        </p>
      </div>
      <img
        src={bg}
        alt="Profile"
        className="absolute top-0 right-0 w-auto h-full object-cover -z-10 rounded-full"
        style={{ maxWidth: "60%", height: "100vh" }}
      />
    </section>
  );
};

export default Hero;
