import { coursesData } from "../../data/courses";

const Courses: React.FC = () => {
  return (
    <section id="courses" className="w-full max-w-container mx-auto px-4 md:px-8 py-8 flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Courses</h1>

      <ul className="w-full max-w-[60rem] p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card list-none m-0">
        {coursesData.map((course, index) => (
          <li
            key={index}
            className="mb-10 pb-6 border-b border-white/10 last:border-b-0 last:mb-0 last:pb-0 first:mt-4"
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-center">{course.title}</h2>
            {course.id && (
              <span className="text-base font-light text-gray-400 block mb-2 text-center">
                ID: {course.id}
              </span>
            )}
            <span className="text-base font-light text-gray-400 block mb-4 text-center">
              Issued: {course.issued}
            </span>
            <p className="text-lg font-normal text-white mt-4 mx-4 text-justify md:text-center leading-relaxed">
              {course.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;
