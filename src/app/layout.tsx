import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "1on1 — Fear of Being Ordinary",
  description:
    "1on1 is a visual and emotional archive — a lab of creative expression and self-confrontation.",
    icons: {
      icon: "/dark-ava.png",
      apple: "/apple-touch-icon.png"
    },
  openGraph: {
    title: "1on1 — Fear of Being Ordinary",
    description:
      "A lab of creative visual works and deep self-talks. Documenting the search for meaning, identity, and emotion.",
    url: "https://1on1.vercel.app",
    siteName: "1on1",
    images: [
      {
        url: "/dark-ava.png",
        width: 1800,
        height: 1800,
        alt: "1on1 - Fear of Being Ordinary",
      },
    ],
    type: "website",
  },
  metadataBase: new URL("https://1on1.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://use.typekit.net/itc7dhv.css"
          as="style"
        />
        <link rel="stylesheet" href="https://use.typekit.net/itc7dhv.css" />
      </head>
      <body className={`antialiased font-obviously`}>{children}</body>
    </html>
  );
}
