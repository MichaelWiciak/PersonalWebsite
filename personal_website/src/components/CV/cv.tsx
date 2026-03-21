import "./cv.css";
import CVFile from "../../assets/MichaelWiciakCVtext.pdf";
import { FiFileText, FiCalendar } from "react-icons/fi";
import { LinkButton } from "../ui/Button";

const CV: React.FC = () => {
  const lastUpdated = "10/03/2026";

  return (
    <section className="cv-section">
      <div className="cv-container">
        <div className="cv-header">
          <div className="cv-icon-wrapper">
            <FiFileText className="cv-icon" />
          </div>
          <h1 className="cv-title">My CV</h1>
          <div className="cv-meta">
            <FiCalendar className="meta-icon" />
            <span className="cv-date">Latest update: {lastUpdated}</span>
          </div>
        </div>

        <p className="cv-subtitle">View or download my CV below</p>

        <div className="pdf-wrapper">
          <iframe
            src={CVFile}
            className="pdf-frame"
            title="Michael Wiciak CV"
          />
        </div>

        <div className="cv-actions">
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
