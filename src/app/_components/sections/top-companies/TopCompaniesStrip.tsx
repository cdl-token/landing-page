"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { bottomVariants, leftVariant } from "@/lib/animation-variants";
import { Sparkles } from "@/components/ui/sparkles";

const CompaniesSlider = dynamic(() => import("./CompaniesSlider"), {
  ssr: false,
});
const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
});

const TopCompaniesStrip = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center">
      {/* Background Sparkles */}
      <div className="absolute bottom-0">
        <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#3273ff,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#163474] after:bg-[#08132b]">
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction="top"
            opacitySpeed={2}
            color="#32A7FF"
            className="absolute inset-x-0 bottom-0 right-0 h-full w-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-5">
        {/* Heading */}
        <motion.p
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="static z-20 text-center font-apfel text-xs text-white/50 sm:text-base"
        >
          Used by leading brands/companies from across the globe
        </motion.p>

        {/* Companies Marquee */}
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={bottomVariants(0.2)}
          className="w-full py-5"
        >
          <Marquee>
            <CompaniesSlider />
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
};

export default TopCompaniesStrip;
