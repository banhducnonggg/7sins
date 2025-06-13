import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";

const images = [
  { src: "/gluttony/0.webp", alt: "Gluttony image 1" },
  { src: "/gluttony/1.webp", alt: "Gluttony image 2" },
  { src: "/gluttony/2.webp", alt: "Gluttony image 3" },
  { src: "/gluttony/3.webp", alt: "Gluttony image 4" },
  { src: "/gluttony/4.webp", alt: "Gluttony image 5" },
  { src: "/gluttony/5.webp", alt: "Gluttony image 6" },
  { src: "/gluttony/6.webp", alt: "Gluttony image 7" },
] as const;

type Position = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
};

export default function GluttonyContent() {
  const [positions, setPositions] = useState<Position[]>([]);
  const [isGrid, setIsGrid] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Memoize device type calculations
  const deviceType = useMemo(() => ({
    isMobile: windowWidth < 768,
    isTablet: windowWidth >= 768 && windowWidth < 1024,
    isDesktop: windowWidth >= 1024,
  }), [windowWidth]);

  // Memoize spread configuration
  const spreadConfig = useMemo(() => {
    const { isMobile, isTablet } = deviceType;
    
    if (isMobile) {
      return {
        xSpread: 300,
        ySpread: 800,
        yOffset: -50,
      };
    }
    if (isTablet) {
      return {
        xSpread: 400,
        ySpread: 400,
        yOffset: 0,
      };
    }
    return {
      xSpread: 500,
      ySpread: 100,
      yOffset: 50,
    };
  }, [deviceType]);

  // Optimize resize handler with useCallback
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Memoize position calculation
  const calculatePositions = useCallback(() => {
    const newPositions = images.map((_, index) => {
      if (index === 0) {
        return { x: 0, y: 0, rotation: 0, scale: 1 };
      }

      const { xSpread, ySpread, yOffset } = spreadConfig;

      return {
        x: Math.random() * xSpread - xSpread / 2,
        y: Math.random() * ySpread + yOffset,
        rotation: Math.random() * 40 - 20,
        scale: 0.8 + Math.random() * 0.4,
      };
    });
    setPositions(newPositions);
  }, [spreadConfig]);

  useEffect(() => {
    calculatePositions();
  }, [calculatePositions]);

  const toggleGrid = useCallback(() => {
    setIsGrid(prev => !prev);
  }, []);

  // Memoize background images render
  const backgroundImages = useMemo(() => (
    images.slice(1).map((image, index) => (
      <div
        key={`bg-${index}`}
        className={`${
          isGrid
            ? "relative w-full h-full overflow-hidden max-h-[33.33dvh] md:max-h-[50dvh] min-h-[33.33dvh] md:min-h-[50dvh]"
            : "absolute w-[25dvw] aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }`}
        style={
          !isGrid
            ? {
                transform: `translate(${positions[index + 1]?.x}%, ${
                  positions[index + 1]?.y
                }%) rotate(${positions[index + 1]?.rotation}deg) scale(${
                  positions[index + 1]?.scale
                })`,
                zIndex: 1,
                transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }
            : {
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
              }
        }
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={400}
          height={400}
          loading="lazy"
          className={`w-full h-full object-cover grayscale transition-all duration-500 ${
            isGrid
              ? "hover:scale-105 lg:hover:grayscale-0 grayscale-0 lg:grayscale-100"
              : "opacity-80 hover:opacity-100 rounded-lg"
          }`}
        />
      </div>
    ))
  ), [isGrid, positions]);

  return (
    <main className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div
          className={`${
            isGrid
              ? "grid grid-cols-2 md:grid-cols-3 w-full h-full gap-0 items-center justify-center"
              : "relative"
          }`}
        >
          {backgroundImages}
        </div>

        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-2"
          style={{
            transform: `translate(${positions[0]?.x}%, ${positions[0]?.y}%) rotate(${positions[0]?.rotation}deg) scale(${positions[0]?.scale})`,
            transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <button
            onClick={toggleGrid}
            className="relative group aspect-square"
            aria-label="Toggle grid view"
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={400}
              height={400}
              priority
              className="w-[31dvh] h-[31dvh] object-cover rounded-lg shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-29"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 rounded-lg">
              <span className="text-2xl transition-opacity duration-300 opacity-0 text-gluttony-accent-light font-gluttony group-hover:opacity-100">
                {isGrid ? "Random View" : "Grid View"}
              </span>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
}
