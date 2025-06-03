import Image from "next/image";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <Header />
      <div className="w-full h-screen">1</div>
      <div className="w-full h-screen">2</div>
      <Footer />
    </div>
  );
}
