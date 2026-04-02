export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "codewars";
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/MichaelWiciak",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/michaelwiciak/",
    icon: "linkedin",
  },
  {
    name: "CodeWars",
    url: "https://www.codewars.com/users/MichaelWiciak",
    icon: "codewars",
  },
];
