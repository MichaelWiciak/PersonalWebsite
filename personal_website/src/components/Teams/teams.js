import React from "react";
import "./teams.css"; // Ensure you create a corresponding CSS file for styling

import HotTomatoIcon from "../../assets/TeamsData/hottomatodev.png";
import RobotsIcon from "../../assets/TeamsData/robots.webp";
import TimetableXIcon from "../../assets/TeamsData/timetableXLogo.png";
import BadmintonIcon from "../../assets/TeamsData/badmintonLog.jpg";

const teamsData = [
  {
    title: "Hot Tomato Dev Team",
    description:
      "A group of six University of Leeds students (now alumni) who collaborated on various projects, including coursework assignments and hackathons. Together, we created systems like the Sports Centre Management System and participated in hackathons, such as the Leaning Technologies Web Assembly Hackathon. We also enjoy working on fun, side projects.",
    icon: HotTomatoIcon, // Replace with your icon path
    video: null, // Add video link or iframe source if available
    repoLink: "https://github.com/MichaelWiciak/SportsCentreManagementSystem",
  },
  {
    title: "Group30",
    description:
      "This team of four students developed the TurtleBot project. In this project, a robot trapped in an exploding spaceship had to escape by identifying colored modules and calculating the distance between Earth and the Moon using data from spaceship windows. The robot had only five minutes to complete its mission before the ship exploded.",
    icon: RobotsIcon, // Replace with your icon path
    video: "https://www.youtube.com/embed/UU7TQqW6gh0?si=GU9b9oqX-0pFp8y0",
    repoLink: "https://github.com/MichaelWiciak/TurtleBotInAExploringSpaceship",
  },
  {
    title: "TimetableX",
    description:
      "Co-founded by two students, TimetableX is a business venture designed to optimize learning and scheduling for university students. We attracted 200 users, with 50 daily active users. Our platform allows students to publicly share assessments, automate reminders, and customize the UI with over 30 themes for both desktop and mobile.",
    icon: TimetableXIcon, // Replace with your icon path
    video: "https://www.youtube.com/embed/AJMGprxFs4w?si=TuTb7c3G_6C7i0Dz", // Replace with actual demo video link
    repoLink: null, // Replace with actual repo link
  },
  {
    title: "Leeds Community Badminton Association",
    description:
      "As President, I manage advertising, social media (WeChat and Instagram), poster creation, member database management, and payments. We have a growing presence on Instagram—check us out here.",
    icon: BadmintonIcon, // Replace with your icon path
    video: "https://www.youtube.com/embed/Hm_4AjdkOA4?si=64MMZB33teRTnZH6", // Replace with actual demo video link
    repoLink: null, // Add GitHub repo link if available
  },
];

export const Teams = () => {
  return (
    <section id="teams">
      <h1 className="teamsTitle">Teams I Am Part Of</h1>
      <div className="teamsContainer">
        {teamsData.map((team, index) => (
          <div className="teamBox" key={index}>
            <img
              src={team.icon}
              alt={`${team.title} icon`}
              className="teamIcon"
            />
            <h2 className="teamTitle">{team.title}</h2>
            <p className="teamDescription">{team.description}</p>
            {team.video && (
              <div className="videoWrapper">
                <iframe
                  width="100%"
                  height="315"
                  src={team.video}
                  title={`${team.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {team.repoLink && (
              <a
                href={team.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                Check out the repo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Teams;
