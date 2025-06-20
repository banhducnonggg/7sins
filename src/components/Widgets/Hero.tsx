"use client";

import { useState, useEffect } from "react";
import { HyperText } from "../magicui/hyper-text";

// Define your array of background images
const heroBackgroundImages = [
  "/home/hero-1.webp",
  "/home/hero-2.webp",
  "/home/hero-3.webp",
  "/home/hero-4.webp",
  "/home/hero-5.webp",
  "/home/hero-6.webp",
  "/home/hero-7.webp",
  "/home/hero-8.webp",
  "/home/hero-9.webp",
  "/home/hero-10.webp",
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % heroBackgroundImages.length
      );
    }, 310);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative flex items-center justify-center w-full h-screen p-4 overflow-hidden lg:p-8 bg-background">
      <p
        className={`absolute h-[100dvh] w-[100dvw] top-0 left-0 italic text-center font-[900] text-[64dvw]/48 md:text-[56dvw]/80 lg:text-[32dvw]/56 xl:text-[24dvw]/80 z-0 bg-cover bg-center bg-clip-text text-transparent transition-all duration-80 ease-in-out`}
        style={{
          backgroundImage: `url(${heroBackgroundImages[currentImageIndex]})`,
        }}
      >
        fear of being ordinary
      </p>
      <HyperText animateOnHover={false} className="tracking-wide text-[28dvw] font-title text-pride-accent z-1">
        1 on 1
      </HyperText>
    </section>
  );
}
