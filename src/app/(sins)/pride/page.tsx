import DefaultLayout from "@/components/Layout/DefaultLayout";
import { BoxReveal } from "@/components/magicui/box-reveal";

export default function Pride() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-pride-accent-dark">
        <BoxReveal boxColor="#eaeaea">
          <h1 className="text-4xl md:text-6xl font-title text-pride-accent-light">
            &quot;I create, therefore I am.&quot;
          </h1>
        </BoxReveal>
      </div>
    </DefaultLayout>
  );
}
