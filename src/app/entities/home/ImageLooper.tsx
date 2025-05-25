"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  images: string[];
  masks: string[];
  interval?: number;
  maskInterval?: number;
  width?: number;
  height?: number;
};

const ImageLooper = ({
  images,
  masks,
  interval = 240,
  maskInterval = 400,
  width = 400,
  height = 400,
}: Props) => {
  const [index, setIndex] = useState(0);
  const [maskIndex, setMaskIndex] = useState(0);

  const [initialX, setInitialX] = useState("0vw");
  const [animateX, setAnimateX] = useState("100vw");

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setInitialX("-50vw"); // mobile
        setAnimateX("50vw"); // mobile
      } else if (w < 1024) {
        setInitialX("-25vw"); // tablet
        setAnimateX("75vw"); // tablet
      } else if (w < 1440) {
        setInitialX("0vw"); // desktop
        setAnimateX("100vw"); // desktop
      } else {
        setInitialX("0vw"); // xl and up
        setAnimateX("100vw"); // xl and up
      }
    };

    handleResize(); // set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    const maskLoop = setInterval(() => {
      setMaskIndex((prev) => (prev + 1) % masks.length);
    }, maskInterval);

    return () => {
      clearInterval(loop);
      clearInterval(maskLoop);
    };
  }, [images.length, masks.length, interval, maskInterval]);

  return (
    <div className="relative w-full">
      {images.map((src, i) =>
        masks.map((mask, j) => (
          <motion.div
            key={`img-${i}-mask-${j}`}
            initial={{ x: initialX }}
            animate={{ x: animateX }}
            transition={{
              duration: 11,
              ease: "linear",
              repeat: Infinity,
            }}
            className={`absolute top-0 -left-1/2 h-[80vh] w-auto bg-cover bg-center pointer-events-none ${
              i === index && j === maskIndex
                ? "opacity-100 z-10"
                : "opacity-0 z-0"
            }`}
            style={{
              width,
              height,
              // backgroundImage: `url(/home/holders/loop-1.png)`,
              backgroundImage: `url(${mask})`,
              // WebkitMaskBoxImage: `url(/home/series/3.png)`,
              WebkitMaskBoxImage: `url(${src})`,
              WebkitMaskBoxImageRepeat: "no-repeat",
              WebkitMaskBoxImageSlice: "contain",
              WebkitMaskPosition: "center",
              WebkitMaskBoxImageWidth: "auto",
              // backgroundImage: `url(${src})
              // maskImage: `url(${mask})`,
              // maskRepeat: "no-repeat",
              // maskSize: "cover",
              // maskPosition: "center",
            }}
          />
        ))
      )}
      {/* <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "red",
          WebkitMaskBoxImage: "url('/home/holders/loop-1.png')",
          backgroundImage: "url('/home/series/1.png')",
          WebkitMaskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
        }}
      ></div> */}
    </div>
  );
};

export default ImageLooper;
