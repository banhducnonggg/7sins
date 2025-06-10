"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { SpinningText } from "@/components/magicui/spinning-text";
import { useState, useEffect } from "react";

export default function Gluttony() {
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
      <div className="flex items-center justify-center w-full min-h-screen bg-gluttony-accent-light">
        {/* <h1 className="text-4xl md:text-6xl font-title text-gluttony-accent-light">
          &quot;More is more.&quot;
        </h1> */}
        {/* <SpinningText radius={4} className="text-4xl md:text-6xl font-title text-gluttony-accent-light">
          More is more • More is more •
        </SpinningText> */}
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-gluttony-accent-dark">
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            {showTyping && ( // Conditionally render to ensure animation starts correctly
              <SpinningText
                radius={4}
                className="text-4xl md:text-6xl font-title text-gluttony-accent-light"
              >
                More is more • More is more •
              </SpinningText>
            )}
          </div>
          <div
            className={`
              absolute transition-opacity duration-5000 ease-in-out
              ${!showTyping ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
          >
            <h1 className="text-4xl md:text-6xl font-gluttony text-gluttony-accent-light">
              GLUTTONY
            </h1>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
