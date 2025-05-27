import NavBar from "./NavBar";
// import BackgroundVideo from "./BackgroundVideo";
import Image from "next/image";

interface LayoutInterface {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: LayoutInterface): React.ReactElement {
  return (
    <div className="fixed flex flex-col w-screen h-screen p-8 pb-0 overflow-x-hidden md:p-16 lg:p-24 xl:p-32 md:pb-0 lg:pb-0 xl:pb-0">
      {/* <BackgroundVideo /> */}
      {/* <Image src={"/bg.png"} fill priority alt="background image" className="object-cover w-screen h-auto -z-1" /> */}
      {/* <div className="absolute top-0 left-0 z-0 w-screen h-full bg-background/80" /> */}
      <NavBar />
      <main className="flex-grow mt-32 md:mt-24 lg:mt-16 xl:mt-8 z-1">{children}</main>
    </div>
  );
}
