"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const floating = [
  "/virtues/love-1.png",
  "/virtues/love-2.png",
  "/virtues/love-3.png",
  "/virtues/love-4.png",
  "/virtues/love-5.png",
  "/virtues/love-6.png",
  "/virtues/love-7.png",
  "/virtues/love-8.png",
  "/virtues/love-9.png",
];

export default function Floating() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
  const springConfig1 = { damping: 10, stiffness: 400 }; // Most responsive
  const springConfig2 = { damping: 15, stiffness: 300 }; // Medium
  const springConfig3 = { damping: 20, stiffness: 200 }; // Most damped

  // Different tilt multipliers for each plane
  const rotateX1 = useSpring(mouseY, springConfig1);
  const rotateY1 = useSpring(mouseX, springConfig1);
  
  const rotateX2 = useSpring(mouseY, springConfig2);
  const rotateY2 = useSpring(mouseX, springConfig2);
  
  const rotateX3 = useSpring(mouseY, springConfig3);
  const rotateY3 = useSpring(mouseX, springConfig3);

  return (
    <main
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative w-screen h-screen overflow-hidden max-w-screen"
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
          className="absolute left-[75%] top-[60%]"
          style={{ transform: "translateZ(150px)" }}
        />
        <Image
          src={floating[1]}
          alt="image"
          width={300}
          height={200}
          className="absolute left-[10%] top-[60%]"
          style={{ transform: "translateZ(150px)" }}
        />
        <Image
          src={floating[2]}
          alt="image"
          width={225}
          height={200}
          className="absolute left-[45%] top-[15%]"
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
          className="absolute left-[15%] top-[15%]"
          style={{ transform: "translateZ(75px)" }}
        />
        <Image
          src={floating[4]}
          alt="image"
          width={200}
          height={200}
          className="absolute left-[65%] top-[10%]"
          style={{ transform: "translateZ(75px)" }}
        />
        <Image
          src={floating[5]}
          alt="image"
          width={225}
          height={200}
          className="absolute left-[40%] top-[45%]"
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
          className="absolute left-[55%] top-[5%]"
          style={{ transform: "translateZ(0px)" }}
        />
        <Image
          src={floating[7]}
          alt="image"
          width={200}
          height={200}
          className="absolute left-[35%] top-[65%]"
          style={{ transform: "translateZ(0px)" }}
        />
        <Image
          src={floating[8]}
          alt="image"
          width={150}
          height={200}
          className="absolute left-[50%] top-[75%]"
          style={{ transform: "translateZ(0px)" }}
        />
      </motion.div>
    </main>
  );
}
