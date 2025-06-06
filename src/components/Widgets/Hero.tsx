"use client";

import { useState, useEffect } from "react";
import { HyperText } from "../magicui/hyper-text";

// Define your array of background images
const heroBackgroundImages = [
  "/home/hero-1.png",
  "/home/hero-2.png",
  "/home/hero-3.png",
  "/home/hero-4.png",
  "/home/hero-5.png",
  "/home/hero-6.png",
  "/home/hero-7.png",
  "/home/hero-8.png",
  "/home/hero-9.png",
  "/home/hero-10.png",
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
      <HyperText className="tracking-wide text-[32dvw] font-title text-pride-accent z-1">
        1 on 1
      </HyperText>
    </section>
  );
}
