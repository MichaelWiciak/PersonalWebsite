import {
  languagesData,
  databasesData,
  serverTechsData,
} from "../../data/skills";

const ProgLang: React.FC = () => {
  return (
    <section id="progLang" className="w-full max-w-container mx-auto px-4 md:px-8 py-8 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
        Programming Languages & Technologies
      </h2>

      <div className="w-full space-y-8">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4 text-left">Languages</h3>
          <div className="bg-surface-elevated rounded-lg p-4 space-y-2">
            {languagesData
              .sort((a, b) => b.level - a.level)
              .map((lang) => (
                <div key={lang.name} className="flex items-center p-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg rounded">
                  <span className="flex-[1.5] text-white font-medium">{lang.name}</span>
                  <div className="flex-[3] bg-white/20 rounded-lg h-6 overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-lime-400 to-cyan-400 transition-all duration-1000 ease-in-out"
                      style={{ width: `${lang.level}%` }}
                      title={`${lang.level}%`}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4 text-left">Databases</h3>
          <div className="bg-surface-elevated rounded-lg p-4 space-y-2">
            {databasesData
              .sort((a, b) => b.level - a.level)
              .map((db) => (
                <div key={db.name} className="flex items-center p-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg rounded">
                  <span className="flex-[1.5] text-white font-medium">{db.name}</span>
                  <div className="flex-[3] bg-white/20 rounded-lg h-6 overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-lime-400 to-cyan-400 transition-all duration-1000 ease-in-out"
                      style={{ width: `${db.level}%` }}
                      title={`${db.level}%`}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4 text-left">Server-Side Technologies</h3>
          <div className="bg-surface-elevated rounded-lg p-4 space-y-2">
            {serverTechsData
              .sort((a, b) => b.level - a.level)
              .map((tech) => (
                <div key={tech.name} className="flex items-center p-2 transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg rounded">
                  <span className="flex-[1.5] text-white font-medium">{tech.name}</span>
                  <div className="flex-[3] bg-white/20 rounded-lg h-6 overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-lime-400 to-cyan-400 transition-all duration-1000 ease-in-out"
                      style={{ width: `${tech.level}%` }}
                      title={`${tech.level}%`}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <p className="mt-8 text-lg text-gray-300 text-center italic">
        * This list isn't exhaustive. Like any good software engineer, I'm
        always picking up new tools and tech along the way (sometimes so many, I
        forget half of them...).
      </p>
    </section>
  );
};

export default ProgLang;
