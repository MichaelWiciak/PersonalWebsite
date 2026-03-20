import "./cv.css";
import CVFile from "../../assets/MichaelWiciakCVtext.pdf";

const CV: React.FC = () => {
  return (
    <section id="cvPage">
      <div id="cv">
        <h1 className="cvPageTitle">My CV</h1>
        <span className="cvDesc">
          Latest update: 10/03/2026. Download or view my CV below:
        </span>
        <div className="pdfViewer">
          <iframe
            src={CVFile}
            width="100%"
            height="600px"
            title="Michael Wiciak CV"
          ></iframe>
        </div>

        <div className="downloadCV">
          <a
            href={CVFile}
            download="MichaelWiciak_CV.pdf"
            className="downloadBtn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default CV;
