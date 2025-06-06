import DefaultLayout from "@/components/Layout/DefaultLayout";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Wrath() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-wrath-accent-dark">
        <VelocityScroll className="text-4xl md:text-6xl font-title text-wrath-accent-light">
          &quot;Create to disrupt.&quot;
        </VelocityScroll>
      </div>
    </DefaultLayout>
  );
}
