"use client";

import TextAnimation from "@/components/ui/scroll-text";
import { leftVariant, rightVariants } from "@/lib/animation-variants";
import { motion } from "framer-motion";
import Image from "next/image";

const JoinTheSystem = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="static z-10 grid max-w-7xl gap-2 px-5 py-20 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <TextAnimation
            text="Join the fastest growing ecosystem"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="gap-3 font-neue text-2xl font-bold uppercase md:text-[38px] md:leading-[42px] text-white"
          />
          <motion.span
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
            className="text-"
          >
            CDL Token is at the forefront of a dynamic and rapidly growing
            ecosystem designed to enhance crypto data services and blockchain
            innovation.
          </motion.span>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <motion.li
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.1)}
            >
              Seamless Integration: Built to work effortlessly with Ethereum and
              other blockchain platforms.
            </motion.li>
            <motion.li
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.2)}
            >
              Incentive-Driven: Rewards for staking, referrals, and active
              participation.
            </motion.li>
            <motion.li
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.3)}
            >
              Future-Proof: A scalable ecosystem ready for decentralized
              applications and enterprise adoption.
            </motion.li>
          </ul>
          <div className="grid gap-10 py-10 sm:grid-cols-3">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0)}
              className="flex flex-col items-center justify-center sm:items-start sm:justify-start"
            >
              <h1 className="font-neue text-2xl font-bold md:text-[38px] md:leading-[42px]">
                60M+
              </h1>
              <span className="font-apfel">Total Data Transactions</span>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.1)}
              className="flex flex-col items-center justify-center sm:items-start sm:justify-start"
            >
              <h1 className="font-neue text-2xl font-bold md:text-[38px] md:leading-[42px]">
                1500+
              </h1>
              <span className="font-apfel">Validator nodes</span>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.2)}
              className="flex flex-col items-center justify-center sm:items-start sm:justify-start"
            >
              <h1 className="font-neue text-2xl font-bold md:text-[38px] md:leading-[42px]">
                1000+
              </h1>
              <span className="font-apfel">Data Integrations</span>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightVariants(0)}
        >
          <Image
            src="/static/map.svg"
            className="static z-10"
            width={870}
            height={590}
            alt="Map"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default JoinTheSystem;
