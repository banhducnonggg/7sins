import DefaultLayout from "@/components/Layout/DefaultLayout";
import SlothContent from "@/components/Widgets/sloth/SlothContent";

export default function Sloth() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full min-h-screen bg-sloth-accent-light">
        <div className="relative flex flex-col items-center justify-center w-full h-screen bg-sloth-accent-dark">
          <h1 className="text-lg md:text-4xl lg:text-6xl font-sloth text-sloth-accent-light">
            &quot;Minimal, but meaningful.&quot;, SLOTH
          </h1>
        </div>
        <SlothContent />
      </div>
    </DefaultLayout>
  );
}
