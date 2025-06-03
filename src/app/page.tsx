import DefaultLayout from "@/components/Layout/DefaultLayout";
import Hero from "@/components/Widgets/Hero";

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <div className="w-full h-screen">1</div>
      <div className="w-full h-screen">2</div>
    </DefaultLayout>
  );
}
