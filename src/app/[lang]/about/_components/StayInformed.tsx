"use client";

import { useState } from "react";

const StayInformed = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 bg-[#7100BD] px-5 py-24 text-center">
      <h1 className="max-w-[705px] font-neue sm:text-[38px] font-bold uppercase text-3xl sm:leading-[42px]">
        Stay informed & never miss any CDL TOKEN update!
      </h1>
      <div className="flex flex-col w-full md:w-fit pt-5 md:flex-row items-center gap-5">
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="Your email address"
          className="border border-white bg-transparent px-3 py-2 text-white placeholder:text-white focus:outline-none max-w-[421px] md:min-w-[421px] min-w-full"
        />
        <div className="py-4 px-5 rounded-md bg-white font-neue font-bold text-primary">Subscribe</div>
      </div>
    </div>
  );
};

export default StayInformed;
