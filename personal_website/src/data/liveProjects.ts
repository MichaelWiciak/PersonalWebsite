export interface LiveProject {
  id: string;
  title: string;
  tagline: string;
  techStack?: string[];
  description?: string[];
  videoUrls?: string[];
  link: string;
}

export const liveProjects: LiveProject[] = [
  {
    id: "timetablex",
    title: "TimetableX",
    tagline:
      "Calendar app for university students. All lectures, assessments, and coursework in one place. 100+ users, 1000+ assessments tracked.",
    techStack: ["React", "TypeScript", "Tailwind", "Python", "MongoDB", "Prisma", "tRPC"],
    videoUrls: [
      "https://www.youtube.com/embed/AJMGprxFs4w",
      "https://www.youtube.com/embed/UzGAbXAKeFg",
    ],
    link: "https://uni.timetablex.com",
  },
  {
    id: "sports-booker",
    title: "Sports Booker",
    tagline:
      "Automated booking system for badminton courts. 6,000+ bookings facilitated, serving 50+ users across two private clubs.",
    techStack: ["Next.js", "TypeScript", "Docker", "PostgreSQL", "Discord API", "Chromium"],
    videoUrls: ["https://www.youtube.com/embed/Hm_4AjdkOA4"],
    link: "https://sportsbooker.timetablex.com",
  },
  {
    id: "direct-d-stress",
    title: "Direct D-Stress",
    tagline:
      "WordPress site with custom booking system. #1 on Google for Chinese Physio-Massage Therapy in Leeds. 100+ bookings in first month.",
    techStack: ["WordPress", "PHP", "Amelia Plugin", "SEO"],
    link: "https://directd-stress.co.uk",
  },
];
