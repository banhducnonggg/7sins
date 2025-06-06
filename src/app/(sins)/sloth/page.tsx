import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Sloth() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-sloth-accent-dark">
        <h1 className="text-4xl md:text-6xl font-title text-sloth-accent-light">
          &quot;Minimal, but meaningful.&quot;
        </h1>
      </div>
    </DefaultLayout>
  );
}
