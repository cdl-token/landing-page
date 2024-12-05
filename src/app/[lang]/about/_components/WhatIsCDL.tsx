"use client";

import { motion } from "framer-motion";
import TextAnimation from "@/components/ui/scroll-text";
import Image from "next/image";
import { leftVariant } from "@/lib/animation-variants";

const WhatIsCDL = () => {
  return (
    <div className="relative flex min-h-[45rem] w-full items-center justify-center">
      <div className="absolute top-0">{gradientSvg}</div>
      <div className="static z-10 flex w-full max-w-7xl flex-col px-5 py-10">
        <div className="grid py-10 md:grid-cols-[6fr_4fr]">
          <div className="flex flex-col gap-3">
            <TextAnimation
              text="WHAT IS CDL TOKEN?"
              variants={{
                hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                visible: {
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                  transition: { ease: "linear" },
                },
              }}
              classname="font-neue text-2xl md:text-[34px] font-bold uppercase text-primary"
            />
            <div className="flex items-center">
              <TextAnimation
                text="We've built a platform to trade & utilize crypto data"
                variants={{
                  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: { ease: "linear" },
                  },
                }}
                classname="font-neue text-3xl font-bold uppercase text-white md:text-[45px] md:leading-[50px]"
              />
              <div className="relative md:hidden max-w-[78.7px] items-center flex h-full w-full flex-col">
                <div className="absolute w-[120px] h-full rounded-full bg-black/75 z-10"></div>
                <img
                  src="/static/glow-logo.png"
                  className="absolute top-0 md:hidden"
                  alt="shape 1"
                  width={70}
                  height={70}
                />
                <img
                  src="/static/glow-logo.png"
                  className="absolute top-12 left-[-24px] md:hidden"
                  alt="shape 1"
                  width={70}
                  height={70}
                />
                <img
                  src="/static/glow-logo.png"
                  className="md:hidden absolute top-12 left-[34px]"
                  alt="shape 1"
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0)}
              className="text-[19px]"
            >
              CDL Token is a cryptocurrency designed for the future of funding,
              empowering access to advanced crypto data services and
              transforming blockchain-driven insights
            </motion.span>
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.1)}
              className="md:text-[19px]"
            >
              Built to serve as a utility token, CDL integrates seamlessly into
              platforms that offer advanced crypto analytics, trading insights,
              and decentralized solutions. By holding or using CDL Tokens, users
              gain access to premium features, exclusive tools, and reduced fees
              within the CDL ecosystem.
            </motion.span>
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.2)}
              className="md:text-[19px]"
            >
              The CDL Token is more than just a cryptocurrency; it&apos;s a
              gateway to a robust and evolving ecosystem where users, traders,
              and developers collaborate and innovate in the crypto space.
            </motion.span>
          </div>
          <Image
            src="/static/glow-logo.png"
            className="hidden md:block"
            alt="shape 1"
            width={740}
            height={740}
          />
        </div>
        <div className="grid place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
            className="flex max-w-[269px] flex-col items-center gap-2"
          >
            <Image
              src="/static/what-is/icon-1.svg"
              width={56}
              height={56}
              alt="Icon 1"
            />
            <h1 className="text-center font-neue font-bold uppercase md:text-start">
              EVM Compatibility
            </h1>
            <span className="text-center font-apfel text-white/75">
              Seamless integration with Ethereum-based tools, standards, and
              decentralized applications
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.1)}
            className="flex max-w-[269px] flex-col items-center gap-2"
          >
            <Image
              src="/static/what-is/icon-2.svg"
              width={62}
              height={50}
              alt="Icon 2"
            />
            <h1 className="font-neue font-bold uppercase">EVM Compatibility</h1>
            <span className="text-center font-apfel text-white/75">
              Seamless integration with Ethereum-based tools, standards, and
              decentralized applications
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.2)}
            className="flex max-w-[269px] flex-col items-center gap-2"
          >
            <Image
              src="/static/what-is/icon-3.svg"
              width={56}
              height={56}
              alt="Icon 3"
            />
            <h1 className="font-neue font-bold uppercase">EVM Compatibility</h1>
            <span className="text-center font-apfel text-white/75">
              Seamless integration with Ethereum-based tools, standards, and
              decentralized applications
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.3)}
            className="flex max-w-[269px] flex-col items-center gap-2"
          >
            <Image
              src="/static/what-is/icon-4.svg"
              width={48}
              height={62}
              alt="Icon 4"
            />
            <h1 className="font-neue font-bold uppercase">EVM Compatibility</h1>
            <span className="text-center font-apfel text-white/75">
              Seamless integration with Ethereum-based tools, standards, and
              decentralized applications
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const gradientSvg = (
  <svg
    width="1728"
    className="lg:w-screen"
    height="1624"
    viewBox="0 0 1728 1624"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_3301_604)">
      <path
        d="M710.581 570.526C546.734 371.273 -317.133 481.422 -398.317 518.111C-529.267 608.259 267.732 677.329 303.757 910.21C332.577 1096.52 902.669 940.578 1173.99 1024.23C1638.69 1167.49 2095.53 1223.42 2152.14 1106.02C2222.91 959.284 1324.33 854.361 1158.82 856.136C993.304 857.911 915.389 819.592 710.581 570.526Z"
        fill="url(#paint0_linear_3301_604)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3301_604"
        x="-867.261"
        y="0.16712"
        width="3477.79"
        height="1623.77"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="227.213"
          result="effect1_foregroundBlur_3301_604"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3301_604"
        x1="1120.92"
        y1="1402.63"
        x2="391.248"
        y2="342.701"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

export default WhatIsCDL;
