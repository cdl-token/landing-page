"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import Image from "next/image";

const TokenomicsSection = () => {
  const leftToRightVariants = {
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const rightToLeftVariants = {
    hide: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-full w-full max-w-7xl flex-col items-center justify-center border-t border-white/30 px-5 py-20">
        <h1 className="font-neue text-4xl font-bold uppercase">Tokenomics</h1>
        <span className="max-w-[1000px] text-balance text-center font-apfel text-white/70">
          CDL Token is designed for sustainable growth and long-term value, with
          adaptable tokenomics to support a thriving community. By offering
          powerful analytics tools, CDL Token empowers users to shape the future
          of crypto data solutions and drive platform succes
        </span>
        <motion.div
          className="grid h-full w-full max-w-7xl grid-cols-1 gap-y-5 px-5 py-5 sm:grid-cols-2 md:px-20 md:py-20 lg:grid-cols-4"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          {/* <TotalSuppliesChart /> */}
          <Image
            src="/static/charts/chart1.svg"
            width={380}
            height={380}
            alt="chart 1"
          />
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
          <Image
            src="/static/charts/chart2.svg"
            width={380}
            height={380}
            alt="chart 1"
          />
          <div className="flex flex-col justify-center gap-y-4 pl-5">
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#CFD4C1]"></div>
              <h2>15% Private Sale</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#CE86FF]"></div>
              <h2>15% Public Sale</h2>
            </div>
            <div className="flex items-center gap-x-3">
              <div className="h-4 w-4 bg-[#FEDB32]"></div>
              <h2>15% Staking Reward</h2>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="mt-1 h-4 w-4 bg-[#F7931A]"></div>
              <h2>10% Partnership Funds</h2>
            </div>
            <div className="flex items-start gap-x-3">
              <div className="mt-1 h-4 w-4 bg-[#7100BD]"></div>
              <h2>5% Team Pool</h2>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mt-8 flex w-full flex-col px-4 sm:px-24"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <h4 className="mb-5 mr-auto flex items-center justify-center font-neue text-[28.43px] font-extrabold leading-8">
            Token Sale Stages
          </h4>
          <div className="mt-3 grid w-full items-center justify-center gap-20 md:grid-cols-2 xl:grid-cols-4">
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
