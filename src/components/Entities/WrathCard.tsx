"use client";

import Image from "next/image";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";


type WrathCardProps = {
  i: number;
  src: string;
  alt: string;
  color: string;
  progress: any;
  range: any;
  targetScale: number;
};

const WrathCard = ({
  i,
  src,
  alt,
  color,
  progress,
  range,
  targetScale,
}: WrathCardProps) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-[0dvh]"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative h-[50dvh] aspect-11/29 rounded-lg p-8 flex flex-col transform origin-top"
      >
        <div className="relative w-full h-full shadow-lg rounded-xl overflow-hidden">
          <motion.div style={{ scale: imageScale }} className="w-full h-full">
            <Image src={src} alt={alt} fill className="object-cover" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WrathCard;