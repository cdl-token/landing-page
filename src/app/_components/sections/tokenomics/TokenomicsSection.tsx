"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  leftToRightVariants,
  leftVariant,
  rightToLeftVariants,
} from "@/lib/animation-variants";
import React from "react";

// Dynamic imports for better performance
const TextAnimation = dynamic(() => import("@/components/ui/scroll-text"), {
  ssr: false,
});
const Card = dynamic(() => import("./Card"), { ssr: false });
const Chart1 = dynamic(() => import("./Chart1"), { ssr: false });
const Chart2 = dynamic(() => import("./Chart2"), { ssr: false });

const TokenomicsSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center border-t border-white/30 px-5 py-20">
        {/* Title */}
        <TextAnimation
          text="Tokenomics"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
          classname="font-neue font-bold text-4xl uppercase text-white"
        />

        {/* Description */}
        <motion.p
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="max-w-[1000px] text-balance text-center font-apfel text-white/70"
        >
          CDL Token is designed for sustainable growth and long-term value, with
          adaptable tokenomics to support a thriving community. By offering
          powerful analytics tools, CDL Token empowers users to shape the future
          of crypto data solutions and drive platform success.
        </motion.p>

        {/* Tokenomics Chart Section */}
        <motion.div
          className="grid h-full w-full max-w-7xl grid-cols-1 gap-y-5 px-5 py-5 sm:grid-cols-2 md:px-20 md:py-20 lg:grid-cols-4"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <Chart1 />
          <div className="flex flex-col justify-center gap-y-4">
            <AllocationItem color="#7100BD" label="15% Private Sale" />
            <AllocationItem color="#D1A3FF" label="15% Public Sale" />
            <AllocationItem color="#7F38CC" label="10% Partnership Funds" />
            <AllocationItem color="#D08BFE" label="15% Staking Reward" />
            <AllocationItem color="#5A199A" label="5% Team Pool" />
          </div>
          <Chart2 />
          <div className="flex flex-col justify-center gap-y-4 pl-5">
            <AllocationItem color="#CFD4C1" label="10% Operations" />
            <AllocationItem color="#CE86FF" label="5% Legal Department" />
            <AllocationItem color="#FEDB32" label="15% Team Management" />
            <AllocationItem
              color="#F7931A"
              label="10% Marketing & Development"
            />
          </div>
        </motion.div>

        {/* Token Sale Stages */}
        <motion.div
          className="mt-8 flex w-full flex-col px-4 sm:px-24"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <TextAnimation
            text="Token Sale Stages"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="mb-5 mr-auto flex items-center justify-center font-neue text-[28.43px] font-extrabold leading-8 text-white"
          />
          <div className="mt-3 grid w-full items-center justify-center gap-10 md:grid-cols-2 md:gap-20 xl:grid-cols-4">
            <Card
              state={1}
              bonusPercent={30}
              daysLeft="1 day only"
              start="End In: "
              endTime="03:08:30:15"
            />
            <Card
              state={2}
              bonusPercent={20}
              daysLeft="1 day only"
              start="End In: "
              endTime="04:08:30:15"
            />
            <Card
              state={3}
              bonusPercent={15}
              daysLeft="2 weeks"
              start="Start In: "
              endTime="05:08:30:15"
            />
            <Card
              state={4}
              bonusPercent={0}
              daysLeft="1 month"
              start="Start In: "
              endTime="07.30.2022"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TokenomicsSection;

// Reusable AllocationItem Component
const AllocationItem = React.memo(
  ({ color, label }: { color: string; label: string }) => {
    return (
      <div className="flex items-center gap-x-3">
        <div className="h-4 w-4" style={{ backgroundColor: color }}></div>
        <h2>{label}</h2>
      </div>
    );
  },
);

AllocationItem.displayName = "AllocationItem";
