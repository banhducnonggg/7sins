"use client";

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
      {images.map((src, i) =>
        masks.map((mask, j) => (
          <div
            key={`img-${i}-mask-${j}`}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 h-[100vh] w-auto bg-cover bg-center pointer-events-none ${
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
              WebkitMaskBoxImageSlice: "cover",
              WebkitMaskPosition: "center",
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
