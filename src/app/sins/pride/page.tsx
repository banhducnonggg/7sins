import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Pride() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-pride-accent-dark">
        <h1 className="text-4xl md:text-6xl font-title text-pride-accent-light">
          "I create, therefore I am."
        </h1>
      </div>
    </DefaultLayout>
  );
}
