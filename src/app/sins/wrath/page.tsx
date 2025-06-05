import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Wrath() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-wrath-accent-dark">
        <h1 className="text-4xl md:text-6xl font-title text-wrath-accent-light">
          "Create to disrupt."
        </h1>
      </div>
    </DefaultLayout>
  );
}
