import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Art = () => {
  // Replace with the actual paths to your images
  const images = [
    "/images/art1.jpg",
    "/images/art2.jpg",
    "/images/art3.jpg",
    "/images/art4.jpg",
    "/images/art5.jpg",
    "/images/art6.jpg",
    "/images/art7.jpg",
    "/images/art8.jpg",
    "/images/art9.jpg",
    "/images/art10.jpg",
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
