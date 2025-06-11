import DefaultLayout from "@/components/Layout/DefaultLayout";
import { MorphingText } from "@/components/magicui/morphing-text";

export default function Lust() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full min-h-screen bg-lust-accent-light">
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-lust-accent-dark">
          <MorphingText
            texts={["Design that seduces", "Lust"]}
            className="text-2xl md:text-4xl lg:text-6xl font-lust text-lust-accent-light"
          ></MorphingText>
        </div>
      </div>
    </DefaultLayout>
  );
}
