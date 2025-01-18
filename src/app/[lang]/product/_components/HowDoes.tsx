"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leftVariant, rightVariants } from "@/lib/animation-variants";

const HowDoes = () => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="grid w-full max-w-7xl border-y border-white/30 px-5 py-20 md:grid-cols-[6fr_4fr]">
        <div className="flex max-w-[730px] flex-col justify-center gap-5">
          <motion.h1
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
            className="font-neue text-3xl font-bold uppercase md:text-[45px] md:leading-[50px]"
          >
            Trade Smarter, Build Better, Act Faster
          </motion.h1>
          <motion.span
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
          >
            Our data doesn&apos;t compromise. We deliver directly from source
            via our unique Neo Oracle and Live Data Flow technology so our
            market insights, APIs, and plug-ins are unparalleled.
          </motion.span>
          <motion.span
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
          >
            Managing blockchain data is complex, costly, and time-consuming,
            requiring nodes, servers and vast resources. Save time, money and
            man-power with our range of intuitive solutions, so you can focus on
            what matters to you and your team.
          </motion.span>
        </div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightVariants(0)}
          className="flex items-center justify-center px-5 py-5"
        >
          <Image
            src="/static/services/chip.svg"
            width={433}
            height={518}
            alt="CHIP"
          />
        </motion.div>
      </div>
      <div className="absolute top-10">{gradientSvg}</div>
    </div>
  );
};

const gradientSvg = (
  <svg
    width="1728"
    height="1625"
    viewBox="0 0 1728 1625"
    fill="none"
    className="lg:w-screen"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_84_1977)">
      <path
        d="M749.814 570.897C585.967 371.644 -277.901 481.794 -359.085 518.482C-490.034 608.63 306.964 677.7 342.99 910.582C371.81 1096.89 941.902 940.949 1213.23 1024.6C1677.92 1167.86 2134.76 1223.79 2191.38 1106.39C2262.15 959.656 1363.56 854.732 1198.05 856.507C1032.54 858.282 954.622 819.963 749.814 570.897Z"
        fill="url(#paint0_linear_84_1977)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_84_1977"
        x="-828.029"
        y="0.538483"
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
          result="effect1_foregroundBlur_84_1977"
        />
      </filter>
      <linearGradient
        id="paint0_linear_84_1977"
        x1="1160.15"
        y1="1403"
        x2="430.481"
        y2="343.072"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

export default HowDoes;
