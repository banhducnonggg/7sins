import React from "react";
import SinsCard from "../Entities/SinsCard";
import Marquee from "react-fast-marquee";

const SinsDetails = [
  {
    title: "/Pride/",
    description: `"An excessive, inflated view of one's self, often without regard for others."`,
    image: "/home/pride.webp",
    link: "/pride",
  },
  {
    title: "/Envy/",
    description: `"The intense, resentful desire for an item or quality someone else possesses."`,
    image: "/home/envy.webp",
    link: "/envy",
  },
  {
    title: "/Wrath/",
    description: `"A strong, uncontrolled anger and deep-seated animosity towards other individuals."`,
    image: "/home/wrath.webp",
    link: "/wrath",
  },
  {
    title: "/Sloth/",
    description: `"Excessive laziness; a persistent failure to act or utilize one's inherent talents."`,
    image: "/home/sloth.webp",
    link: "/sloth",
  },
  {
    title: "/Greed/",
    description: `"An insatiable and excessive pursuit of material wealth or worldly possessions."`,
    image: "/home/greed.webp",
    link: "/greed",
  },
  {
    title: "/Lust/",
    description: `"A powerful, often uncontrolled passion or intense longing for sexual desires."`,
    image: "/home/lust.webp",
    link: "/lust",
  },
  {
    title: "/Gluttony/",
    description: `"An excessive, ongoing, and uncontrolled consumption of food or alcoholic drink."`,
    image: "/home/gluttony.webp",
    link: "/gluttony",
  },
];

export default function SinsMarquee() {
  return (
    <Marquee className="w-full h-fit" gradient gradientColor="#313131" pauseOnHover speed={110}>
      {SinsDetails.map((sin) => (
        <SinsCard
          key={sin.title}
          title={sin.title}
          description={sin.description}
          image={sin.image}
          link={sin.link}
        />
      ))}
    </Marquee>
  );
}
