import DefaultLayout from "@/components/Layout/DefaultLayout";
import Hero from "@/components/Widgets/Hero";
import SinsMarquee from "@/components/Widgets/SinsMarquee";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <SinsMarquee />
      <div className="w-full h-screen">2</div>
    </DefaultLayout>
  );
}
