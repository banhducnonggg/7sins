import DefaultLayout from "@/components/Layout/DefaultLayout";
import { MorphingText } from "@/components/magicui/morphing-text";

export default function Lust() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-lust-accent-dark">
        <MorphingText
          texts={["Hi there", "This is", "Design that seduces"]}
          className="text-4xl md:text-6xl font-title text-lust-accent-light"
        ></MorphingText>
      </div>
    </DefaultLayout>
  );
}
