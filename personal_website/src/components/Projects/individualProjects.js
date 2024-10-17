import React from "react";
import DissertationPDF from "../../assets/ProjectsData/Dissertation.pdf";
import DissertationGraph1 from "../../assets/ProjectsData/better.png";
import DissertationGraph2 from "../../assets/ProjectsData/code_token_lengths_histogram.png";
import DissertationGraph3 from "../../assets/ProjectsData/correctnessGraph.png";
import DissertationGraph4 from "../../assets/ProjectsData/lineraRegression.png";
import DissertationGraph5 from "../../assets/ProjectsData/maskingSizeRation.png";
import DissertationGraph6 from "../../assets/ProjectsData/notSmothedTime.png";
import DissertationGraph7 from "../../assets/ProjectsData/pipeline.png";
import DissertationGraph8 from "../../assets/ProjectsData/timedocstring.png";
import DissertationGraph9 from "../../assets/ProjectsData/timeSmoothed.png";

import JackCompilerScreenshot1 from "../../assets/ProjectsData/jackcompiler.png";

import Carousel from "./carousel";

import "./projects.css";

const individualProjectsData = [
  {
    title: "Dissertation",
    description:
      "An extensive study on code completion with Transformer architectures. View the full dissertation and explore results through the graph.",
    pdf: DissertationPDF,
    images: [
      DissertationGraph1,
      DissertationGraph2,
      DissertationGraph3,
      DissertationGraph4,
      DissertationGraph5,
      DissertationGraph6,
      DissertationGraph7,
      DissertationGraph8,
      DissertationGraph9,
    ],
    repoLink: "https://github.com/MichaelWiciak/Dissertation",
  },
  {
    title: "Jack Compiler",
    description:
      "A Jack-to-VM compiler implemented from scratch, with examples and documentation.",
    images: [JackCompilerScreenshot1],
    repoLink: "https://github.com/MichaelWiciak/JACK_Compiler",
  },
  {
    title: "FPV Rally Racing",
    description:
      "Developed FPV Racing algorithms and techniques. Check out the source code and course details.",
    repoLink: "https://github.com/MichaelWiciak/FPVRallyRacingModified",
    images: [],
    courseLink: "https://www.techcamp.org.uk/courses/car-engineering-camp",
  },
  {
    title: "Stanford",
    description:
      "Stanford AI course projects, covering multiple AI topics with comprehensive implementations.",
    images: [],
    repoLink:
      "https://github.com/MichaelWiciak/Machine_Learning_by_Stanford_University_Programming_Exercises_Solutions",
  },
  {
    title: "PGM",
    description: "Probabilistic Graphical Models implementation.",
    images: [],
    repoLink: "https://github.com/MichaelWiciak/PGMFileManipulatorUtility",
  },
];
