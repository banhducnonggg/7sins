import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="h-screen bg-background text-foreground px-8 py-auto flex items-center justify-center">
      <section className="max-w-8xl h-full mx-auto text-center text-body flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-title text-envy-accent">
          About the Lab
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-16">
            <p className="text-xl lg:text-2xl leading-relaxed text-secondary text-center lg:text-right">
              <span className="text-foreground font-title">1 on 1</span> is a
              creative lab confronting human impulses — a mirror of identity,
              lust, rage, and beauty. Each sin is a visual confession.
            </p>
            {/* Confess Button */}
            <Link href="/confess" className="hidden lg:block">
              <button className="px-6 py-3 bg-none text-foreground text-sm font-semibold uppercase tracking-wide rounded-full border-2 border-foreground hover:bg-foreground hover:text-background duration-310 ease-in transition">
                Confess your sin(s)
              </button>
            </Link>
          </div>

          {/* Optional Portrait/Collage Section */}
          <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto aspect-[3/2] mb-12">
            <Image
              src={"/home/about.png"}
              alt="Lab portrait"
              fill
              className="object-cover rounded-xl shadow-xl grayscale hover:grayscale-0 transition duration-310"
            />
          </div>
        </div>
        {/* Confess Button */}
        <Link href="/confess" className="block lg:hidden">
          <button className="px-6 py-3 bg-foreground text-background text-sm font-semibold uppercase tracking-wide rounded-full">
            Confess your sin(s)
          </button>
        </Link>
      </section>
    </main>
  );
}
