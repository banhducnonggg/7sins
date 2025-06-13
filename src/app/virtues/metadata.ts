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
  openGraph: {
    title: "Virtues",
    description: "The Easter Egg",
    type: "website",
    images: "/home/gluttony.png"
  },
};