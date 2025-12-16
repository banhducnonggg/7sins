import DefaultLayout from "@/components/Layout/DefaultLayout";
import About from "@/components/Widgets/About";
import Hero from "@/components/Widgets/Hero";
import More from "@/components/Widgets/More";
import SinsMarquee from "@/components/Widgets/SinsMarquee";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <div className="w-full py-16 bg-gradient-to-r from-[#313131] via-background to-[#313131]">
        <SinsMarquee />
      </div>
      <About />
      <More />
    </DefaultLayout>
  );
}
