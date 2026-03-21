import Img1 from "../assets/carouselImages/img1.png";
import Img2 from "../assets/carouselImages/img2.png";
import Img3 from "../assets/carouselImages/img3.png";
import Img4 from "../assets/carouselImages/img4.png";
import Img5 from "../assets/carouselImages/img5.png";
import Img6 from "../assets/carouselImages/img6.png";
import Img7 from "../assets/carouselImages/img7.png";
import Img8 from "../assets/carouselImages/img8.png";
import Img9 from "../assets/carouselImages/img9.png";
import Img10 from "../assets/carouselImages/img10.png";

export interface ArtImage {
  src: string;
  alt: string;
}

export const artImages: ArtImage[] = [
  { src: Img1, alt: "Artwork 1" },
  { src: Img2, alt: "Artwork 2" },
  { src: Img3, alt: "Artwork 3" },
  { src: Img4, alt: "Artwork 4" },
  { src: Img5, alt: "Artwork 5" },
  { src: Img6, alt: "Artwork 6" },
  { src: Img7, alt: "Artwork 7" },
  { src: Img8, alt: "Artwork 8" },
  { src: Img9, alt: "Artwork 9" },
  { src: Img10, alt: "Artwork 10" },
];

export const artDescription: string = `Ever wished for high-quality wallpapers that perfectly fit any
          resolution? Enter the Procedurally Generated Wallpapers project! Tired
          of blurry backgrounds that don't do justice to your device's stunning
          display, I took matters into my own hands. With this code, you can
          generate crisp, vibrant wallpapers tailored to your screen's
          resolution. Plus, don't forget to check out the fun over at my
          Subreddit, r/randimageMW, where you can see the awesome creations from
          myself and other enthusiasts. Get ready to level up your wallpaper
          game!`;

export const artTitle: string =
  "Procedurally Generated Wallpapers: A Splash of Color for Your Screens 🎨✨";

export const redditUrl: string = "https://www.reddit.com/r/randimageMW";
