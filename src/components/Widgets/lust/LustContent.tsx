import Image from "next/image";

export default function LustContent() {
  return (
    <main className="relative flex flex-col items-center justify-center w-full min-h-screen">
      <Image
        src={"/lust/silk.png"}
        width={400}
        height={400}
        alt="Silk texture"
        className="absolute top-0 left-0 object-cover w-full h-full mix-blend-soft-light"
      />

      <div className="relative w-[50dvw] lg:w-[50dvh] h-[50dvw] lg:h-[50dvh] rounded-xs hover:scale-69 transform-all duration-960 ease-in-out">
        <Image
          src={"/lust/lust.png"}
          width={400}
          height={400}
          alt="Lust Hero Image"
          priority
          className="w-[50dvw] lg:w-[50dvh] aspect-square rounded-2xl blur-sm"
        />
        <Image
          src={"/lust/lust.png"}
          width={400}
          height={400}
          alt="Lust Hero Image"
          priority
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[48dvw] lg:w-[48dvh] aspect-square rounded-2xl border-[0.5] border-lust-accent/29"
        />
      </div>
    </main>
  );
}
