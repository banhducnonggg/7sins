import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main id="about" className="flex items-center justify-center h-screen px-8 bg-background text-foreground py-auto">
      <section className="flex flex-col items-center justify-center h-full gap-8 mx-auto text-center max-w-8xl text-body">
        <h1 className="text-4xl md:text-6xl font-title text-envy-accent">
          About the Lab
        </h1>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col items-center justify-center w-full gap-16 lg:w-1/2">
            <p className="text-xl leading-relaxed text-center lg:text-2xl text-secondary lg:text-right">
              <span className="text-foreground font-title">1 on 1</span> is a
              creative lab confronting human impulses — a mirror of identity,
              lust, rage, and beauty. Each sin is a visual confession.
            </p>
            {/* Confess Button */}
            <Link href="/confess" className="hidden lg:block">
              <button className="px-6 py-3 text-sm font-semibold tracking-wide uppercase transition ease-in border-2 rounded-full cursor-pointer bg-none text-foreground border-foreground hover:bg-foreground hover:text-background duration-310">
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
              className="object-cover transition shadow-xl rounded-xl grayscale hover:grayscale-0 duration-310"
            />
          </div>
        </div>
        {/* Confess Button */}
        <Link href="/confess" className="block lg:hidden">
          <button className="px-6 py-3 text-sm font-semibold tracking-wide uppercase rounded-full cursor-pointer bg-foreground text-background">
            Confess your sin(s)
          </button>
        </Link>
      </section>
    </main>
  );
}
