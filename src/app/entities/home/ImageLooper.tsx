"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  interval = 500,
  maskInterval = 300,
  width = 400,
  height = 400,
}: Props) => {
  const [index, setIndex] = useState(0);
  const [maskIndex, setMaskIndex] = useState(0);

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
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`image-${i}`}
          width={width}
          height={height}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 object-cover transition-opacity duration-250 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          priority={i === 0} // preload the first image
        />
      ))}
      {/* Mask layer */}
      {masks.map((mask, i) => (
        <Image
          key={`mask-${i}`}
          src={mask}
          alt={`mask-${i}`}
          width={width}
          height={height}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 object-cover transition-opacity duration-150 pointer-events-none mix-blend-multiply ${
            i === maskIndex ? "opacity-100 z-20" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
};

export default ImageLooper;
