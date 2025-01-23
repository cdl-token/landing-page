"use client";

import { useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";

const StayInformed = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null); // To hold success or error messages
  const [submitting, setSubmitting] = useState(false); // To indicate API call in progress

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    if (!email) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus({ type: "success", message: "Thank you for subscribing!" });
        setEmail("");
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        type: "error",
        message: "Failed to subscribe. Please try again.",
      });
    }

    setSubmitting(false);

    // Hide the alert after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="flex max-h-[400px] w-full items-center justify-center bg-[#7100BD]">
      <div className="relative flex w-full max-w-7xl flex-col items-center gap-3 px-5 py-20">
        <h1 className="max-w-[750px] text-center font-neue text-lg font-bold uppercase text-white md:text-[44px] md:leading-[48px]">
          Stay informed never miss a move
        </h1>
        <form
          onSubmit={handleNewsletterSubmit}
          className="static z-20 flex w-full max-w-2xl items-center gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email Address"
            className="w-full rounded border border-white bg-transparent px-5 py-3 text-white outline-none placeholder:text-white/50 focus:border-2"
          />
          <PrimaryButton
            type="submit"
            title={submitting ? "Submitting..." : "Sign up"}
            className={`w-fit ${
              submitting ? "cursor-not-allowed bg-gray-400" : "bg-white"
            }`}
            disabled={submitting}
          />
        </form>
        {status && (
          <div
            className={`mt-4 rounded-md px-4 py-2 text-white ${
              status.type === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {status.message}
          </div>
        )}
        <div className="absolute right-0 top-0 hidden md:block">
          <Image
            src="/static/bgs/make-quick-bg.svg"
            width={700}
            height={400}
            alt="Rectangles"
            loading="lazy"
          />
        </div>
        <div className="absolute right-0 top-0 md:hidden">
          <Image
            src="/static/bgs/make-quick-bg.svg"
            width={300}
            height={150}
            alt="Rectangles"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default StayInformed;
