"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";
import WrathCard from "@/components/Entities/WrathCard";

const cards = [
  {
    alt: "wrath 1 image",
    src: "/wrath/wrath-1.webp",
    color: "wrath-accent",
  },
  {
    alt: "wrath 2 image",
    src: "/wrath/wrath-2.webp",
    color: "wrath-accent-dark",
  },
  {
    alt: "wrath 3 image",
    src: "/wrath/wrath-3.webp",
    color: "wrath-accent",
  },
  {
    alt: "wrath 4 image",
    src: "/wrath/wrath-4.webp",
    color: "wrath-accent-light",
  },
  {
    alt: "wrath 5 image",
    src: "/wrath/wrath-5.webp",
    color: "wrath-accent",
  },
];

export default function WrathContent() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main
      ref={container}
      className="flex flex-col items-center justify-center w-full relative min-h-screen gap-8 p-8 lg:gap-16 lg:p-16 bg-wrath-accent-light"
    >
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - 1) * 0.05;
        return (
          <WrathCard
            key={`p_${i}`}
            i={i}
            {...card}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
      <h1 className="lg:-mb-8 font-wrath text-wrath-accent-dark text-xl md:text-2xl lg:text-4xl">
        This isn&apos;t anger. This is precision through fire.
      </h1>
    </main>
  );
}
