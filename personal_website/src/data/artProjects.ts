import BackgroundMakerImage1 from "../assets/carouselImages/img1.png";
import BackgroundMakerImage2 from "../assets/carouselImages/img2.png";
import BackgroundMakerImage3 from "../assets/carouselImages/img3.png";
import BackgroundMakerImage4 from "../assets/carouselImages/img4.png";
import BackgroundMakerImage5 from "../assets/carouselImages/img5.png";
import BackgroundMakerImage6 from "../assets/carouselImages/img6.png";
import BackgroundMakerImage7 from "../assets/carouselImages/img7.png";
import BackgroundMakerImage8 from "../assets/carouselImages/img8.png";
import BackgroundMakerImage9 from "../assets/carouselImages/img9.png";
import BackgroundMakerImage10 from "../assets/carouselImages/img10.png";

export interface ProjectImage {
  src: string;
  alt: string;
}

export type ArtProjectTag = "background-maker" | "physarum";

export interface ArtProject {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  repoUrl: string;
  liveUrl?: string;
  images?: ProjectImage[];
  gifUrl?: string;
  tags: ArtProjectTag[];
  isFeatured: boolean;
  sortOrder: number;
}

export const artProjects: ArtProject[] = [
  {
    id: "background-maker",
    title: "BackgroundMaker",
    tagline: "Procedurally generated wallpapers for any resolution",
    description:
      "A Python project that generates random, vibrant wallpapers using the randimage library. Supports any resolution and automatically scales images for perfect fit. Features include batch generation, Reddit integration via API, and a Discord bot for on-demand generation.",
    techStack: ["Python", "randimage", "Pillow", "matplotlib", "Reddit API"],
    repoUrl: "https://github.com/MichaelWiciak/BackgroundMaker",
    liveUrl: "https://www.reddit.com/r/randimageMW",
    images: [
      { src: BackgroundMakerImage1, alt: "Procedural wallpaper 1" },
      { src: BackgroundMakerImage2, alt: "Procedural wallpaper 2" },
      { src: BackgroundMakerImage3, alt: "Procedural wallpaper 3" },
      { src: BackgroundMakerImage4, alt: "Procedural wallpaper 4" },
      { src: BackgroundMakerImage5, alt: "Procedural wallpaper 5" },
      { src: BackgroundMakerImage6, alt: "Procedural wallpaper 6" },
      { src: BackgroundMakerImage7, alt: "Procedural wallpaper 7" },
      { src: BackgroundMakerImage8, alt: "Procedural wallpaper 8" },
      { src: BackgroundMakerImage9, alt: "Procedural wallpaper 9" },
      { src: BackgroundMakerImage10, alt: "Procedural wallpaper 10" },
    ],
    tags: ["background-maker"],
    isFeatured: true,
    sortOrder: 1,
  },
  {
    id: "physarum",
    title: "Physarum",
    tagline: "Agent-based simulation of Slime Mold behavior",
    description:
      "A computational biology project simulating the behaviour of Physarum polycephalum (slime mold) using agent-based modeling. Implements sensor arrays, pheromone deposition, and diffusion kernels to replicate the emergent maze-solving and network optimisation behaviours observed in nature.",
    techStack: ["Python", "NumPy", "OpenCV", "Numba"],
    repoUrl: "https://github.com/MichaelWiciak/Physarum",
    gifUrl: "https://github.com/MichaelWiciak/Physarum/raw/main/simulation.gif",
    tags: ["physarum"],
    isFeatured: true,
    sortOrder: 2,
  },
];
