"use client";

import { motion } from "framer-motion";
import ComparisonTable from "./ComparisonTable";
import {
  bottomVariants,
  leftVariant,
  rightVariants,
} from "@/lib/animation-variants";

const CDLvs = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-5 border-y border-white/30 px-5 py-20 text-center">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="max-w-[455px] font-neue text-3xl font-bold uppercase md:text-[45px] md:leading-[50px]"
        >
          CDL Token vs the Competition
        </motion.h1>
        <motion.span
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightVariants(0)}
          className="max-w-[638px] font-apfel uppercase"
        >
          In the world of blockchain data, CDL Token sets the standard with
          unparalleled reliability, precision, and comprehensive insights
        </motion.span>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={bottomVariants(0)}
          className="max-w-[96vw] overflow-auto pt-10"
        >
          <ComparisonTable />
        </motion.div>
      </div>
    </div>
  );
};

export default CDLvs;
