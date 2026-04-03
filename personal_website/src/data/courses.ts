export type CourseCategory = "cloud" | "technical" | "leadership";

export interface Course {
  title: string;
  provider: string;
  issued: string;
  expires?: string;
  category: CourseCategory;
  credentialUrl?: string;
  pdfUrl?: string;
  skills?: string[];
}

export const coursesData: Course[] = [
  // Cloud Certifications
  {
    title: "Associate Cloud Engineer Certification",
    provider: "Google Cloud",
    issued: "Mar 2026",
    expires: "Mar 2029",
    category: "cloud",
    credentialUrl: "https://www.credential.net/",
    pdfUrl: "/assets/certificates/google-associate-cloud-engineer.pdf",
    skills: ["Google Cloud Platform (GCP)"],
  },
  {
    title: "Cloud Digital Leader Certification",
    provider: "Google Cloud",
    issued: "Jan 2026",
    expires: "Jan 2029",
    category: "cloud",
    credentialUrl: "https://www.credential.net/",
    pdfUrl: "/assets/certificates/google-cloud-digital-leader.pdf",
    skills: ["Google Cloud Platform (GCP)"],
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    provider: "Microsoft",
    issued: "Jun 2024",
    category: "cloud",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/",
    pdfUrl: "/assets/certificates/azure-ai-fundamentals.pdf",
    skills: ["Microsoft Azure Machine Learning", "Microsoft Azure Bot Services"],
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    issued: "Jun 2024",
    category: "cloud",
    credentialUrl: "https://learn.microsoft.com/en-us/credentials/certifications/",
    pdfUrl: "/assets/certificates/azure-fundamentals.pdf",
    skills: ["Microsoft Azure", "Cloud Data"],
  },

  // Technical Courses
  {
    title: "Machine Learning",
    provider: "Stanford Online",
    issued: "Aug 2021",
    category: "technical",
    credentialUrl: "https://www.coursera.org/programs/stanford-online",
    pdfUrl: "/assets/certificates/stanford-machine-learning.pdf",
    skills: ["Machine Learning"],
  },
  {
    title: "Cryptography",
    provider: "Stanford Online",
    issued: "Sep 2021",
    category: "technical",
    credentialUrl: "https://www.coursera.org/programs/stanford-online",
    pdfUrl: "/assets/certificates/stanford-cryptography.pdf",
    skills: ["Cryptography"],
  },
  {
    title: "Amateur Radio Examination Foundation Level",
    provider: "Radio Society of Great Britain",
    issued: "Feb 2025",
    category: "technical",
    pdfUrl: "/assets/certificates/rsgb-amatuer-radio.pdf",
    skills: ["Radio Communications"],
  },

  // Leadership & Soft Skills
  {
    title: "Circl Leader As Coach",
    provider: "Circl",
    issued: "Mar 2024",
    category: "leadership",
    pdfUrl: "/assets/certificates/circl-leader-as-coach.pdf",
    skills: ["Team Leadership", "Management", "Coaching"],
  },
  {
    title: "Inclusive Leadership",
    provider: "Common Purpose",
    issued: "May 2025",
    category: "leadership",
    pdfUrl: "/assets/certificates/common-purpose-inclusive-leadership.pdf",
    skills: ["Inclusive Leadership", "Public Speaking"],
  },
  {
    title: "OD&PL Foundations in Teaching",
    provider: "University of Leeds",
    issued: "Oct 2024",
    category: "leadership",
    pdfUrl: "/assets/certificates/leeds-odpl-foundations.pdf",
    skills: ["Teaching", "University Lecturing"],
  },
  {
    title: "Global Futures Experience Consortium - Kuala Lumpur",
    provider: "Common Purpose",
    issued: "Aug 2025",
    category: "leadership",
    pdfUrl: "/assets/certificates/common-purpose-global-futures.pdf",
    skills: ["Cross-cultural Leadership", "Global Perspective"],
  },
  {
    title: "eMentoring Scheme 2025",
    provider: "University of Leeds",
    issued: "Jun 2025",
    category: "leadership",
    pdfUrl: "/assets/certificates/leeds-ementoring.pdf",
    skills: ["Mentoring"],
  },
];

export const categoryLabels: Record<CourseCategory, string> = {
  cloud: "Cloud",
  technical: "Technical",
  leadership: "Leadership",
};
