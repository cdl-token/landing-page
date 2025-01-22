"use client";

import { useState, useRef } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ReCAPTCHA from "react-google-recaptcha";

const FaqForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Track submission state
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions

    const recaptchaValue = recaptchaRef.current?.getValue();

    if (!name || !email || !question || !recaptchaValue) {
      alert(
        !recaptchaValue
          ? "Please complete the ReCAPTCHA."
          : "Please fill in all required fields."
      );
      return;
    }

    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await fetch("/api/faqs", {
        method: "POST",
        body: JSON.stringify({ name, email, question }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        setName("");
        setEmail("");
        setQuestion("");
        recaptchaRef.current?.reset(); // Reset ReCAPTCHA
        setTimeout(() => setFormSubmitted(false), 5000); // Reset form submission status after 5 seconds
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
    }
  };

  return (
    <>
      {formSubmitted && (
        <div className="fixed bottom-5 left-0 right-0 z-[60] flex items-center justify-center bg-black/50 py-4">
          <div className="rounded-lg bg-white px-6 py-4 shadow-lg">
            <h2 className="font-apfel text-lg font-bold text-black">
              Thank you!
            </h2>
            <p className="mt-2 text-gray-700">
              Your message has been sent successfully.
            </p>
          </div>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-end gap-3 pb-20 static z-20"
      >
        <h1 className="mb-2 font-neue text-[21px] font-bold">
          Can’t Find Answer? Ask Us
        </h1>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="rounded-lg bg-[#232325] px-4 py-3 placeholder:text-[#898990] focus:outline-none"
          placeholder="Name*"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-lg bg-[#232325] px-4 py-3 placeholder:text-[#898990] focus:outline-none"
          placeholder="Email*"
          required
        />
        <textarea
          name="question"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="h-[200px] rounded-lg bg-[#232325] px-4 py-3 placeholder:text-[#898990] focus:outline-none"
          placeholder="Ask your question*"
          required
        ></textarea>
        <div className="pt-4">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          />
        </div>
        <PrimaryButton
          title={isSubmitting ? "Submitting..." : formSubmitted ? "Message Sent!" : "Send a message"}
          type="submit"
          disabled={isSubmitting} // Disable button during submission
          className={isSubmitting || formSubmitted ? "pointer-events-none opacity-50" : ""}
        />
      </form>
    </>
  );
};

export default FaqForm;
