import Image from "next/image";

export default function SubHero() {
  return (
    <div className="relative z-10 flex flex-row items-end justify-center w-full min-h-screen p-0 overflow-hidden max-w-screen bg-conic from-lust-accent-dark to-lust-accent-light">
      <Image
        src={"/virtues/matcha.webp"}
        alt={"Matcha"}
        width={400}
        height={400}
        className="w-full h-auto -mr-20 md:-mr-12"
      />
      <div className="absolute flex flex-col items-center justify-center w-full gap-0 -translate-x-1/2 -translate-y-1/2 top-[55%] md:top-[56%] lg:top-[57%] left-1/2">
        <h1 className="text-2xl font-gluttony text-envy-accent-light">Matcha Latte</h1>
        <h2 className="text-xl font-gluttony text-envy-accent-dark">with Oat milk</h2>
      </div>
      <Image
        src={"/virtues/oatmilk.webp"}
        alt={"Matcha"}
        width={400}
        height={400}
        className="w-full h-auto -ml-20 md:-ml-12 lg:-mr-20 xl:-mr-28"
      />
    </div>
  );
}
