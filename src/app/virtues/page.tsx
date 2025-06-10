import DefaultLayout from "@/components/Layout/DefaultLayout";
import { MorphingText } from "@/components/magicui/morphing-text";
import Floating from "@/components/Widgets/virtues/FloatingGallery";

export default function Virtues() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full min-h-screen max-w-screen bg-lust-accent-light">
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-lust-accent-dark">
          <MorphingText
            texts={["I meet this girl", "I love her so much"]}
            className="w-full text-2xl md:text-4xl font-title text-lust-accent-light"
          ></MorphingText>
        </div>
        <Floating />
      </div>
    </DefaultLayout>
  );
}
