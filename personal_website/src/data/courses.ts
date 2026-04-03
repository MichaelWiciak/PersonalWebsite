import azureFunCert from "../assets/certificates/azureFun.jpeg";
import azureFunAICert from "../assets/certificates/azureFunAI.jpeg";
import cirlCert from "../assets/certificates/circl.jpeg";
import commonPurposeInclusiveLeardershipCert from "../assets/certificates/InclusiveLeadership.jpeg";
import commonPurposeGlobalFuturesCert from "../assets/certificates/KualaLumpur.jpeg";
import leedsMentoringCert from "../assets/certificates/UoLMentoring.jpeg";
import InformationSecurityCert from "../assets/certificates/Information Security_Certificate.pdf";
import DataProtectionCert from "../assets/certificates/Data Protection_Certificate.pdf";

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
    credentialUrl:
      "https://www.credly.com/badges/a2874739-d81f-4095-be29-0edeeb7b5e86/public_url",
    skills: [
      "Cloud Architecture",
      "Cloud Computing",
      "Cloud Security",
      "Cloud Storage",
      "Compute Engine",
      "GKE",
      "Google Cloud Platform (GCP)",
      "Identity And Access Management (IAM)",
      "Infrastructure as Code (IaC)",
      "Networking",
      "Pub/sub",
      "SQL",
    ],
  },
  {
    title: "Cloud Digital Leader Certification",
    provider: "Google Cloud",
    issued: "Jan 2026",
    expires: "Jan 2029",
    category: "cloud",
    credentialUrl:
      "https://www.credly.com/badges/64135c97-17ba-4e93-800a-b0deb6e0d47e/public_url",
    skills: [
      "Google Cloud Platform (GCP)",
      "Artificial Intelligence (AI)",
      "Cloud Computing",
      "Cloud Digital Leader",
      "Cloud Security",
      "Data Governance",
      "Google Cloud",
      "IT Digital Transformation",
      "Security and Trust",
    ],
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    provider: "Microsoft",
    issued: "Jun 2024",
    category: "cloud",
    credentialUrl:
      "https://www.certiport.com/portal/pages/credentialverification.aspx",
    pdfUrl: azureFunAICert,
    skills: [
      "Responsible AI",
      "Model Evaluation",
      "Machine Learning",
      "Text Mining",
      "Applied Machine Learning",
      "Artificial Intelligence",
      "Image Analysis",
      "Natural Language Processing",
      "Data Ethics",
      "Computer Vision",
    ],
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    issued: "Jun 2024",
    category: "cloud",
    credentialUrl:
      "https://www.certiport.com/portal/pages/credentialverification.aspx",
    pdfUrl: azureFunCert,
    skills: [
      "Cloud Computing",
      "Cloud Computing Architecture",
      "Cloud Deployment",
      "Cloud Infrastructure",
      "Load Balancing",
      "Cloud Management",
      "Cloud Platforms",
      "Cloud Services",
      "Disaster Recovery",
      "Identity and Access Management",
      "Infrastructure as Code (IaC)",
      "Patch Management",
      "System Monitoring",
    ],
  },

  // Technical Courses
  {
    title: "Machine Learning",
    provider: "Stanford Online",
    issued: "Aug 2021",
    category: "technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/37CUBRF9V95Y",
    skills: [
      "Applied Machine Learning",
      "Artificial Intelligence",
      "Data Ethics",
      "Data Preprocessing",
      "Decision Tree Learning",
      "Deep Learning",
      "Feature Engineering",
      "Machine Learning",
      "Model Evaluation",
      "Predictive Modeling",
      "Random Forest Algorithm",
      "Reinforcement Learning",
      "Supervised Learning",
      "Transfer Learning",
      "Unsupervised Learning",
    ],
  },
  {
    title: "Cryptography",
    provider: "Stanford Online",
    issued: "Sep 2021",
    category: "technical",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/YYJPBKBMXYGY",
    skills: [
      "Authentications",
      "Cybersecurity",
      "Public Key Cryptography Standards (PKCS)",
      "Key Management",
      "Computational Thinking",
      "Encryption",
      "Secure Coding",
      "Algorithms",
      "Data Integrity",
      "Cryptography",
      "Advanced Encryption Standard (AES)",
    ],
  },
  {
    title: "Amateur Radio Examination Foundation Level",
    provider: "Radio Society of Great Britain",
    issued: "Feb 2025",
    category: "technical",
    skills: ["Radio Communications"],
  },

  // Leadership & Soft Skills
  {
    title: "Circl Leader As Coach",
    provider: "Circl",
    issued: "Mar 2024",
    category: "leadership",
    pdfUrl: cirlCert,
    skills: ["Team Leadership", "Management", "Coaching"],
  },
  {
    title: "Inclusive Leadership",
    provider: "Common Purpose",
    issued: "May 2025",
    category: "leadership",
    pdfUrl: commonPurposeInclusiveLeardershipCert,
    skills: ["Inclusive Leadership", "Public Speaking"],
  },
  {
    title: "OD&PL Foundations in Teaching",
    provider: "University of Leeds",
    issued: "Oct 2024",
    category: "leadership",
    skills: ["Teaching", "University Lecturing"],
  },
  {
    title: "Global Futures Experience Consortium - Kuala Lumpur",
    provider: "Common Purpose",
    issued: "Aug 2025",
    category: "leadership",
    pdfUrl: commonPurposeGlobalFuturesCert,
    skills: ["Cross-cultural Leadership", "Global Perspective"],
  },
  {
    title: "eMentoring Scheme 2025",
    provider: "University of Leeds",
    issued: "Jun 2025",
    category: "leadership",
    pdfUrl: leedsMentoringCert,
    skills: ["Mentoring"],
  },
  {
    title: "Information Security",
    provider: "University of Leeds",
    issued: "Oct 2024",
    category: "technical",
    pdfUrl: InformationSecurityCert,
    skills: ["Information Security", "Cybersecurity", "Risk Management"],
  },
  {
    title: "Data Protection",
    provider: "University of Leeds",
    issued: "Oct 2024",
    category: "technical",
    pdfUrl: DataProtectionCert,
    skills: ["Data Protection", "GDPR"],
  },
];

export const categoryLabels: Record<CourseCategory, string> = {
  cloud: "Cloud",
  technical: "Technical",
  leadership: "Leadership",
};
