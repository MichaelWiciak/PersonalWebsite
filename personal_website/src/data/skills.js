export interface Skill {
  name: string;
  level: number;
}

export const languagesData: Skill[] = [
  { name: "Python", level: 100 },
  { name: "Bash", level: 75 },
  { name: "C", level: 80 },
  { name: "C++", level: 60 },
  { name: "Java", level: 60 },
  { name: "TypeScript/JS", level: 70 },
  { name: "Ruby", level: 10 },
  { name: "Go", level: 30 },
  { name: "Rust", level: 40 },
  { name: "MATLAB", level: 30 },
];

export const databasesData: Skill[] = [
  { name: "MySQL", level: 70 },
  { name: "PostgreSQL", level: 75 },
  { name: "SQLite", level: 65 },
  { name: "MongoDB", level: 50 },
];

export const serverTechsData: Skill[] = [
  { name: "GCP", level: 80 },
  { name: "AWS", level: 30 },
  { name: "Vercel", level: 65 },
  { name: "Azure", level: 70 },
  { name: "Next.js", level: 50 },
  { name: "Docker", level: 60 },
  { name: "Cloudflare", level: 65 },
  { name: "Kubernetes", level: 60 },
  { name: "Terraform / IaaS", level: 50 },
  { name: "IBM/Hashicorp Vault", level: 40 },
];
