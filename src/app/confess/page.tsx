"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useState, FormEvent, ChangeEvent } from "react";

export default function Confess() {
  const [confession, setConfession] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    console.log({
      confession,
      email,
    });
    // Here you would typically send the data to a backend API
    // For now, we're just logging it.

    // You might want to clear the form after submission:
    // setConfession("");
    // setEmail("");
    setConfession("We received your confession");
    setEmail("Reload the page for another confession");
  };

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center w-full h-screen gap-0 p-8 text-background bg-foreground">
        <h1 className="text-4xl md:text-6xl font-title">CONFESS</h1>
        <p className="mb-8 text-2xl md:4xl font-body">What tempts you?</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-full gap-4 p-4 md:w-5/6 lg:w-1/2 bg-secondary rounded-2xl"
        >
          <textarea
            placeholder="Type slowly. Be honest."
            className="w-full h-40 p-4 rounded-lg bg-background text-foreground"
            value={confession}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setConfession(e.target.value)
            }
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="OnlyIfYouWant@ReplyFrom.Hell"
            className="w-full p-4 rounded-lg bg-background text-foreground"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
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
