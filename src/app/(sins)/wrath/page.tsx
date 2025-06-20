"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import WrathContent from "@/components/Widgets/wrath/WrathContent";
import { useState, useEffect } from "react";

export default function Wrath() {
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
    }, 960);

    // Cleanup the timer if the component unmounts before the timer fires
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen bg-wrath-accent-light">
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-wrath-accent-dark">
          <VelocityScroll
            className={`w-full text-2xl md:text-4xl lg:text-6xl font-wrath text-wrath-accent-light transition-opacity duration-3100 ease-in-out ${
              showTyping ? "opacity-100" : "opacity-20 pointer-events-none"
            }`}
          >
            &quot;Create to disrupt.&quot;
          </VelocityScroll>
          <div
            className={`
              absolute transition-opacity duration-3100 ease-in-out
              ${!showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-wrath text-wrath-accent-light">
              WRATH
            </h1>
          </div>
        </div>

      </div>
      <WrathContent />

    </DefaultLayout>
  );
}
