"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import { cn } from "@/lib/utils";
import { Check, ChevronDown } from "lucide-react";
import { useState, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false); // Track submitting state
  const recaptchaRef = createRef<ReCAPTCHA>();

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [formSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return; // Prevent duplicate submissions

    const recaptchaValue = recaptchaRef.current?.getValue();

    if (!name || !email || !isChecked || !recaptchaValue) {
      alert(
        !recaptchaValue
          ? "Please complete the ReCAPTCHA."
          : "Please fill in all required fields.",
      );
      return;
    }

    setIsSubmitting(true); // Set submitting state to true

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          message,
          selectedOption,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setFormSubmitted(true);
        setName("");
        setMessage("");
        setIsChecked(false);
        setEmail("");
        setSelectedOption("Your inquiry about");
        recaptchaRef.current?.reset(); // Reset ReCAPTCHA
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

  const options: string[] = [
    "Technical Support",
    "Partnership Opportunities",
    "Investment Inquiries",
    "Regulatory and Community Engagement",
    "General Inquiry",
  ];

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
        className="static z-10 mt-20 flex flex-col rounded-[20px] border border-white/30 bg-[#FAFAFA2B] px-6 py-10 backdrop-blur-[20px] lg:min-w-[680px]"
      >
        <div className="flex w-full flex-col md:flex-row md:space-x-4">
          <input
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            className="mb-4 h-[60px] w-full rounded-md bg-[#232325] pl-4 font-apfel text-white outline-none md:mb-0"
            placeholder="Name*"
            type="text"
          />
          <input
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 h-[60px] w-full rounded-md bg-[#232325] pl-4 font-apfel text-white outline-none"
            placeholder="Email*"
            required
            type="email"
            value={email}
          />
        </div>
        <button
          className="flex h-[60px] w-full items-center justify-between rounded-md bg-[#232325] px-4 font-apfel text-white outline-none"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          type="button"
        >
          <span>{selectedOption || "Your inquiry about"}</span>
          <div>
            <ChevronDown className="h-4 w-4" />
          </div>
        </button>
        <div
          className={cn(
            "mb-4 flex w-full flex-col items-center justify-between rounded-md bg-[#232325] px-2 text-start font-apfel text-white outline-none",
            isDropdownOpen
              ? "mt-1 h-[280px] overflow-auto py-2 sm:h-[260px]"
              : "h-0 overflow-hidden",
            "transition-all duration-200 ease-in",
          )}
        >
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setIsDropdownOpen(false);
              }}
              className="flex w-full rounded-[3px] px-2 py-3 text-start transition-all duration-200 ease-in hover:bg-[#f3f3f3] hover:text-black"
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
        <textarea
          name="message"
          className="mb-4 h-[175px] w-full rounded-md bg-[#232325] pl-4 pt-4 font-apfel text-white outline-none"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="w-full md:w-[625px]">
          <div className="flex items-center justify-start">
            <button
              onClick={() => setIsChecked(!isChecked)}
              className="ml-2 flex h-5 w-5 items-center justify-center rounded-[3px] bg-[#232325]"
              type="button"
            >
              {isChecked && <Check className="h-3 w-3 text-white" />}
            </button>
            <label
              htmlFor="link-checkbox"
              className="ms-2 select-none font-apfel text-[16px] font-[400] text-white"
            >
              I accept terms & conditions
            </label>
          </div>
          <div className="mr-auto pt-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            />
          </div>
          <PrimaryButton
            className="mx-auto mt-10"
            title={isSubmitting ? "Submitting..." : "Send Message"}
            type="submit"
            disabled={isSubmitting} // Disable button during submission
          />
        </div>
      </form>
    </>
  );
};

export default ContactForm;
