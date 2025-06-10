import DefaultLayout from "@/components/Layout/DefaultLayout";
import { MorphingText } from "@/components/magicui/morphing-text";

export default function Virtues() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full min-h-screen bg-lust-accent-light">
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-lust-accent-dark">
          <MorphingText
            texts={["I meet this one girl", "I love her so much"]}
            className="text-2xl md:text-4xl w-full font-title text-lust-accent-light"
          ></MorphingText>
        </div>
      </div>
    </DefaultLayout>
  );
}
