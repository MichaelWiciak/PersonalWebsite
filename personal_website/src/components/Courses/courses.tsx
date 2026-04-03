import { useState } from "react";
import { FiCalendar, FiExternalLink, FiDownload, FiAward } from "react-icons/fi";
import { coursesData, categoryLabels, CourseCategory } from "../../data/courses";

const Courses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CourseCategory | "all">("all");

  const filteredCourses =
    activeTab === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === activeTab);

  const tabs: { value: CourseCategory | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: "cloud", label: categoryLabels.cloud },
    { value: "technical", label: categoryLabels.technical },
    { value: "leadership", label: categoryLabels.leadership },
  ];

  return (
    <section
      id="courses"
      className="w-full max-w-card mx-auto px-4 md:px-8 py-12 flex flex-col items-center"
    >
      <h1 className="text-4xl md:text-5xl font-semibold mb-8">Courses & Certifications</h1>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === tab.value
                ? "bg-accent text-black shadow-accent"
                : "bg-surface-elevated text-text-muted hover:bg-surface hover:text-text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={`${course.title}-${course.issued}`}
            className="p-6 bg-surface-elevated rounded-xl shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col h-full"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <FiAward className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-grow min-w-0">
                <h2 className="text-xl font-semibold text-text-primary mb-1 leading-tight">
                  {course.title}
                </h2>
                <p className="text-sm text-text-muted">{course.provider}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-text-muted">
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar className="w-4 h-4" />
                {course.issued}
              </span>
              {course.expires && (
                <span className="inline-flex items-center gap-1.5 text-amber-400/80">
                  Expires {course.expires}
                </span>
              )}
            </div>

            {course.skills && course.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-medium bg-surface text-text-muted rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-white/10">
              {course.credentialUrl && (
                <a
                  href={course.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-link hover:underline"
                >
                  Verify <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {course.pdfUrl ? (
                <a
                  href={course.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
                >
                  Download <FiDownload className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-sm text-text-muted/50 italic">
                  PDF pending
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
