import { ImgComparisonSlider } from "@img-comparison-slider/react";
import Image from "next/image";

export default function EnvyContext() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen gap-16 p-16">
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <h1 className="text-2xl md:text-4xl font-envy text-envy-accent-dark">Ba Vi Milk</h1>
        <p className="text-lg md:text-xl font-envy text-envy-accent">
          What it might have looked like
        </p>
        <ImgComparisonSlider
          keyboard="enabled"
          hover={true}
          className="w-full h-auto rounded-xl focus:outline-none md:w-2/3 lg:w-1/2"
        >
          <Image
            src={"/envy/bavi.webp"}
            alt="Ba Vi Milk at the moment"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            slot="first"
          />
          <Image
            src={"/envy/envy-bavi.webp"}
            alt="Ba Vi Milk that I like"
            width={500}
            height={500}
            className="object-cover w-full h-full"
            slot="second"
          />
        </ImgComparisonSlider>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <h1 className="text-2xl md:text-4xl font-envy text-envy-accent-dark">
          Coffee bean packaging
        </h1>
        <Image
          src={"/envy/1.webp"}
          alt="coffee bean bag"
          width={500}
          height={500}
          className="object-cover w-full h-auto md:w-2/3 lg:w-1/2 rounded-xl"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full gap-4">
        <h1 className="text-2xl md:text-4xl font-envy text-envy-accent-dark">
          Brüch Brewing&apos;s &quot;The ginger next door&quot;
        </h1>
        <Image
          src={"/envy/2.webp"}
          alt="bear bottle"
          width={500}
          height={500}
          className="object-cover w-full h-auto md:w-2/3 lg:w-1/2 rounded-xl"
        />
      </div>
    </main>
  );
}
