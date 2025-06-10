"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function SubHero() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0.8, 1], [50, 0]);

  return (
    <div ref={container} className="h-[300vh] w-full relative">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ scale }}
          className="absolute top-0 w-full h-full flex items-center justify-center"
        >
          <div className="relative w-[50vw] h-[50vh]">
            <Image
              src="/home/pride.png"
              fill
              alt="Pride"
              priority
              className="object-contain w-full h-full"
            />
          </div>
          <motion.div
            style={{ opacity, y }}
            className="absolute bottom-1/2 left-1/2 -translate-x-1/2 font-pride text-pride-accent text-xs md:text-md lg:text-xl max-w-[20vw] md:max-w-[40vw] lg:max-w-[80vw] text-center whitespace-normal break-words"
          >
            The world should see us
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
