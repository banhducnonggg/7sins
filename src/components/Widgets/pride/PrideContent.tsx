import Image from "next/image";

const images = [
  { src: "/pride/1.png", aspect_ratio: 1 / 1 },
  { src: "/pride/2.png", aspect_ratio: 1 / 1 },
  { src: "/pride/3.png", aspect_ratio: 3 / 4 },
  { src: "/pride/4.png", aspect_ratio: 1 / 1 },
  { src: "/pride/5.png", aspect_ratio: 3 / 2 },
  { src: "/pride/6.png", aspect_ratio: 1 / 1 },
  { src: "/pride/7.png", aspect_ratio: 3 / 2 },
  { src: "/pride/8.png", aspect_ratio: 1 / 1 },
];

export default function PrideContent() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="relative w-full max-w-[88dvw] h-screen p-8 flex items-center justify-center">
        <div className="w-full max-w-[88dvw]">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative w-full overflow-hidden rounded-xl  ${
                  index === 7
                    ? "md:col-span-2 md:aspect-2/1 lg:col-span-1 lg:aspect-square"
                    : "col-span-1 aspect-square"
                }`}
              >
                <Image
                  src={image.src}
                  alt={`Pride image ${index + 1}`}
                  fill
                  className={`object-cover transition-all ease-in-out ${index % 2 === 0 ? "invert-88" : ""} duration-831 lg:grayscale lg:hover:grayscale-0 hover:scale-120`}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute px-4 py-2 text-2xl text-center -translate-x-1/2 -translate-y-1/2 md:text-4xl lg:text-6xl top-1/2 left-1/2 font-pride bg-pride-accent-dark/50 backdrop-blur-xl text-pride-accent-light rounded-xl">
          <h1 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-pride-accent-light via-pride-accent to-pride-accent">Self-Identities</h1>
        </div>
      </div>
    </div>
  );
}
