import React from "react";
import SinsCard from "../Entities/SinsCard";
import Marquee from "react-fast-marquee";

const SinsDetails = [
  {
    title: "/Pride/",
    description: `"An excessive, inflated view of one's self, often without regard for others."`,
    image: "/home/hero-1.png",
  },
  {
    title: "/Envy/",
    description: `"The intense, resentful desire for an item or quality someone else possesses."`,
    image: "/home/hero-1.png",
  },
  {
    title: "/Wrath/",
    description: `"A strong, uncontrolled anger and deep-seated animosity towards other individuals."`,
    image: "/home/hero-1.png",
  },
  {
    title: "/Sloth/",
    description: `"Excessive laziness; a persistent failure to act or utilize one's inherent talents."`,
    image: "/home/hero-1.png",
  },
  {
    title: "/Greed/",
    description: `"An insatiable and excessive pursuit of material wealth or worldly possessions."`,
    image: "/home/hero-1.png",
  },
  {
    title: "/Lust/",
    description: `"A powerful, often uncontrolled passion or intense longing for sexual desires."`,
    image: "/home/hero-1.png",
  },
  {
    title: "/Gluttony/",
    description: `"An excessive, ongoing, and uncontrolled consumption of food or alcoholic drink."`,
    image: "/home/hero-1.png",
  },
];

export default function SinsMarquee() {
  return (
    <Marquee className="h-[64dvh]">
      {SinsDetails.map((sin) => (
        <SinsCard
          key={sin.title}
          title={sin.title}
          description={sin.description}
          image={sin.image}
        />
      ))}
    </Marquee>
  );
}
