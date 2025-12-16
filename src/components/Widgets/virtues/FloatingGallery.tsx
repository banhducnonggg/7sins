"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from 'framer-motion';

const floating = [
  "/virtues/love-1.webp",
  "/virtues/love-2.webp",
  "/virtues/love-3.webp",
  "/virtues/love-4.webp",
  "/virtues/love-5.webp",
  "/virtues/love-6.webp",
  "/virtues/love-7.webp",
  "/virtues/love-8.webp",
  "/virtues/love-9.webp",
];

export default function Floating() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate distance from center (0 to 1)
    const distanceFromCenter = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    ) / (rect.width / 2);

    // Increase sensitivity near center
    const sensitivity = 1 + (1 - distanceFromCenter) * 2;

    const rotateX = ((y - centerY) / 15) * sensitivity;
    const rotateY = ((centerX - x) / 15) * sensitivity;

    mouseX.set(rotateY);
    mouseY.set(rotateX);
  };

  // Different spring configurations for each plane
  const springConfig1 = { damping: 24, stiffness: 60 }; // Most responsive
  const springConfig2 = { damping: 40, stiffness: 40 }; // Medium
  const springConfig3 = { damping: 60, stiffness: 20 }; // Most damped

  // Different tilt multipliers for each plane with opposite directions
  const rotateX1 = useSpring(mouseY, springConfig1);
  const rotateY1 = useSpring(mouseX, springConfig1);
  
  const rotateX2 = useSpring(mouseX, springConfig2); // Opposite direction
  const rotateY2 = useSpring(mouseY, springConfig2); // Opposite direction
  
  const rotateX3 = useSpring(-mouseX, springConfig3);
  const rotateY3 = useSpring(-mouseY, springConfig3);

  return (
    <main
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative z-10 w-full h-[100dvh] overflow-hidden max-w-screen bg-lust-accent-light overflow-visible"
    >
      <motion.div
        className="absolute w-full h-full brightness-100"
        style={{
          rotateX: rotateX1,
          rotateY: rotateY1,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={floating[0]}
          alt="image"
          width={300}
          height={200}
          className="absolute left-[60%] md:left-[69%] lg:left-[75%] top-[50%] w-[32vw] md:w-[20vw] lg:w-[25vw] h-auto max-w-[360px] min-w-[120px] md:min-w-[200px]"
          style={{ transform: "translateZ(150px)" }}
        />
        <Image
          src={floating[1]}
          alt="image"
          width={300}
          height={200}
          className="absolute left-[15%] md:left-[10%] top-[60%] w-[40vw] md:w-[20vw] lg:w-[25vw] h-auto max-w-[400px] min-w-[120px] md:min-w-[200px]"
          style={{ transform: "translateZ(150px)" }}
        />
        <Image
          src={floating[2]}
          alt="image"
          width={225}
          height={200}
          className="absolute left-[20%] md:left-[35%] lg:left-[45%] top-[25%] w-[48vw] md:w-[30vw] lg:w-[20vw] h-auto max-w-[320px] min-w-[100px] md:min-w-[150px]"
          style={{ transform: "translateZ(150px)" }}
        />
      </motion.div>

      <motion.div
        className="absolute w-full h-full brightness-[0.9]"
        style={{
          rotateX: rotateX2,
          rotateY: rotateY2,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={floating[3]}
          alt="image"
          width={250}
          height={200}
          className="absolute left-[8%] md:left-[4%] lg:left-[15%] top-[12%] w-[36vw] md:w-[18vw] lg:w-[20vw] h-auto max-w-[320px] min-w-[100px] md:min-w-[180px]"
          style={{ transform: "translateZ(75px)" }}
        />
        <Image
          src={floating[4]}
          alt="image"
          width={200}
          height={200}
          className="absolute right-[10%] md:right-[12%] lg:right-[15%] top-[32%] md:top-[20%] lg:top-[15%] w-[24vw] md:w-[15vw] lg:w-[18vw] h-auto max-w-[400px] min-w-[100px] md:min-w-[150px]"
          style={{ transform: "translateZ(75px)" }}
        />
        <Image
          src={floating[5]}
          alt="image"
          width={225}
          height={200}
          className="absolute left-[28%] md:left-[20%] lg:left-[35%] top-[37%] md:top-[36%] lg:top-[45%] w-[28vw] md:w-[12vw] lg:w-[15vw] h-auto max-w-[400px] min-w-[100px] md:min-w-[180px]"
          style={{ transform: "translateZ(75px)" }}
        />
      </motion.div>

      <motion.div
        className="absolute w-full h-full brightness-[0.8]"
        style={{
          rotateX: rotateX3,
          rotateY: rotateY3,
          transformStyle: "preserve-3d",
        }}
      >
        <Image
          src={floating[6]}
          alt="image"
          width={150}
          height={200}
          className="absolute left-[45%] md:left-[55%] lg:left-[60%] top-[5%] w-[20vw] md:w-[12vw] lg:w-[15vw] h-auto max-w-[150px] min-w-[80px] md:min-w-[120px]"
          style={{ transform: "translateZ(0px)" }}
        />
        <Image
          src={floating[7]}
          alt="image"
          width={200}
          height={200}
          className="absolute left-[30%] md:left-[35%] lg:left-[25%] top-[65%] w-[25vw] md:w-[15vw] lg:w-[20vw] h-auto max-w-[200px] min-w-[100px] md:min-w-[150px]"
          style={{ transform: "translateZ(0px)" }}
        />
        <Image
          src={floating[8]}
          alt="image"
          width={150}
          height={200}
          className="absolute left-[40%] md:left-[50%] lg:left-[55%] top-[75%] w-[20vw] md:w-[12vw] lg:w-[15vw] h-auto max-w-[150px] min-w-[80px] md:min-w-[120px]"
          style={{ transform: "translateZ(0px)" }}
        />
      </motion.div>
    </main>
  );
}
