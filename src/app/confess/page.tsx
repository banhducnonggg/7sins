"use client";

import DefaultLayout from "@/components/Layout/DefaultLayout";
import { useState, FormEvent, ChangeEvent } from "react";
import emailjs from "@emailjs/browser";

export default function Confess() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        message,
        email,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(
      () => {
        setMessage("Aight your confession is coming to hell");
        setEmail("Reload the page for another one");
      },
      () => {
        setMessage("There was an error. Try again.");
        setEmail("");
      }
    );
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
            value={message}
            required
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
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
