import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      {/* Placeholder for Header. Uncomment and import when you have it. */}
      {/* Example: <header className="p-4 text-white bg-gray-800">Header Content</header> */}

      <main className="flex-grow w-full">
        {/* 
          flex-grow: Allows the main content to take up available space.
          container: Centers content and sets max-width (Tailwind class).
          mx-auto: Centers the container.
          px-4 py-8: Padding for the main content area.
        */}
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;
