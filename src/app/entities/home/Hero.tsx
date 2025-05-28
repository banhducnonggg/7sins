import { TiltMotion } from "@/components/ui/tilt-motion";
import ImageLooper from "./ImageLooper";
import GlitchText from "@/components/ui/glitch-text";
import Highlighter from "@/components/ui/highlighter";

// const images = ["/home/holders/loop-1.png", "/home/holders/loop-2.png", "/home/holders/loop-3.png"];
const images = [
  "/home/holders/1.png",
  "/home/holders/2.png",
  "/home/holders/3.png",
  "/home/holders/4.png",
  "/home/holders/5.png",
  "/home/holders/6.png",
  "/home/holders/7.png",
  "/home/holders/8.png",
  // "/home/holders/9.png",
  // "/home/holders/10.png",
  // "/home/holders/11.png",
];
const masks = [
  "/home/series/1.png",
  "/home/series/2.png",
  "/home/series/3.png",
  "/home/series/4.png",
  "/home/series/5.png",
  "/home/series/6.png",
  "/home/series/7.png",
  "/home/series/8.png",
  "/home/series/9.png",
  "/home/series/10.png",
  "/home/series/11.png",
  "/home/series/12.png",
  "/home/series/13.png",
  "/home/series/14.png",
  "/home/series/15.png",
  "/home/series/16.png",
  "/home/series/17.png",
  "/home/series/18.png",
  "/home/series/19.png",
  "/home/series/20.png",
  "/home/series/21.png",
  "/home/series/22.png",
  "/home/series/23.png",
  "/home/series/24.png",
  "/home/series/25.png",
  "/home/series/26.png",
  "/home/series/27.png",
  "/home/series/28.png",
  "/home/series/29.png",
];

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-around w-full gap-8 pb-16 rounded-md h-fit lg:rounded-lg xl:rounded-xl">
      {/* <h1 className="w-full m-8">Fear of being OrDiNarY</h1> */}

      <TiltMotion
        tiltFactor={8}
        scale={1}
        perspective={4000}
        transitionDuration={0.4}
      >
        <div className="bg-[url('/home/series/9.png')] bg-cover bg-center bg-no-repeat w-full h-full flex flex-col items-center justify-end p-8 pb-16">
          <h1 className="italic text-8xl text-[#CC00CC]">
            1 on 1/One on One
            <span className="text-xs">lust</span>
          </h1>
          <h1>
            <GlitchText
              text="Fear of being ordinary"
              fontWeight="500"
              className="text-5xl shadow-xl text-foreground shadow-wrath"
            />
          </h1>
        </div>
      </TiltMotion>
      {/* <ImageLooper images={images} masks={masks} height={800} width={800} /> */}
    </div>
  );
}
