import DefaultLayout from "@/components/Layout/DefaultLayout";
import { TypingAnimation } from "@/components/magicui/typing-animation";

export default function Envy() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-envy-accent-dark">
        <TypingAnimation
          delay={310}
          startOnView={true}
          className="text-4xl md:text-6xl font-title text-pride-envy-light"
        >
          &quot;What if it were mine?&quot;
        </TypingAnimation>
      </div>
    </DefaultLayout>
  );
}
