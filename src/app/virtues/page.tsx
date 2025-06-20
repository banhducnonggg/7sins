import { MorphingText } from "@/components/magicui/morphing-text";
import Floating from "@/components/Widgets/virtues/FloatingGallery";
import SubHero from "@/components/Widgets/virtues/SubHero";
import VFooter from "@/components/Widgets/virtues/VFooter";

export default function Virtues() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen max-w-screen bg-gradient-to-r from-lust-accent-light to-lust-accent-dark">
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

export const generateMetadata = () => ({
  title: "The Easter Egg",
  description: "Discover the easter egg.",
  openGraph: {
    title: "The Easter Egg",
    description: "Discover the easter egg.",
    url: "https://1on1.vercel.app/virtues",
    siteName: "1 on 1",
    images: [
      {
        url: "/lust/lust.png",
        width: 1801,
        height: 1800,
        alt: "Virtues Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Easter Egg",
    description: "Discover the easter egg.",
    images: ["/lust/lust.png"],
  },
});
