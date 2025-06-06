import DefaultLayout from "@/components/Layout/DefaultLayout";
import { FlipText } from "@/components/magicui/flip-text";

export default function Greed() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-greed-accent-dark">
        <FlipText className="text-4xl md:text-6xl font-title text-greed-accent-light">
          &quot;The art of monetization.&quot;
        </FlipText>
      </div>
    </DefaultLayout>
  );
}
