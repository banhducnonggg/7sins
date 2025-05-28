"use client"; // Mark as a Client Component

import { useState } from "react"; // Import useState
import Highlighter from "@/components/ui/highlighter";
import GlitchText from "@/components/ui/glitch-text";
import Image from "next/image";
import FireflyButton from "@/components/ui/firefly-button";

export default function NavBar() {
  const [isGreedToggled, setIsGreedToggled] = useState(false); // Initialize state
  const [isOpened, setIsOpened] = useState(false); // Initialize state]
  return (
    // <Dock className="fixed top-0 flex flex-row h-16 gap-16 p-8 overflow-hidden -translate-x-1/2 rounded-full shadow-sm left-1/2 z-90 bg-background shadow-foreground">
    //   <DockIcon className="p-8 duration-300 ease-in-out rounded-full shadow-sm shadow-foreground bg-lust hover:scale-125 hover:shadow-lg">
    //     <HouseIcon className="text-foreground" />
    //   </DockIcon>
    //   <DockIcon className="p-8 duration-300 ease-in-out rounded-full shadow-sm shadow-foreground bg-gluttony hover:scale-125 hover:shadow-lg">
    //     <UserIcon className="text-sloth" />
    //   </DockIcon>
    //   <DockIcon className="p-8 duration-300 ease-in-out rounded-full shadow-sm shadow-foreground bg-greed hover:scale-125 hover:shadow-lg">
    //     <BriefcaseBusinessIcon className="text-background" />
    //   </DockIcon>
    // </Dock>
    <div className="fixed top-0 left-0 flex flex-row items-center justify-between w-[99%] h-32 py-4 pl-8 pr-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24 xl:pl-32 xl:pr-32 z-99">
      <div className="flex items-center justify-center px-8 py-4 transition-transform duration-300 ease-in-out rounded-full shadow-md bg-background-secondary shadow-sloth hover:shadow-xl hover:scale-124">
      <Image
        src={"/envy-horizontal.webp"}
        width={240}
        height={240}
        priority
        alt="Profile picture"
        className="w-auto h-8"
      /></div>
      <FireflyButton
        text={isOpened ? "Gluttony" : "Greed"}
        backgroundColor={isOpened ? "#800020" : "#BD9B16"}
        textColor={isOpened ? "#FAFAFA" : "#2F2F2F"}
        glowColor="#B2BEB5"
        className={`font-h transition-transform duration-300 ease-in-out ${
          isOpened ? "italic -rotate-11" : "rotate-11"
        }`}
        onClick={() => setIsOpened(!isOpened)}
      />

      {/* You can use the isGreedToggled state to conditionally render something or change styles */}
      {/* For example: */}
      {/* {isGreedToggled && <p className="text-white">Greed is toggled!</p>} */}
    </div>
  );
}
