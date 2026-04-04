import { useState, useEffect } from "react";
import bg from "../../assets/MW.JPG";
import { introTitles, introBio, introName } from "../../data/intro";
import SocialIcons from "../SocialIcons/SocialIcons";

const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle(Math.floor(Math.random() * introTitles.length));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="intro" className="min-h-[calc(100vh-5rem)] w-full max-w-container mx-auto relative overflow-hidden">
      <img
        src={bg}
        alt="Profile"
        className="hidden md:block absolute top-0 right-0 w-auto h-full object-cover -z-10 rounded-full"
        style={{ maxWidth: "55%", height: "100vh" }}
      />
      <div className="w-full p-6 md:p-8 lg:p-12 flex flex-col justify-center">
        <img
          src={bg}
          alt="Profile"
          className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-full mx-auto shadow-card mb-6 md:hidden"
        />
        <div className="md:pr-[45%] lg:pr-[50%] text-center md:text-left">
          <span className="text-lg md:text-xl lg:text-2xl font-light">Hello,</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-1 md:mt-2">
            I'm <span className="text-accent transition-colors duration-300 hover:text-yellow-400">{introName}</span>
            <br />
            <span className="animated-title inline-block min-w-[15ch] md:min-w-[25ch] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{introTitles[currentTitle]}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-light tracking-wide mt-3 md:mt-4 max-w-lg mx-auto md:mx-0">
            {introBio}
          </p>
          <SocialIcons size={24} md={28} lg={32} gap={12} className="mt-4 md:mt-6 justify-center md:justify-start" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
