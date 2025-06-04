import Image from "next/image";

interface SinsCardInterface {
  title: string;
  description: string;
  image: string;
}

export default function SinsCard({title, description, image}: SinsCardInterface) {
  return (
    <div className="flex flex-col justify-center items-center p-8 gap-4 rounded-xl bg-background w-80 h-[48dvh] mx-8">
      <Image
        src={image}
        alt={title + " image"}
        width={40}
        height={40}
        className="rounded-full w-40 h-40 object-cover object-center mb-4"
      />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
