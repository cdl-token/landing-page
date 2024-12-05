"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import {
  leftToRightVariants,
  leftVariant,
  rightToLeftVariants,
  rightVariants,
} from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";

const TokenomicsSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center border-t border-white/30 px-5 py-20">
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
        <motion.div
          className="grid h-full w-full max-w-7xl grid-cols-1 gap-y-5 px-5 py-5 sm:grid-cols-2 md:px-20 md:py-20 lg:grid-cols-4"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          {/* <TotalSuppliesChart /> */}
          <Chart1 />
          <div className="flex flex-col justify-center gap-y-4">
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#7100BD]"></div>
              <h2>15% Private Sale</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#D1A3FF]"></div>
              <h2>15% Public Sale</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#7F38CC]"></div>
              <h2>10% Partnership Funds</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#D08BFE]"></div>
              <h2>15% Staking Reward</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#5A199A]"></div>
              <h2>5% Team Pool</h2>
            </div>
          </div>
          {/* <TokenomicsChart2 /> */}
          <Chart2 />
          <div className="flex flex-col justify-center gap-y-4 pl-5">
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#CFD4C1]"></div>
              <h2>10% Operations</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#CE86FF]"></div>
              <h2>5% Legal Department</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#FEDB32]"></div>
              <h2>15% Team Management</h2>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="mt-1 h-4 w-4 bg-[#F7931A]"></div>
              <h2>10% Marketing & Development</h2>
            </div>
            {/* <div className="flex items-start gap-x-3">
              <div className="mt-1 h-4 w-4 bg-[#7100BD]"></div>
              <h2>5% Team Pool</h2>
            </div> */}
          </div>
        </motion.div>
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
              bonusPercent={13}
              daysLeft={"1 day only"}
              start={"End In: "}
              endTime={"03:08:30:15"}
            ></Card>
            <Card
              state={2}
              bonusPercent={20}
              daysLeft={"1 day only"}
              start={"End In: "}
              endTime={"04:08:30:15"}
            ></Card>
            <Card
              state={3}
              bonusPercent={15}
              daysLeft={"2 weeks"}
              start={"Start In: "}
              endTime={"05:08:30:15"}
            ></Card>
            <Card
              state={4}
              bonusPercent={0}
              daysLeft={"1 month"}
              start={"Start In: "}
              endTime={"07.30.2022"}
            ></Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TokenomicsSection;
