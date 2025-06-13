"use client";

import { ChevronUpCircle, ChevronDownCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const sevenDeadlySins = [
  {
    name: "Pride",
    path: "/pride",
    text: "text-pride-accent font-pride",
    hover: "hover:text-pride-accent-light",
  },
  {
    name: "Envy",
    path: "/envy",
    text: "text-envy-accent font-envy",
    hover: "hover:text-envy-accent-light",
  },
  {
    name: "Wrath",
    path: "/wrath",
    text: "text-wrath-accent font-wrath",
    hover: "hover:text-wrath-accent-light",
  },
  {
    name: "Sloth",
    path: "/sloth",
    text: "text-sloth-accent font-sloth",
    hover: "hover:text-sloth-accent-light",
  },
  {
    name: "Greed",
    path: "/greed",
    text: "text-greed-accent font-greed",
    hover: "hover:text-greed-accent-light",
  },
  {
    name: "Lust",
    path: "/lust",
    text: "text-lust-accent font-lust",
    hover: "hover:text-lust-accent-light",
  },
  {
    name: "Gluttony",
    path: "/gluttony",
    text: "text-gluttony-accent font-gluttony",
    hover: "hover:text-gluttony-accent-light",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // A common breakpoint for mobile is 768px
      setIsMobile(window.innerWidth < 1024);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed z-10 flex items-center justify-between w-5/6 gap-4 px-8 py-4 border-2 left-1/12 bottom-8 bg-background border-foreground rounded-xl">
      <Link href="/">
        <Image
          src={"/dark-icon.svg"}
          alt={"next logo"}
          width={40}
          height={40}
          className="transition-transform duration-300 ease-in-out transform scale-100 cursor-pointer hover:scale-120"
        />
      </Link>
      {isMobile ? (
        <>
          <button
            onClick={toggleMenu}
            className="text-[#ffeaea]"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <ChevronDownCircle size={32} />
            ) : (
              <ChevronUpCircle size={32} />
            )}
          </button>
          {isMenuOpen && (
            <div className="absolute z-50 flex flex-col w-full gap-8 p-8 translate-x-1/2 bottom-24 rounded-xl bg-background right-1/2">
              {sevenDeadlySins.map((sin) => (
                <Link
                  key={sin.name}
                  href={sin.path}
                  className={`${sin.text} text-xl text-center w-full cursor-pointer`}
                >
                  {sin.name}
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <nav>
          <div className="flex flex-row items-center justify-end gap-8">
            {sevenDeadlySins.map((sin) => (
              <Link
                key={sin.name}
                href={sin.path}
                className={`${sin.text} ${sin.hover} cursor-pointer text-xl text-center w-full scale-100 hover:scale-120 transform transition-transform duration-300 ease-in-out flex`}
              >
                {sin.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
