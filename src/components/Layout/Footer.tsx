import React from "react";
import Link from "next/link";

const sevenDeadlySins = [
  {
    name: "Pride",
    path: "/pride",
  },
  {
    name: "Envy",
    path: "/envy",
  },
  {
    name: "Wrath",
    path: "/wrath",
  },
  {
    name: "Sloth",
    path: "/sloth",
  },
  {
    name: "Greed",
    path: "/greed",
  },
  {
    name: "Lust",
    path: "/lust",
  },
  {
    name: "Gluttony",
    path: "/gluttony",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center w-full gap-4 p-8 pb-32 text-center bg-foreground text-secondary">
      <div className="flex flex-col items-center justify-center gap-2 text-background">
        <h3 className="text-4xl font-title">1 on 1</h3>
        <p className="text-sm italic">fear of being ordinary</p>
      </div>

      <nav className="">
        <div className="flex flex-wrap justify-center p-0 m-0 list-none gap-x-4 gap-y-2">
          {sevenDeadlySins.map((sin) => (
            <Link
              key={sin.name}
              href={sin.path}
              className="text-sm no-underline transition-all ease-in-out scale-100 cursor-pointer duration-310 hover:scale-110 sm:text-base hover:text-background hover:underline"
            >
              {sin.name}
            </Link>
          ))}
        </div>
      </nav>

      <div className="text-xs">
        <p>&copy; {currentYear} 1 on 1. All sins reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
