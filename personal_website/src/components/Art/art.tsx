import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./art.css";
import { artImages, artDescription, artTitle, redditUrl } from "../../data/art";
import { LinkButton } from "../ui/Button";

const Art: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [totalSlides] = useState(artImages.length);

  const onDotClick = useCallback(
    (index: number) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi]
  );

  emblaApi?.on("select", () => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  });

  return (
    <section id="artworkPage">
      <div className="artworkPageTitle">Art</div>
      <div id="artwork">
        <h2 className="artworkTitle">{artTitle}</h2>
        <span className="artworkDesc">{artDescription}</span>

        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {artImages.map((img, index) => (
                <div className="embla__slide" key={index}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="embla__dots">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
                onClick={() => onDotClick(index)}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="redditButton">
          <LinkButton href={redditUrl} external={true}>Visit Reddit Page</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Art;
