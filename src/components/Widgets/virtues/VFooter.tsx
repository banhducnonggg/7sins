import Link from "next/link";

export default function VFooter() {
  return (
    <footer className="w-full h-[50dvh] sticky bottom-0 bg-background z-0">
      <div className="flex flex-col items-center justify-center w-full h-full gap-8 p-8">
        <h1 className="text-4xl md:text-6xl font-title text-foreground">Aight you have found the Easter Egg, and you have seen enough</h1>
        <Link href="/" className="text-lg transition-all ease-in-out cursor-pointer font-lust md:text-xl lg:text-2xl text-lust-accent-light hover:text-lust-accent duration-310">She&apos;s mine, now get away</Link>
      </div>
    </footer>
  );
}
