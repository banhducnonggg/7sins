"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { FlipText } from "@/components/magicui/flip-text";
import { useState, useEffect } from "react";

export default function Greed() {
  const [showTyping, setShowTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(false);
    }, 3100);

    // Cleanup the timer if the component unmounts before the timer fires
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full min-h-screen bg-greed-accent-light">
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-greed-accent-dark">
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {showTyping && ( // Conditionally render to ensure animation starts correctly
              <FlipText className="text-4xl md:text-6xl font-greed text-greed-accent-light">
                &quot;The art of monetization.&quot;
              </FlipText>
            )}
          </div>
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${!showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h1 className="text-4xl md:text-6xl font-greed text-greed-accent-light">
              GREED
            </h1>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
