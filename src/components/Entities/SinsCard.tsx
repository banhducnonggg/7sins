import Image from "next/image";
import Link from "next/link";

interface SinsCardInterface {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function SinsCard({
  title,
  description,
  image,
  link,
}: SinsCardInterface) {
  return (
    <Link
      href={link}
      className="flex flex-col justify-center items-center p-8 gap-4 rounded-xl bg-background w-80 h-[48dvh] mx-8 border-2 border-foreground grayscale hover:grayscale-0 transition duration-310"
    >
      <Image
        src={image}
        alt={title + " image"}
        width={40}
        height={40}
        className="object-cover object-center w-40 h-40 mb-4 rounded-full"
      />
      <h1>{title}</h1>
      <p>{description}</p>
    </Link>
  );
}
