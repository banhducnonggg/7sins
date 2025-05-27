import Hero from "../entities/home/Hero";
import What from "../entities/home/What";

export default function HomeContent() {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <What />
    </div>
  );
}
