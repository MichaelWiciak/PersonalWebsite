import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./art.css";

import Img1 from "../../assets/carouselImages/img1.png";
import Img2 from "../../assets/carouselImages/img2.png";
import Img3 from "../../assets/carouselImages/img3.png";
import Img4 from "../../assets/carouselImages/img4.png";
import Img5 from "../../assets/carouselImages/img5.png";
import Img6 from "../../assets/carouselImages/img6.png";
import Img7 from "../../assets/carouselImages/img7.png";
import Img8 from "../../assets/carouselImages/img8.png";
import Img9 from "../../assets/carouselImages/img9.png";
import Img10 from "../../assets/carouselImages/img10.png";

export const Art = () => {
  // Array of image paths
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];
  // Replace with the actual paths to your images
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="artworkPage">
      <div className="artworkPageTitle">Art</div>
      <div id="artwork">
        <h2 className="artworkTitle">
          Procedurally Generated Wallpapers: A Splash of Color for Your Screens
          🎨✨
        </h2>
        <span className="artworkDesc">
          Ever wished for high-quality wallpapers that perfectly fit any
          resolution? Enter the Procedurally Generated Wallpapers project! Tired
          of blurry backgrounds that don’t do justice to your device’s stunning
          display, I took matters into my own hands. With this code, you can
          generate crisp, vibrant wallpapers tailored to your screen's
          resolution. Plus, don’t forget to check out the fun over at my
          Subreddit, r/randimageMW, where you can see the awesome creations from
          myself and other enthusiasts. Get ready to level up your wallpaper
          game!
        </span>

        {/* Carousel of images */}
        <div className="carousel">
          <Slider {...settings}>
            {images.map((imgSrc, index) => (
              <div key={index}>
                <img
                  src={imgSrc}
                  alt={`Artwork ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Button to redirect to Reddit */}
        <div className="redditButton">
          <button
            onClick={() =>
              (window.location.href = "https://www.reddit.com/r/randimageMW")
            }
          >
            Visit Reddit Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Art;
