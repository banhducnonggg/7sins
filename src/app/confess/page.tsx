import DefaultLayout from "@/components/Layout/DefaultLayout";

export default function Confess() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-8 p-8 text-background bg-foreground">
        <h1 className="text-4xl md:text-6xl font-title">CONFESS</h1>
        <p className="text-2xl md:4xl font-body">What tempts you?</p>
        <form className="flex flex-col items-center justify-center w-full gap-8 p-4 md:w-5/6 lg:w-1/2 bg-secondary rounded-2xl">
          <textarea
            placeholder="Type slowly. Be honest."
            className="w-full h-40 p-4 rounded-lg bg-background text-foreground"
          />
          <button
            type="submit"
            className="w-full py-2 transition ease-in border-2 rounded-lg text-foreground bg-none border-foreground hover:bg-foreground hover:text-background duration-310"
          >
            Send it into the dark
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
}
