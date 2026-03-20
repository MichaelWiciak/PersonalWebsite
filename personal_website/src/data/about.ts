export interface AboutData {
  description: string;
  links: {
    text: string;
    url: string;
  }[];
}

export const aboutData: AboutData = {
  description: `I am a Graduate Software Engineer at Lloyds Banking Group with a
        First-Class MEng BSc in Computer Science from the University of Leeds.`,
  links: [
    {
      text: "uni.TimetableX.com",
      url: "https://uni.TimetableX.com",
    },
    {
      text: "SportsBooker.timetablex.com",
      url: "https://SportsBooker.timetablex.com",
    },
  ],
};

export const additionalSkills: string = `From systems programming in Rust and C++ to full-stack TypeScript and
        Python, I build high-impact software that automates processes and
        improves daily workflows for hundreds of users.`;
