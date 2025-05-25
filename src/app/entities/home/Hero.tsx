import ImageLooper from "./ImageLooper";

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
    <div className="flex items-center justify-center w-full h-auto rounded-md lg:rounded-lg xl:rounded-xl bg-background/50">
      <ImageLooper images={images} masks={masks} height={800} width={800} />
    </div>
  );
}
