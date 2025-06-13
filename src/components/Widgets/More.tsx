"use client";

export default function More() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-8 p-8 bg-gradient-to-b from-background to-greed-accent-dark text-greed-accent-light">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-title">
        Aight this is just a concept,
      </h1>
      <h2 className="text-lg">
        If you want some more,{" "}
        <span
          onClick={scrollToAbout}
          className="transition-all ease-in-out cursor-pointer hover:text-wrath-accent-light font-title duration-310"
        >
          confess it,
        </span>{" "}
        we can collaborate in either designing or development.
      </h2>
    </div>
  );
}
