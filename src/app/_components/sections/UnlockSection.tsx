"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  leftToRightVariants,
  rightToLeftVariants,
} from "@/lib/animation-variants";

const UnlockSection = () => {
  return (
    <div className="mt-20 flex items-center justify-center bg-[#7100BD]">
      <div className="flex w-full max-w-7xl flex-col items-center px-10 md:flex-row">
        <motion.div
          className="my-20 flex flex-col gap-y-4 md:max-w-[50%]"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <h1 className="font-neue text-3xl font-bold uppercase md:text-[38px] md:leading-[42.6px]">
            Unlock the future with CDL Token
          </h1>
          <p className="pr-10 text-[16px] leading-[24px]">
            Step into the next era of decentralized finance with CDL Token.
            Harness the power of innovation and opportunity, and be part of a
            revolutionary platform. Don&apos;t miss out – start your journey
            with CDL today and experience the limitless potential of blockchain
            technology.
          </p>
          <Link href="#">
            <button className="mt-5 w-fit rounded-lg border border-white/75 px-[25px] py-[15px] font-neue font-bold transition-all duration-200 ease-in hover:border hover:bg-white/75 hover:text-black">
              Launch Dapp
            </button>
          </Link>
        </motion.div>
        <motion.div
          className="h-fit w-full max-w-[80%] self-center sm:max-w-full md:h-full md:self-end"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <div className="relative flex md:h-full md:w-full">
            <Image
              className="sm:hidden md:absolute md:bottom-0 md:right-0 md:block lg:hidden"
              src="/static/unlock-section/mobile3.svg"
              width={326}
              height={564}
              alt="mobile"
              quality={100}
            />
            <Image
              className="hidden sm:block md:hidden lg:absolute lg:bottom-0 lg:right-0 lg:block"
              src="/static/unlock-section/mobile2.svg"
              width={591}
              height={492}
              alt="mobile"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UnlockSection;
