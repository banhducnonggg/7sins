import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Greed() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-greed-accent-dark">
        <h1 className="text-4xl md:text-6xl font-title text-greed-accent-light">
          &quot;The art of monetization.&quot;
        </h1>
      </div>
    </DefaultLayout>
  );
}
