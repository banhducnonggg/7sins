import ImageLooper from "./ImageLooper";

const images = ["/home/loop-1.png", "/home/loop-2.png", "/home/loop-3.png"];
const masks = [
  "/home/series/1.jpg",
  "/home/series/2.jpg",
  "/home/series/3.jpg",
  "/home/series/4.jpg",
  "/home/series/5.jpg",
  "/home/series/6.jpg",
  "/home/series/7.jpg",
  "/home/series/8.jpg",
  "/home/series/9.jpg",
  "/home/series/10.jpg",
  "/home/series/11.jpg",
  "/home/series/12.jpg",
  "/home/series/13.jpg",
  "/home/series/14.jpg",
  "/home/series/15.jpg",
  "/home/series/16.jpg",
  "/home/series/17.jpg",
  "/home/series/18.jpg",
  "/home/series/19.jpg",
  "/home/series/20.jpg",
  "/home/series/21.jpg",
  "/home/series/22.jpg",
  "/home/series/23.jpg",
  "/home/series/24.jpg",
  "/home/series/25.jpg",
  "/home/series/26.jpg",
  "/home/series/27.jpg",
  "/home/series/28.jpg",
  "/home/series/29.jpg",
];

export default function Hero() {
  return (
    <div className="flex items-center justify-center w-full rounded-md lg:rounded-lg xl:rounded-xl bg-background/50">
      <ImageLooper images={images} masks={masks} height={800} width={800} />
    </div>
  );
}
