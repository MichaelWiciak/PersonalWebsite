import CVFile from "../../assets/MichaelWiciakCVtext.pdf";
import { FiFileText, FiCalendar } from "react-icons/fi";
import { LinkButton } from "../ui/Button";

const CV: React.FC = () => {
  const lastUpdated = "10/03/2026";

  return (
    <section className="w-full flex items-center justify-center p-8 md:p-16 box-border">
      <div className="w-full max-w-3xl bg-surface rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mb-6">
            <FiFileText className="text-3xl text-background" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
            My CV
          </h1>
          <div className="inline-flex items-center gap-2 text-text-muted text-sm font-light">
            <FiCalendar className="text-base opacity-70" />
            <span>Latest update: {lastUpdated}</span>
          </div>
        </div>

        <p className="text-center text-gray-400 text-base mb-8">
          View or download my CV below
        </p>

        <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-background">
          <iframe
            src={CVFile}
            className="w-full h-[500px] md:h-[600px] border-none block"
            title="Michael Wiciak CV"
          />
        </div>

        <div className="flex justify-center mt-8">
          <LinkButton
            href={CVFile}
            icon="download"
            download
          >
            Download CV
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default CV;
