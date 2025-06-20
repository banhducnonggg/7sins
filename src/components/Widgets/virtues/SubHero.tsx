import Image from "next/image";

export default function SubHero() {
  return (
    <div
      className="relative z-20 flex flex-row items-end justify-center w-full min-h-screen p-0 overflow-hidden max-w-screen"
      style={{
        background: "conic-gradient(from 180deg at 50% 50%, #4b0082, #ffb6c1)",
      }}
    >
      <Image
        src={"/virtues/matcha.webp"}
        alt={"Matcha"}
        width={400}
        height={400}
        className="w-full h-auto -mr-20 md:-mr-12"
      />
      <div className="absolute flex flex-col items-center justify-center w-full gap-0 -translate-x-1/2 -translate-y-1/2 top-[55%] md:top-[56%] lg:top-[57%] left-1/2">
        <h1 className="text-2xl font-gluttony text-envy-accent-light">
          Matcha Latte
        </h1>
        <h2 className="text-xl font-gluttony text-envy-accent-dark">
          with Oat milk
        </h2>
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
