export default function Hero() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen p-4 overflow-hidden lg:p-8 bg-background">
      <p className="absolute h-[100dvh] w-[100dvw] top-0 left-0 italic text-center font-[900] text-[64dvw]/48 md:text-[56dvw]/80 lg:text-[32dvw]/56 xl:text-[24dvw]/80 z-0 bg-[url('/home/hero.png')] bg-cover bg-center bg-clip-text text-transparent">
      fear of being ordinary
      </p>
      <h1 className="tracking-wide text-[32dvw] font-title text-pride-accent z-1">
        1 on 1
      </h1>
    </section>
  );
}
