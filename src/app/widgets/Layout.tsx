import NavBar from "./NavBar";
import BackgroundVideo from "./BackgroundVideo";

interface LayoutInterface {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: LayoutInterface): React.ReactElement {
  return (
    <div className="flex flex-col w-screen h-screen p-8 overflow-auto md:p-16 lg:p-24 xl:p-32">
      <BackgroundVideo />
      <NavBar />
      <main className="flex-grow mt-16 md:mt-8 lg:mt-0">{children}</main>
    </div>
  );
}
