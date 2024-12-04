"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leftVariant } from "@/lib/animation-variants";

const FilterSearch = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid w-full max-w-7xl gap-5 border-t border-white/30 px-5 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="font-neue text-[40px] font-bold uppercase leading-[50px]"
        >
          Filter & Search
        </motion.h1>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.1)}
          className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5"
        >
          <Image
            src="/static/services/search.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Complete Results</h1>
          <span className="leading-[20px] text-white/70">
            Find any token or NFT in under 500ms.
          </span>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.2)}
          className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5"
        >
          <Image
            src="/static/services/indexing.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Automatic Indexing</h1>
          <span className="leading-[20px] text-white/70">
            New assets available immediately after creation.
          </span>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.3)}
          className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5"
        >
          <Image
            src="/static/services/power.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Powerful Filters</h1>
          <span className="leading-[20px] text-white/70">
            Sort by volume, liquidity, number of transactions, and more.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default FilterSearch;
