import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiGithub } from "react-icons/fi";

export interface MediaItem {
  src: string;
  alt?: string;
  type?: "image" | "video";
}

interface ProjectMediaProps {
  images?: MediaItem[];
  videoUrl?: string;
  title: string;
}

const ProjectMedia: React.FC<ProjectMediaProps> = ({
  images,
  videoUrl,
  title,
}) => {
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
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  const hasImages = images && images.length > 0;
  const hasVideo = !!videoUrl;
  const hasMedia = hasImages || hasVideo;
  const hasMultipleImages = images && images.length > 1;
  const hasMultipleMedia = hasMultipleImages || (hasVideo && hasImages);

  if (!hasMedia) {
    return (
      <div className="w-full h-full min-h-[250px] bg-surface flex items-center justify-center rounded-lg" role="img" aria-label="No preview available">
        <div className="text-center text-text-muted">
          <FiGithub className="w-16 h-16 mx-auto mb-2 opacity-50" aria-hidden="true" />
          <p className="text-sm">No preview available</p>
        </div>
      </div>
    );
  }

  if (hasVideo && !hasMultipleMedia) {
    return (
      <div className="w-full h-full">
        <iframe
          className="w-full h-full min-h-[250px] rounded-lg"
          src={videoUrl}
          title={`${title} demo`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  const mediaItems: MediaItem[] = [
    ...(videoUrl ? [{ src: videoUrl, type: "video" as const }] : []),
    ...(images?.map((img) => ({ ...img, type: "image" as const })) || []),
  ];

  return (
    <div className="w-full h-full relative" role="region" aria-label={`${title} media carousel`}>
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full" role="list">
          {mediaItems.map((item, index) => (
            <div className="flex-none basis-full min-w-0 h-full" key={index} role="listitem">
              {item.type === "video" ? (
                <iframe
                  className="w-full h-full min-h-[250px] rounded-lg"
                  src={item.src}
                  title={`${title} demo`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt || `${title} preview ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {hasMultipleMedia && (
        <div className="flex justify-center items-center gap-2 mb-4" role="tablist" aria-label="Carousel navigation">
          {mediaItems.map((item, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-white/30 border-none cursor-pointer p-0 transition-colors duration-300 hover:bg-white/50 ${
                index === selectedIndex ? "bg-[#f0a500]" : ""
              }`}
              onClick={() => onDotClick(index)}
              type="button"
              role="tab"
              aria-selected={index === selectedIndex}
              aria-label={`View ${item.type === "video" ? "video" : `image ${index + 1}`}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectMedia;
