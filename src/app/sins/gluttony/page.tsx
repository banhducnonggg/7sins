import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Gluttony() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-gluttony-accent-dark">
        <h1 className="text-4xl md:text-6xl font-title text-gluttony-accent-light">
          "More is more."
        </h1>
      </div>
    </DefaultLayout>
  );
}
