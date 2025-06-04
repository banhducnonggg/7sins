import DefaultLayout from "@/components/Layout/DefaultLayout";
import About from "@/components/Widgets/About";
import Hero from "@/components/Widgets/Hero";
import SinsMarquee from "@/components/Widgets/SinsMarquee";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <div className="w-full py-16">
        <SinsMarquee />
      </div>
      <About />
    </DefaultLayout>
  );
}
