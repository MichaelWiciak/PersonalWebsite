import React from "react";
import "./projects.css";
import PDFIcon from "../../assets/ProjectsData/readthedocs.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import JackCompilerScreenshot1 from "../../assets/ProjectsData/jackcompiler.png";

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

import fetchImages from "./fetchImages";

// fetch every image in ../../assets/StanfordData and put it in the array below

const projectsData = [
  {
    title: "TimetableX: Your Ultimate Study Buddy! 🎉",
    description: [
      "Hey there, fellow students! Are you tired of juggling your assignments, deadlines, and class schedules like a circus performer? Meet TimetableX (timetablex.com)! Co-founded by yours truly, this nifty platform has already attracted 200 users and boasts about 50 daily active users—all enjoying a smoother, more organized academic life!",

      "What’s the magic behind TimetableX? Well, for starters, we’ve crafted a feature that lets you share assessment details within your modules. No more missed deadlines or hidden assignments—everyone in your class can stay in the loop! Plus, our internal notification system sends you automated reminders, so you never forget that important coursework again. 🌟",

      "But that’s not all! With a persistent to-do list and a customizable UI featuring over 30 themes, you can tailor your study experience to fit your style, whether you’re on your desktop or your phone. I coded this beauty using TypeScript and React on the front end, with a sprinkle of Python on the back end for good measure.",

      "Oh, and did I mention our web scraper? It maps room locations from iCal data and caches events for 24 hours, making sure you’re always in the right place at the right time. With a robust MongoDB model featuring 11 collections and integrated with Prisma ORM, we ensure everything runs smoothly, even adapting to your timezone! 🕒",

      "We’re in talks with the University of Leeds to enhance their timetabling system, and TimetableX is here to support students at both Leeds and York universities. With seamless integration of Auth0 for authentication, Stripe for payments, and tRPC for our API, we’re all about keeping your info safe and your experience slick! Plus, we generate iCal links so you can easily migrate your events and assessments to other services.",

      "Ready to see TimetableX in action? 🎥 Check out the demo video below to see how we can transform your academic life!,",
    ],
    video: [
      "https://www.youtube.com/embed/AJMGprxFs4w?si=TuTb7c3G_6C7i0Dz",
      "https://www.youtube.com/embed/UzGAbXAKeFg?si=X8E65ogje3TQVI15",
    ],
    listOfImages: [],
    repoLink: null,
    courseLink: null,
    IndividualBool: false,
    pdf: null,
  },
  {
    title: "BSc Dissertation: Mastering Code Completion with Transformers 🚀",
    description: [
      "Dive into my BSc Dissertation, where I embarked on an exciting journey to enhance code completion! 🎓 In this project, I developed and fine-tuned cutting-edge models like CodeBERT, RoBERTa, and UniXCoder using Masked Language Modelling. My aim? To make coding smoother and faster for developers everywhere!",

      "One of my proudest achievements was optimizing the fine-tuning speed by a whopping 50% using LoRa on NVIDIA P100 GPUs! Talk about turbocharging my models! ⚡ I also designed a reusable pipeline for fine-tuning on new data, ensuring that anyone can leverage these powerful tools with ease.",

      "Throughout my research, I made some intriguing discoveries: I found that accuracy tends to decrease after 100 tokens in docstrings, with an exponential increase in generation time for longer sequences—except when using Abstract Syntax Tree (AST) models. It turns out that code-comment models shine when predicting multiple tokens consecutively, achieving an impressive 81% accuracy on CodeSearchNet and 70% on CodeNN (with C++ excluded from training).",

      "But that's not all! I also crafted a general fine-tuning algorithm that can work across multiple Transformer-based models, making it a versatile tool for future projects. And the cherry on top? I received a First-Class mark for this work! 🎉",

      "Curious to learn more? You can download the full dissertation as a PDF by clicking the button below, or check out the project repository to see the code behind the magic!",
    ],
    video: null,
    listOfImages: [
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
    courseLink: null,
    IndividualBool: true,
    pdf: DissertationPDF,
  },
  {
    title: "JACK Compiler: Turning Code into Action! 🖥️✨",
    description: [
      "Introducing the JACK Compiler! This project compiles code written in the JACK programming language into VM code, featuring a dynamic blend of interconnected components: a lexer, parser, symbol table, and code generation module.",

      "It all starts with lexical analysis, where the lexer scans your JACK code, breaking it down into tokens—think keywords, symbols, identifiers, and more! Next, the parser takes those tokens and constructs a parse tree while ensuring your code adheres to JACK's syntax rules. It even checks for semantic errors, like variable redeclarations!",

      "The symbol table keeps track of all your identifiers, including their types and scopes, allowing for smooth nesting of structures. Finally, the compiler orchestrates everything, guiding the flow from lexer to parser, and generating executable VM code based on the parse tree.",

      "Curious to see how it works? Check out the screenshots below to see the JACK Compiler in action, or dive into the code repository to explore the nitty-gritty details! 🚀",
    ],
    listOfImages: [],
    repoLink: "https://github.com/MichaelWiciak/JACK_Compiler",
    courseLink: null,
    IndividualBool: true,
    pdf: null,
  },
  {
    title: "Car Engineering Code: Revving Up Young Minds! 🚗💡",
    description: [
      "In my Car Engineering course, I had the pleasure of teaching 50 under-18 students the exciting world of coding and robotics! I designed and implemented transmitter and receiver code using ESP-NOW, a cool connectionless protocol that lets ESP32 microcontrollers communicate with each other over Wi-Fi. We achieved a reliable communication range of 100 meters, making our projects truly mobile!",

      "But the fun didn’t stop there! I refactored the code to allow students to customize their RC cars' behaviors based on button presses, and we even programmed animations for a monochrome display using u8g2. Throughout the course, I guided my students in soldering and assembling their custom Tamiya RC cars, along with programming two PCBs using C and C++. Watching them bring their creations to life was an absolute thrill!",
    ],
    repoLink: "https://github.com/MichaelWiciak/FPVRallyRacingModified",
    listOfImages: [],
    courseLink: "https://www.techcamp.org.uk/courses/car-engineering-camp",
    IndividualBool: true,
    pdf: null,
  },
  {
    // need to get screenshots from project
    title: "Stanford",
    description: [
      "Stanford AI course projects, covering multiple AI topics with comprehensive implementations.",
    ],
    listOfImages: fetchImages(),
    repoLink:
      "https://github.com/MichaelWiciak/Machine_Learning_by_Stanford_University_Programming_Exercises_Solutions",
    IndividualBool: true,
    pdf: null,
    courseLink: null,
  },
  {
    title:
      "PGM Image Processing Tools: Unleash Your Creativity with Images! 🖼️✨",
    description: [
      "Dive into the world of image manipulation with my PGM Image Processing Tools, a nifty collection of C programs designed to work with Portable Gray Map (PGM) files! These tools let you convert between ASCII and binary formats, reduce image sizes, and even split images into smaller tiles—all while maintaining simplicity and functionality.",

      "Each program performs a specific task: pgmReduce resizes images, pgmTile breaks them into smaller sections, and pgma2b/pgmb2a handle format conversions for efficiency. There's also pgmEcho for duplicating images and pgmCompare to check if two images are identical. Plus, the pgmCheckingValue module ensures everything is in tip-top shape, validating pixel values and file formats to keep errors at bay.",

      "Whether you're a developer or researcher, these tools are perfect for anyone working with image processing, especially in lightweight environments. Ready to transform your images? Let’s get started!",
    ],
    images: [],
    repoLink: "https://github.com/MichaelWiciak/PGMFileManipulatorUtility",
    IndividualBool: true,
    pdf: null,
    courseLink: null,
  },
  {
    title: "Sports Booker: Your Ultimate Booking Buddy! 🏸📅",
    description: [
      "Welcome to Sports Booker at sportsbooker.timetablex.com, where booking badminton courts has never been easier! We've facilitated over 6,000 automated bookings at The Edge Gym in Leeds, serving two private clubs with 50 happy users.",

      "Powered by Microsoft Azure VM for cron jobs and Docker with PostgreSQL, our robust backend supports seamless user data retrieval and bookings via an intuitive API. On the front end, we’ve crafted a sleek experience using Next.js and T3 App. We even implemented clever bots using Chromium to navigate the outdated Edge system for hassle-free mass bookings and cancellations, complete with a flexible scheduling feature to customize bot behavior!",

      "But wait, there’s more! Our handy Discord bot keeps users updated on booking statuses, and we’ve added a notification system on the website to ensure you’re always in the loop. Plus, a command-line interface (CLI) is available for direct bookings through the API. Ready to take control of your bookings? Check out the demo video and our repo to see Sports Booker in action!",
    ],
    video: ["https://www.youtube.com/embed/Hm_4AjdkOA4?si=64MMZB33teRTnZH6"],
    listOfImages: [],
    repoLink: null,
    courseLink: null,
    IndividualBool: false,
  },
  {
    title: "Turtle Bot in an Exploding Ship: A Race Against Time! 🚀🌌",
    description: [
      "Dive into the adventure of the Turtle Bot in an Exploding Ship! This project harnesses the power of the Gazebo simulator for creating immersive environments, while we deployed our system using Singularity for seamless cross-platform compatibility on a TurtleBot. Equipped with an iDAR sensor, our bot navigated and performed SLAM tasks, all powered by a Raspberry Pi 4 running ROS2.",

      "We took it up a notch by fine-tuning a MobileNetV2 CNN to recognize planets in the solar system, boosting our dataset from 1,434 images to an impressive 50,000 through synthetic data generation techniques like Gaussian blur, pixelation, and scaling. This impressive feat improved our model's accuracy from 60% to 95% on the validation set!",

      "Using OpenCV, we implemented a Hough transform for star removal, applying masking and dilation to help our CNN identify planets. The highlight? Our robot had to escape an exploding spaceship by identifying colored modules and calculating the distance between Earth and the Moon, all within five minutes before the countdown hit zero! We achieved the highest mark of 90% among 45 groups—talk about pressure! Check out the demo video and links to the PDF and repository for a closer look at this exciting project!",
    ],
    video: ["https://www.youtube.com/embed/UU7TQqW6gh0?si=GU9b9oqX-0pFp8y0"],
    images: [""],
    repo: "https://github.com/MichaelWiciak/TurtleBotInAExploringSpaceship",
    IndividualBool: false,
    courseLink: null,
    pdf: null,
  },
  {
    title:
      "Sports Centre Management System: Your Fitness Hub, Simplified! 🏋️‍♀️🏊‍♂️",
    description: [
      "Introducing the Sports Centre Management System, developed for GymCorp to revolutionize how customers book and manage their sports facilities. This comprehensive application allows users to create accounts and log in securely, access a clear pricing list for various activities, and book sessions up to two weeks in advance. Customers can enjoy the flexibility of single-session bookings or take advantage of a 15% discount for booking multiple sessions within a week.",

      "The system also supports membership management, enabling users to sign up and cancel memberships effortlessly. Payments are processed securely, and a faster checkout option saves users time during their bookings. Customers can view upcoming sessions and their booked activities, complete with an interactive calendar for easy scheduling.",

      "For staff and management, the application features a robust interface that allows for price adjustments, activity management, and employee oversight. Visual analytics present usage and sales data, ensuring managers have all the information they need at their fingertips. The system is designed for multiple users to access simultaneously, ensuring a seamless experience for both customers and staff.",

      "With a focus on responsiveness and accessibility, this Sports Management System ensures that everyone can enjoy the facilities, while robust security measures protect user data. Dive into our demo to see it in action, and check out the repository for all the technical details and images of the project!",
    ],
    images: [],
    repo: "https://github.com/MichaelWiciak/SportsCentreManagementSystem",
    IndividualBool: false,
    courseLink: null,
    pdf: null,
  },
  {
    title: "Hot Tomato Video Player (HTVP): A Versatile Video Experience 🍅📺",
    description: [
      "The Hot Tomato Video Player (HTVP) is a responsive and feature-rich video player created using the desktop Qt framework (version 5.15.2). Designed for versatility, HTVP functions seamlessly on both desktop and mobile devices, delivering a user-friendly interface that caters to various screen sizes.",

      "The player includes essential media controls and a clean design, providing users with an enjoyable viewing experience. The development process prioritized usability, ensuring that feedback influenced the final product. To see HTVP in action, check out the demo video, and explore the repository for further insights into the project’s functionalities and design.",
    ],
    video: ["https://www.youtube.com/embed/D2neMUvJ3T0?si=QxYdkEWlUYTloZrn"],
    images: [],
    repo: "https://github.com/MichaelWiciak/VideoPlayer",
  },
];

export const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // fetch every image in ../../assets/StanfordData and put it in the array below

  return (
    <section id="projects">
      <h1 className="projectsTitle">Projects</h1>
      <div className="projectsContainer">
        {projectsData.map((project, index) => (
          <div className="projectBox" key={index}>
            <h2 className="projectTitle">{project.title}</h2>
            {/* Display if project is individual or group */}
            <p className="projectType">
              {project.IndividualBool ? "Individual Project" : "Group Project"}
            </p>
            <div className="projectDescription">
              {project.description.map((para, index) => (
                <p key={index} className="projectDescriptionParagraph">
                  {para.trim()}
                </p>
              ))}
            </div>

            {project.video && project.video.length > 0 && (
              <div className="videoWrapper">
                {project.video.map((videoUrl, index) => (
                  <iframe
                    key={index}
                    width="100%"
                    height="315"
                    src={videoUrl}
                    title={`${project.title} demo ${index + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            )}

            {project.listOfImages && project.listOfImages.length > 0 && (
              <div className="carousel">
                <Slider {...settings}>
                  {project.listOfImages.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <img
                        src={image}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            <div className="projectLinks">
              {/* Render repo link if available */}
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repoLink"
                >
                  Check out the repo
                </a>
              )}

              {/* Render course link if available */}
              {project.courseLink && (
                <a
                  href={project.courseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="courseLink"
                >
                  Check out the course
                </a>
              )}
              {/* Render PDF link if available */}
              {project.pdf && (
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pdfLink"
                >
                  <img src={PDFIcon} alt="Download PDF" className="pdfIcon" />
                  View PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
