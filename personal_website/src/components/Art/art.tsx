import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { artImages, artDescription, artTitle, redditUrl } from "../../data/art";
import { LinkButton } from "../ui/Button";

const Art: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <section id="artworkPage" className="w-full max-w-container mx-auto px-4 md:px-8 py-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Art</h1>

      <div className="w-full max-w-[60rem] p-6 md:p-8 bg-surface-elevated rounded-xl shadow-card">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{artTitle}</h2>
        <p className="text-base md:text-lg font-light mb-6 text-center">{artDescription}</p>

        <div className="w-full max-w-[65rem] mx-auto relative">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex backface-hidden">
              {artImages.map((img, index) => (
                <div className="flex-none basis-full min-w-0 relative" key={index}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto rounded-lg"
                    style={{ boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 mt-4">
            {artImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full bg-white/30 border-none cursor-pointer p-0 transition-colors duration-300 hover:bg-white/50 ${
                  index === selectedIndex ? "bg-[#f0a500]" : ""
                }`}
                onClick={() => onDotClick(index)}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <LinkButton href={redditUrl} external={true} variant="secondary">
            Visit Reddit Page
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Art;
