"use client";

import { Sparkles } from "@/components/ui/sparkles";
import CompaniesSlider from "./CompaniesSlider";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { bottomVariants, topVariants } from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";

const TopCompaniesStrip = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center">
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
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-5">
        <TextAnimation
          as="p"
          letterAnime={true}
          text="Used by leading brands/companies from across the globe"
          classname="static z-20 text-center font-apfel text-xs text-white/50 sm:text-base"
          variants={{
            hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          }}
        />
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
        {/* <div className="flex w-full flex-wrap items-center justify-center gap-5 my-10 lg:justify-between">
          <Image
            src="/static/companies/binance.svg"
            width={150}
            height={40}
            alt="binance"
          />
          <Image
            src="/static/companies/polygon.svg"
            width={150}
            height={40}
            alt="polygon"
          />
          <Image
            src="/static/companies/solana.svg"
            width={150}
            height={40}
            alt="solana"
          />
          <Image
            src="/static/companies/polkadot.svg"
            width={150}
            height={40}
            alt="polkadot"
          />
          <Image
            src="/static/companies/gorand.svg"
            width={150}
            height={40}
            alt="gorand"
          />
        </div> */}
      </div>
    </section>
  );
};

export default TopCompaniesStrip;
