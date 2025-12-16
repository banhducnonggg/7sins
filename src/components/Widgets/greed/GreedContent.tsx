import { NumberTicker } from "@/components/magicui/number-ticker";
import Image from "next/image";

export default function GreedContent() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 p-8 lg:gap-16 lg:p-16">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-greed text-greed-accent-dark">
        The base of everything I want
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[80%] lg:w-2/3 gap-8">
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <Image
            width={400}
            height={400}
            src={"/greed/greed-1.webp"}
            alt="greed-1"
            className="object-cover w-full h-auto rounded-xl"
          />
          <Image
            width={400}
            height={400}
            src={"/greed/greed-3.webp"}
            alt="greed-3"
            className="object-cover w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-8">
          <Image
            width={400}
            height={400}
            src={"/greed/greed-4.webp"}
            alt="greed-4"
            className="object-cover w-full h-auto rounded-xl"
          />
          <Image
            width={400}
            height={400}
            src={"/greed/greed-2.webp"}
            alt="greed-2"
            className="object-cover w-full h-auto rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="inline-flex items-center justify-center gap-2">
          <NumberTicker
            value={1000000000}
            className="text-4xl whitespace-pre-wrap text-greed-accent-dark font-greed md:text-6xl lg:text-8xl"
          />
          <p className="text-xl text-white md:text-2xl lg:text-4xl font-greed">VNĐ</p>
        </div>
        <h2 className="w-full text-2xl text-center md:text-4xl lg:text-6xl font-greed text-greed-accent-dark">The amount that I could make if idgaf, but I did</h2>
      </div>
    </div>
  );
}
