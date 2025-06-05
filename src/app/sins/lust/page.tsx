import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Lust() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-lust-accent-dark">
        <h1 className="text-4xl md:text-6xl font-title text-lust-accent-light">
          "Design that seduces"
        </h1>
      </div>
    </DefaultLayout>
  );
}
