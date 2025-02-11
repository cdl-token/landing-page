"use client";

import { Cookie } from "lucide-react";
import { useState } from "react";

export default function CookiesBanner() {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="bg-ash fixed bottom-0 z-50 bg-black flex w-screen items-center justify-center px-5 py-5 md:py-10">
      <div className="flex w-full max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex w-full items-center justify-start gap-3 md:gap-4">
          <div className="text-primary">
            <Cookie className="h-10 w-10" size={50} />
          </div>
          <div className="flex font-sans text-xs">
            We use cookies to enhance your experience. By continuing to browse,
            you agree to our use of cookies
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:justify-end">
          <div className="flex items-center gap-2">
            <button
              className="py-2 font-sans text-xs px-3 bg-primary rounded-md border border-primary font-bold"
              onClick={() => setIsOpen(false)}
            >
              Accept
            </button>
            <button
              className="py-2 font-sans text-xs px-3 rounded-md border border-white font-bold"
              onClick={() => setIsOpen(false)}
            >
              Reject
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
