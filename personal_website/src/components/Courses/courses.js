import React from "react";
import "./courses.css";

export const Courses = () => {
  const courses = [
    {
      title: "Machine Learning – Stanford Online",
      id: "37CUBRF9V95Y",
      issued: "08/2021",
      description:
        "An 11-week course taught by Andrew Ng, covering supervised and unsupervised learning, neural networks, and best practices in machine learning. Used MATLAB and Python.",
    },
    {
      title: "Cryptography – Stanford Online",
      id: "YYJPBKBMXYGY",
      issued: "09/2021",
      description:
        "An 11-week course taught by Dan Boneh, covering encryption, digital signatures, public-key cryptography, and security protocols. Used Python.",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals – Microsoft",
      id: "XeUv-XMpE",
      issued: "06/2024",
      description:
        "A 6-month course on core AI concepts, machine learning, natural language processing, and deploying AI solutions using Azure. Used Python.",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals – Microsoft",
      id: "wbd2V-Fa44",
      issued: "06/2024",
      description:
        "A 6-month course covering Azure cloud services, core cloud concepts, and cost management in cloud computing. Used Python.",
    },
    {
      title: "Circl Leader As Coach – Circl in partnership with Dice",
      issued: "03/2024",
      description:
        "A leadership course focused on mentorship, coaching, and empowering people, taught by Ronke Kokoruwe.",
    },
  ];

  return (
    <section id="courses">
      <h1 className="coursesTitle">Courses</h1>
      <ul className="courseList">
        {courses.map((course, index) => (
          <li key={index} className="courseItem">
            <h2 className="courseTitle">{course.title}</h2>
            <span className="courseId">ID: {course.id}</span> <br />
            <span className="courseIssued">Issued: {course.issued}</span>
            <p className="courseDescription">{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
