import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
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
};