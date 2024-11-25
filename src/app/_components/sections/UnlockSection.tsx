"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const UnlockSection = () => {
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
          <h1 className="font-neue text-[38px] font-bold uppercase leading-[42.6px]">
            Unlock the future with CDL Token
          </h1>
          <p className="pr-10 text-[16px] leading-[24px]">
            Step into the next era of decentralized finance with CDL Token.
            Harness the power of innovation and opportunity, and be part of a
            revolutionary platform. Don&apos;t miss out – start your journey with CDL
            today and experience the limitless potential of blockchain
            technology.
          </p>
          <Link href="#">
            <button className="rounded-lg font-neue font-bold hover:bg-white/75 hover:text-black transition-all ease-in duration-200 border-white/75 border mt-5 w-fit px-[25px] py-[15px] hover:border">
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
