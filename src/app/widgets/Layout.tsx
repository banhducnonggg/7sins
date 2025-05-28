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
    <div className="fixed flex flex-col w-screen h-screen overflow-x-hidden overflow-y-auto">
      {/* <BackgroundVideo /> */}
      {/* <Image src={"/bg.png"} fill priority alt="background image" className="object-cover w-screen h-auto -z-1" /> */}
      {/* <div className="absolute top-0 left-0 z-0 w-screen h-full bg-background/80" /> */}
      <NavBar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
