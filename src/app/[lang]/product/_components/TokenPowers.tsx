"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leftVariant, rightVariants } from "@/lib/animation-variants";

const TokenPowers = () => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="absolute -top-10 right-0">
        <Image
          src="/static/services/parallax.png"
          width={700}
          height={867}
          className="-z-10 static"
          alt="parallax"
        />
      </div>
      <div className="static z-10 grid w-full max-w-7xl gap-10 px-5 py-20 md:grid-cols-2">
        <div className="flex flex-col gap-5 py-10">
          <motion.h1
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
            className="max-w-[310px] font-neue text-3xl uppercase md:text-[55px] md:leading-[58px]"
          >
            Cdl token powers industry leaders
          </motion.h1>
          <motion.span
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.1)}
            className="max-w-[320px] font-apfel"
          >
            Learn how CDL helps industry leaders save time, money, and
            development resources
          </motion.span>
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightVariants(0)}
          className="flex flex-col gap-5 rounded-[20px] border border-white/50 px-10 py-12 text-[#B8B8B8]"
        >
          <Image
            src="/static/services/companies/tradingview.svg"
            width={173}
            height={32}
            alt="Trading view"
          />
          <span className="text-[24px] uppercase leading-[29px]">
            TradingView, and their 50 million users, rely on CDL TOKEN as the
            sole source of truth for all on-chain data.
          </span>
          <span className="pb-40 text-[19px] leading-[30px]">
            “CDL has been instrumental in our efforts to support high quality
            DEX data via the TradingView interface. We were using 3-4 data
            providers previously, including the Graph, and have now consolidated
            everything to CDL.”
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default TokenPowers;
