"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  bottomVariants,
  leftVariant,
  rightVariants,
  topVariants,
} from "@/lib/animation-variants";

const Comprehensive = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="static z-10 flex w-full max-w-7xl flex-col items-center justify-center gap-10 border-b border-white/30 px-5 py-20 text-center">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="font-neue text-3xl font-bold uppercase md:text-[45px]"
        >
          Comprehensive Access Points
        </motion.h1>
        <div className="grid w-full gap-x-10 gap-y-20 pt-10 md:grid-cols-2">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
            className="flex flex-col items-center gap-5 text-start md:flex-row"
          >
            <Image
              src="/static/services/pricing.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                USD Pricing
              </h1>
              <span className="font-apfel text-lg uppercase">
                Get the exact value of every real-time or historical on-chain
                transaction
              </span>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={bottomVariants(0)}
            className="flex flex-col items-center gap-5 text-start md:flex-row"
          >
            <Image
              src="/static/services/charts.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                Charts
              </h1>
              <span className="font-apfel text-lg uppercase">
                Everything required to quickly populate accurate and
                comprehensive pricing charts.
              </span>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={topVariants(0)}
            className="flex flex-col items-center gap-5 text-start md:flex-row"
          >
            <Image
              src="/static/services/stacks.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                Real-time aggregates
              </h1>
              <span className="font-apfel text-lg uppercase">
                Volume, liquidity, unique wallets, and more available instantly
                for multiple timeframes
              </span>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0)}
            className="flex flex-col items-center gap-5 text-start md:flex-row"
          >
            <Image
              src="/static/services/holder.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                Holders
              </h1>
              <span className="font-apfel text-lg uppercase">
                Detailed information about token and NFT holders in a format
                that&apos;s easy to access and consistently reliable.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
