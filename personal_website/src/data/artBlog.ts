export interface BlogPost {
  id: string;
  projectId: string;
  title: string;
  slug: string;
  date: string;
  readingTime: number;
  excerpt: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  // {
  //   id: "physarum-mathematics",
  //   projectId: "physarum",
  //   title: "The Mathematics Behind Physarum",
  //   slug: "physarum-mathematics",
  //   date: "2026-04-04",
  //   readingTime: 8,
  //   excerpt: "An exploration of the differential equations and agent-based modeling that powers the Physarum simulation.",
  //   tags: ["physarum", "mathematics", "simulation"],
  // },
];
