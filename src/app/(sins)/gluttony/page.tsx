import DefaultLayout from "@/components/Layout/DefaultLayout";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function Gluttony() {
  return (
    <DefaultLayout>
      <div className="flex items-center justify-center w-full h-screen bg-gluttony-accent-dark">
        {/* <h1 className="text-4xl md:text-6xl font-title text-gluttony-accent-light">
          &quot;More is more.&quot;
        </h1> */}
        <SpinningText radius={4} className="text-4xl md:text-6xl font-title text-gluttony-accent-light">
          More is more • More is more •
        </SpinningText>
      </div>
    </DefaultLayout>
  );
}
