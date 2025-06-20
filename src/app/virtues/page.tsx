import { MorphingText } from "@/components/magicui/morphing-text";
import Floating from "@/components/Widgets/virtues/FloatingGallery";
import SubHero from "@/components/Widgets/virtues/SubHero";
import VFooter from "@/components/Widgets/virtues/VFooter";

export default function Virtues() {
  return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen max-w-screen bg-background">
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-screen bg-lust-accent-dark">
          <MorphingText
            texts={["An Easter Egg", "I meet this girl", "I love her so much"]}
            className="w-full text-2xl md:text-4xl font-title text-lust-accent-light"
          ></MorphingText>
        </div>
        <SubHero />
        <Floating />
        <VFooter />
      </div>
  );
}
