import NavBar from "./NavBar";
import BackgroundVideo from "./BackgroundVideo";

interface LayoutInterface {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: LayoutInterface): React.ReactElement {
  return (
    <div className="flex flex-col w-screen h-screen p-8 overflow-auto overflow-x-hidden md:p-16 lg:p-24 xl:p-32">
      <BackgroundVideo />
      <NavBar />
      <main className="flex-grow mt-24 md:mt-16 lg:mt-8 xl:mt-0">{children}</main>
    </div>
  );
}
