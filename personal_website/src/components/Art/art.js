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
      <div id="artwork">
        <h1 className="artworkTitle">Procedurally Generated Wallpapers</h1>
        <span className="artworkDesc">
          I wanted a way of generating high quality wallpapers for any
          resolutions, so I made code that does that. Problem I always had was
          that since the resolution of the wallpaper I wanted and the target
          device didn't match exactly, the image because blurry and quality has
          really decreased. I wanted high quality wallpapers so I could see the
          crisp quality of the device screen to the max. So I made this.
          Checkout the BackgroundMaker repo on my GitHub for details.
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
