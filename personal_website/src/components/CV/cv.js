import React from "react";
import "./cv.css";
import CVFile from "../../assets/MichaelWiciakCVtext.pdf";

export const CV = () => {
  return (
    <section id="cvPage">
      <div id="cv">
        <h1 className="cvPageTitle">My CV</h1>
        <span className="cvDesc">
          Latest update: 01/10/2024 so could be out-of-date. Download or view my
          CV below:
        </span>
        <div className="pdfViewer">
          <iframe
            src={CVFile}
            width="100%"
            height="600px"
            title="Michael Wiciak CV"
          ></iframe>
        </div>

        {/* Download Button */}
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
