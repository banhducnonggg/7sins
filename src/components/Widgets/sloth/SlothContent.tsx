import Image from "next/image";

const images = [
  { src: "/sloth/1.jpg", aspect_ratio: 2 / 3 }, // vertical
  { src: "/sloth/2.jpg", aspect_ratio: 3 / 2 }, // horizontal
  { src: "/sloth/3.jpg", aspect_ratio: 2 / 3 }, // vertical
  { src: "/sloth/4.jpg", aspect_ratio: 3 / 2 }, // horizontal
  { src: "/sloth/5.jpg", aspect_ratio: 2 / 3 }, // vertical
  { src: "/sloth/6.jpg", aspect_ratio: 3 / 2 }, // horizontal
];

export default function SlothContent() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center justify-center w-full gap-8 p-16">
        <h1 className="block text-center text-md font-sloth text-sloth-accent-dark lg:text-xl md:hidden">
          Maybe these will be completed later
        </h1>

        <div className="flex flex-col items-center justify-center w-full gap-8 md:flex-row">
          <div className="flex flex-col w-full gap-8">
            <Image
              src={images[0].src}
              alt="Sloth image 0"
              width={400}
              height={400}
              className="w-full h-auto transition-all duration-640 hover:scale-96 rounded-2xl"
            />
            <Image
              src={images[1].src}
              alt="Sloth image 0"
              width={400}
              height={400}
              className="w-full h-auto transition-all duration-640 hover:scale-96 rounded-2xl"
            />
          </div>
          <div className="flex flex-col w-full gap-8">
            <Image
              src={images[3].src}
              alt="Sloth image 0"
              width={400}
              height={400}
              className="w-full h-auto transition-all duration-640 hover:scale-96 rounded-2xl"
            />
            <h1 className="hidden text-center text-md font-sloth text-sloth-accent-dark lg:text-xl md:block">
              Maybe this will be completed later
            </h1>
            <Image
              src={images[2].src}
              alt="Sloth image 0"
              width={400}
              height={400}
              className="w-full h-auto transition-all duration-640 hover:scale-96 rounded-2xl"
            />
          </div>
          <div className="flex flex-col w-full gap-8">
            <Image
              src={images[4].src}
              alt="Sloth image 0"
              width={400}
              height={400}
              className="w-full h-auto transition-all duration-640 hover:scale-96 rounded-2xl"
            />
            <Image
              src={images[5].src}
              alt="Sloth image 0"
              width={400}
              height={400}
              className="w-full h-auto transition-all duration-640 hover:scale-96 rounded-2xl"
            />
          </div>
        </div>
        {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl ${
                index % 2 === 0
                  ? "aspect-[3/4]" // vertical images
                  : "aspect-[4/3]" // horizontal images
              }`}
            >
              <Image
                src={image.src}
                alt={`Sloth image ${index + 1}`}
                fill
                className="object-cover transition-all duration-640 hover:scale-96"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
