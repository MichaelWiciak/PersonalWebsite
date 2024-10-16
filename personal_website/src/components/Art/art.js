import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Art = () => {
  // Replace with the actual paths to your images
  const images = [
    "../../assets/carouselImages/img1.png",
    "../../assets/carouselImages/img2.png",
    "../../assets/carouselImages/img3.png",
    "../../assets/carouselImages/img4.png",
    "../../assets/carouselImages/img5.png",
    "../../assets/carouselImages/img6.png",
    "../../assets/carouselImages/img7.png",
    "../../assets/carouselImages/img8.png",
    "../../assets/carouselImages/img9.png",
    "../../assets/carouselImages/img10.png",
  ];

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
        <h1 className="artworkTitle">My Artwork</h1>
        <span className="artworkDesc">Check out my creations on Reddit!</span>

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
