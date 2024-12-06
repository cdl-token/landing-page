"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { leftVariant, rightVariants } from "@/lib/animation-variants";

const StayInformed = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="static z-10 flex w-full flex-col items-center justify-center gap-2 bg-[#7100BD] px-5 py-24 text-center">
      <motion.h1
        initial="hide"
        whileInView="show"
        exit="show"
        variants={leftVariant(0)}
        className="max-w-[705px] font-neue text-3xl font-bold uppercase sm:text-[38px] sm:leading-[42px]"
      >
        Stay informed & never miss any CDL TOKEN update!
      </motion.h1>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="show"
        variants={rightVariants(0)}
        className="flex w-full flex-col items-center gap-5 pt-5 md:w-fit md:flex-row"
      >
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="min-w-full max-w-[421px] border border-white bg-transparent px-3 py-2 text-white placeholder:text-white focus:outline-none md:min-w-[421px]"
        />
        <div className="rounded-md bg-white px-5 py-4 font-neue font-bold text-primary">
          Subscribe
        </div>
      </motion.div>
    </div>
  );
};

export default StayInformed;
