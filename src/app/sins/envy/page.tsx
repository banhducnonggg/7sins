import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Envy() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-envy-accent-dark">
        <h1 className="text-4xl md:text-6xl font-title text-pride-envy-light">
          "What if it were mine?"
        </h1>
      </div>
    </DefaultLayout>
  );
}
