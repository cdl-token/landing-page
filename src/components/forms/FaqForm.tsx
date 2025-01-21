"use client";

import { useState } from "react";
import PrimaryButton from "@/components/buttons/PrimaryButton";

const FaqForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !question) {
      alert("Please fill in all required fields.");
      return;
    }

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
        setTimeout(() => setFormSubmitted(false), 5000); // Reset form submission status after 5 seconds
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-end gap-3 pb-20"
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
      <PrimaryButton
        title={formSubmitted ? "Message Sent!" : "Send a message"}
        type="submit"
        className={formSubmitted ? "opacity-50 pointer-events-none" : ""}
      />
    </form>
  );
};

export default FaqForm;
