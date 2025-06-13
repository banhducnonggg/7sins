import React from "react";
import Footer from "@/components/Layout/Footer";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <main className="flex-grow w-full">
        {/* 
          flex-grow: Allows the main content to take up available space.
          container: Centers content and sets max-width (Tailwind class).
          mx-auto: Centers the container.
          px-4 py-8: Padding for the main content area.
        */}
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 p-8 bg-background text-foreground">
          <h1 className="text-4xl md:text-6xl font-title">
            Seems like the sin(s) you are looking for is not here...
          </h1>
          <Link href="/" className="px-8 py-2 transition-all border-2 cursor-pointer rounded-xl border-foreground hover:text-background hover:bg-foreground duration-310">Click here to get back home</Link>
          <p>Or scroll all the way down to view existed sins</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
