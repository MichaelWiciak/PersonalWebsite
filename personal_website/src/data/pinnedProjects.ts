import CodeCompletionImage1 from "../assets/ProjectsData/codeCompletionProject/better.png";
import CodeCompletionImage2 from "../assets/ProjectsData/codeCompletionProject/code_token_lengths_histogram.png";
import CodeCompletionImage3 from "../assets/ProjectsData/codeCompletionProject/correctnessGraph.png";
import CodeCompletionImage4 from "../assets/ProjectsData/codeCompletionProject/maskingSizeRation.png";
import CodeCompletionImage5 from "../assets/ProjectsData/codeCompletionProject/notSmothedTime.png";
import CodeCompletionImage6 from "../assets/ProjectsData/codeCompletionProject/pipeline.png";
import CodeCompletionImage7 from "../assets/ProjectsData/codeCompletionProject/timedocstring.png";
import CodeCompletionImage8 from "../assets/ProjectsData/codeCompletionProject/timeSmoothed.png";

import PlayingWithBashImage1 from "../assets/ProjectsData/PlayingWithBash/image-0.png";
import PlayingWithBashImage2 from "../assets/ProjectsData/PlayingWithBash/image-1.png";
import PlayingWithBashImage3 from "../assets/ProjectsData/PlayingWithBash/image-2.png";
import PlayingWithBashImage4 from "../assets/ProjectsData/PlayingWithBash/image.png";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface PinnedProject {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  repoUrl: string;
  videoUrl?: string;
  thumbnail?: string;
  images?: ProjectImage[];
}

export const pinnedProjects: PinnedProject[] = [
  {
    id: "robonaut",
    title: "RoboNaut",
    tagline:
      "A TurtleBot that explores spacecraft modules, identifies Earth and Moon through windows, and performs basic astronomy.",
    techStack: ["ROS2", "Nav2", "OpenCV", "PyTorch", "Gazebo", "Python"],
    repoUrl: "https://github.com/MichaelWiciak/TurtleBotInAExploringSpaceship",
    videoUrl: "https://www.youtube.com/embed/UU7TQqW6gh0",
  },
  {
    id: "xv6-memory-allocator",
    title: "XV6 Memory Allocator",
    tagline:
      "A custom malloc/free implementation from scratch using linked lists, built into MIT's XV6 operating system for RISC-V.",
    techStack: ["C", "RISC-V", "QEMU", "XV6"],
    repoUrl: "https://github.com/MichaelWiciak/xv6-memory-allocator",
  },
  {
    id: "htvp",
    title: "Hot Tomato Video Player",
    tagline:
      "A responsive Qt desktop video player with multi-platform support, theming, and full keyboard controls.",
    techStack: ["Qt", "C++", "QSS", "Qt Multimedia"],
    repoUrl: "https://github.com/MichaelWiciak/VideoPlayer",
    videoUrl: "https://www.youtube.com/embed/sPTKfwrXlgI",
  },
  {
    id: "space-sponge",
    title: "Space Sponge",
    tagline:
      "Computer vision pipeline for planet classification using Hough Circle Transform and MobileNetV2 transfer learning.",
    techStack: ["Python", "PyTorch", "OpenCV", "CNN", "MobileNetV2"],
    repoUrl: "https://github.com/MichaelWiciak/SpaceSponge",
  },
  {
    id: "transformer-code-completion",
    title: "Code Completion with Transformers",
    tagline:
      "LoRA fine-tuned CodeBERT and RoBERTa models for code completion using Masked Language Modeling.",
    techStack: ["Python", "PyTorch", "Transformers", "LoRA", "NLP"],
    repoUrl: "https://github.com/MichaelWiciak/TransformerCodeCompletion",
    images: [
      { src: CodeCompletionImage1, alt: "Code Completion Results" },
      { src: CodeCompletionImage2, alt: "Code Token Lengths Histogram" },
      { src: CodeCompletionImage3, alt: "Correctness Graph" },
      { src: CodeCompletionImage4, alt: "Masking Size Ratio" },
      { src: CodeCompletionImage5, alt: "Not Smoothed Time" },
      { src: CodeCompletionImage6, alt: "Pipeline Diagram" },
      { src: CodeCompletionImage7, alt: "Time with Docstring" },
      { src: CodeCompletionImage8, alt: "Time Smoothed" },
    ],
  },
  {
    id: "playing-with-bash",
    title: "PlayingWithBash",
    tagline:
      "A collection of Bash utility scripts including weather fetcher, system monitor, and password generator.",
    techStack: ["Bash", "Python", "Shell Scripting"],
    repoUrl: "https://github.com/MichaelWiciak/PlayingWithBash",
    images: [
      { src: PlayingWithBashImage1, alt: "Weather Fetcher Script" },
      { src: PlayingWithBashImage2, alt: "System Monitor Script" },
      { src: PlayingWithBashImage3, alt: "Password Generator Script" },
      { src: PlayingWithBashImage4, alt: "All Scripts Overview" },
    ],
  },
];

export const GITHUB_PROFILE_URL = "https://github.com/MichaelWiciak";
