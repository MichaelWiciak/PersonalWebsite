import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./art.css";
import {
  artImages,
  artDescription,
  artTitle,
  redditUrl,
} from "../../data/art";

export const Art = () => {
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
        breakpoint: 768,
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
        <h2 className="artworkTitle">{artTitle}</h2>
        <span className="artworkDesc">{artDescription}</span>

        <div className="carousel">
          <Slider {...settings}>
            {artImages.map((img, index) => (
              <div key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="redditButton">
          <button
            onClick={() => (window.location.href = redditUrl)}
          >
            Visit Reddit Page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Art;
