import "./courses.css";
import { coursesData } from "../../data/courses";

export const Courses = () => {
  return (
    <section id="courses">
      <h1 className="coursesTitle">Courses</h1>
      <ul className="courseList">
        {coursesData.map((course, index) => (
          <li key={index} className="courseItem">
            <h2 className="courseTitle">{course.title}</h2>
            {course.id && <span className="courseId">ID: {course.id}</span>}
            <span className="courseIssued">Issued: {course.issued}</span>
            <p className="courseDescription">{course.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
