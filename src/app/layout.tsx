import type { Metadata } from "next";
import {
  Unica_One,
  Inter,
  Playfair_Display,
  Syne,
  Bebas_Neue,
  Space_Grotesk,
  Cormorant_Garamond,
  Alegreya_Sans_SC,
  Rubik_Mono_One,
} from "next/font/google";
import "./globals.css";
import AudioPlayer from "@/components/Entities/AudioPlayer";

const unicaOne = Unica_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-title",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-pride",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-envy",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-wrath",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sloth",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-greed",
});

const alegreyaSansSc = Alegreya_Sans_SC({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-lust",
});

const rubikMonoOne = Rubik_Mono_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gluttony",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://1on1.vercel.app/"),
  title: {
    default: "1 on 1 Creative Lab | Fear of being ordinary",
    template: "%s | 1 on 1 Creative Lab"
  },
  description:
    "A creative lab confronting human impulses — a mirror of identity, lust, rage, and beauty. Each sin is a visual confession.",
  keywords: [
    "creative lab",
    "art",
    "identity",
    "self-creation",
    "visual art",
    "digital art",
    "contemporary art",
    "7 sins",
    "seven sins",
    "pride",
    "envy",
    "wrath",
    "sloth",
    "greed",
    "lust",
    "gluttony",
    "virtues",
    "1on1",
    "1 on 1",
    "one on one",
    "One on One",
    "oneonone",
    "creative expression",
    "artistic identity",
    "visual confession",
    "human impulses",
    "contemporary art lab",
    "1on1.vercel.app",
    "fear of being ordinary"
  ],
  authors: [{ name: "1 on 1 Creative Lab" }],
  creator: "1 on 1 Creative Lab",
  publisher: "1 on 1 Creative Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "1 on 1 Creative Lab | Fear of being ordinary",
    description:
      "A creative lab confronting human impulses — a mirror of identity, lust, rage, and beauty. Each sin is a visual confession.",
    type: "website",
    url: "https://1on1.vercel.app/",
    siteName: "1 on 1 Creative Lab",
    locale: "en_US",
    images: [
      {
        url: "/dark-ava.webp",
        width: 1801,
        height: 1800,
        alt: "1 on 1 Creative Lab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 on 1 Creative Lab | Fear of being ordinary",
    description: "A creative lab confronting human impulses — a mirror of identity, lust, rage, and beauty.",
    images: ["/dark-ava.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#100c08",
      },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "1 on 1 Creative Lab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${unicaOne.variable} ${inter.variable} ${playfairDisplay.variable} ${syne.variable} ${bebasNeue.variable} ${spaceGrotesk.variable} ${cormorantGaramond.variable} ${alegreyaSansSc.variable} ${rubikMonoOne.variable} antialiased`}
      >
        <AudioPlayer />
        {children}
      </body>
    </html>
  );
}
