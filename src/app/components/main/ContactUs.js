"use client";
import React, { useEffect, useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import ViewObserver from "../ui/ViewObserver";
import { useCreateContactService } from "@/services/ContactUs.service";

const ContactUs = () => {
  const { mutate, isLoading, isSuccess } = useCreateContactService();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setEmail("");
      setMessage("");
    }
  }, [isSuccess]);

  return (
    <ViewObserver valueId="contact">
      <div
        id="contact"
        className="relative border mt-10 rounded-2xl border-slate-700 border-opacity-40 sm:mx-6 mx-4"
      >
        <div className="max-w-lg mx-auto px-4 py-16 flex flex-col">
          <h1 className="text-[#daebffbd]  relative z-10 text-4xl md:text-5xl font-sans font-bold">
            Contact Us
          </h1>
          <p></p>
          <input
            type="text"
            placeholder="Your email here..."
            className="rounded-lg border border-gray-800 w-full focus:ring-opacity-20 relative z-10 mt-6  bg-gray-950 placeholder:text-gray-700 px-5 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Your message..."
            className="outline-0 rounded-lg border border-gray-800 focus:ring-2  w-full relative z-10 mt-6  bg-gray-950 placeholder:text-gray-700 px-5 py-3"
            value={message}
            onChange={(event) => {
              event.target.style.height = "auto";
              event.target.style.height = event.target.scrollHeight + "px";
              setMessage(event.target.value);
            }}
          />

          <button
            onClick={() => mutate({ email, message })}
            disabled={isLoading}
            className="z-10 ml-auto mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
        <BackgroundBeams />
      </div>
    </ViewObserver>
  );
};

export default ContactUs;
