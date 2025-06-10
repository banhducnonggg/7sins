"use client"; // Required for useState and useEffect

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { BoxReveal } from "@/components/magicui/box-reveal";
import PrideContent from "@/components/Widgets/pride/PrideContent";
import SubHero from "@/components/Widgets/pride/SubHero";
import { useState, useEffect } from "react";

export default function Pride() {
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
    }, 1600);

    // Cleanup the timer if the component unmounts before the timer fires
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-pride-accent-light">
        {/* Hero */}
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-pride-accent-dark">
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {showTyping && ( // Conditionally render to ensure animation starts correctly
              <BoxReveal boxColor="#eaeaea">
              <h1 className="text-4xl md:text-6xl font-pride text-pride-accent-light">
                &quot;I create, therefore I am.&quot;
              </h1>
            </BoxReveal>
            )}
          </div>
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${!showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h1 className="text-4xl md:text-6xl font-pride text-pride-accent-light">PRIDE</h1>
          </div>
        </div>

        <PrideContent />

        <SubHero />
      </div>
    </DefaultLayout>
  );
}
