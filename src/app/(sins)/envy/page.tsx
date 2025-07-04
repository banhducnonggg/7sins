"use client"; // Required for useState and useEffect

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import EnvyContext from "@/components/Widgets/envy/EnvyContent";
import { useState, useEffect } from "react";

export default function Envy() {
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
    }, 5000);

    // Cleanup the timer if the component unmounts before the timer fires
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-envy-accent-light">
        {/* Container for the two elements that will fade */}
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-envy-accent-dark">
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {showTyping && ( // Conditionally render to ensure animation starts correctly
              <TypingAnimation
                delay={310}
                className="text-2xl md:text-4xl lg:text-6xl font-envy text-envy-accent-light"
              >
                &quot;What if it were mine?&quot;
              </TypingAnimation>
            )}
          </div>
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${!showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-envy text-envy-accent-light">ENVY</h1>
          </div>
        </div>

        <EnvyContext />
      </div>
    </DefaultLayout>
  );
}
