import { useEffect, useRef, useCallback } from "react";

const CONFIG = {
  desktopParticleCount: 200,
  mobileParticleCount: 40,
  minSizePx: 3,
  maxSizePx: 10,
  fallDurationBase: 15,
  fallDurationRange: 5,
  speedMultiplier: 1,
  spawnIntervalMs: 8000,
  maxPerLayer: 20,
  layers: 10,
};

const COLORS = ["#ffffff", "#f2f2f2", "#d9d9d9", "#bfbfbf", "#a6a6a6"];
const SHAPES = ["100%", "50% 50%", "25% 75%", "75% 25%"];

const getParticleConfig = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  return {
    count: isMobile ? CONFIG.mobileParticleCount : CONFIG.desktopParticleCount,
  };
};

interface ParticleLayer {
  className: string;
  duration: number;
  zIndex: number;
}

const createLayers = (): ParticleLayer[] =>
  Array.from({ length: CONFIG.layers }, (_, i) => ({
    className: `particle-layer${i + 1}`,
    duration: (CONFIG.fallDurationBase + i * 0.5) / CONFIG.speedMultiplier,
    zIndex: -i - 1,
  }));

const Particles: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const createParticle = useCallback(
    (layer: ParticleLayer, staggerDelay = 0) => {
      if (!containerRef.current) return;

      const particle = document.createElement("div");
      particle.className = `particle ${layer.className}`;

      const startX = -30 + Math.random() * 100;
      const endX = 50 + (Math.random() - 0.5) * 30;

      const startY = -15 + Math.random() * 10;
      particle.style.top = `${startY}vh`;
      particle.style.left = `${startX}vw`;
      particle.style.setProperty("--drift-x", `${endX}vw`);

      const size =
        CONFIG.minSizePx +
        Math.random() * (CONFIG.maxSizePx - CONFIG.minSizePx);
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      particle.style.backgroundColor =
        COLORS[Math.floor(Math.random() * COLORS.length)];
      particle.style.borderRadius =
        SHAPES[Math.floor(Math.random() * SHAPES.length)];

      const duration =
        (layer.duration + Math.random() * CONFIG.fallDurationRange) /
        CONFIG.speedMultiplier;
      particle.style.animationDuration = `${duration}s`;

      if (staggerDelay !== 0) {
        particle.style.animationDelay = `${staggerDelay}s`;
      }

      containerRef.current.appendChild(particle);

      particle.addEventListener("animationend", () => {
        particle.remove();
      });
    },
    [],
  );

  const spawnParticles = useCallback(
    (count: number, layers: ParticleLayer[], stagger = false) => {
      for (let i = 0; i < count; i++) {
        const layer = layers[i % layers.length];
        const delay = stagger ? -Math.random() * 10 - 5 : 0;
        createParticle(layer, delay);
      }
    },
    [createParticle],
  );

  const replenishParticles = useCallback(() => {
    if (!containerRef.current) return;

    const layers = createLayers();
    let totalMissing = 0;
    const missingPerLayer: number[] = [];

    layers.forEach((layer) => {
      const current = containerRef.current!.querySelectorAll(
        `.${layer.className}`,
      ).length;
      const missing = CONFIG.maxPerLayer - current;
      missingPerLayer.push(missing);
      totalMissing += missing;
    });

    if (totalMissing > 0) {
      let remaining = totalMissing;
      for (let i = 0; i < layers.length && remaining > 0; i++) {
        const toSpawn = Math.min(
          missingPerLayer[i],
          Math.ceil(remaining / (layers.length - i)),
        );
        for (let j = 0; j < toSpawn; j++) {
          createParticle(layers[i]);
        }
        remaining -= toSpawn;
      }
    }
  }, [createParticle]);

  useEffect(() => {
    const particles = getParticleConfig();
    const layers = createLayers();

    spawnParticles(particles.count, layers, true);

    intervalRef.current = window.setInterval(
      replenishParticles,
      CONFIG.spawnIntervalMs,
    );

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [spawnParticles, replenishParticles]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -10 }}
      aria-hidden="true"
    />
  );
};

export default Particles;
