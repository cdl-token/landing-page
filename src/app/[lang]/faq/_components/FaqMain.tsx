"use client";

import { motion } from "framer-motion";
import { bottomVariants } from "@/lib/animation-variants";

const FaqMain = () => {
  return (
    <div
      className="relative flex w-full flex-col items-center px-5 pt-40 text-center"
      style={{
        backgroundImage: "url(/static/looper.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <motion.h1
        initial="hide"
        whileInView="show"
        exit="show"
        variants={bottomVariants(0.1)}
        className="static z-10 font-neue text-3xl font-bold lg:text-[60px] lg:leading-[62px]"
      >
        FAQ
      </motion.h1>
      <motion.span
        initial="hide"
        whileInView="show"
        exit="show"
        variants={bottomVariants(0.2)}
        className="static z-10 w-full max-w-[780px] py-5 text-center text-[20px]"
      >
        Unlock the Information You Seek, Dive into Our Comprehensive Compilation
        of Frequently Asked Questions to Discover More about CDL Token.
      </motion.span>
      <div className="static z-10 grid h-[400px] w-full max-w-7xl grid-cols-[7fr_3fr] gap-10 py-20">
        <div className="flex w-full flex-col items-start gap-5 text-start">
          <h1 className="font-neue text-[38px] font-bold uppercase leading-[43px]">
            Popular Questions
          </h1>
          <span className="max-w-[413px] text-[19px] leading-[24px]">
            Frequently Asked Questions to Discover More about CDL Token.
          </span>
          <h2 className="w-full py-10 font-neue text-[22px] font-bold uppercase">
            Getting Started
          </h2>
        </div>
        <div></div>
      </div>
      <div className="absolute left-0 top-0">{gradientSvg}</div>
    </div>
  );
};

const gradientSvg = (
  <svg
    width="862"
    height="1067"
    viewBox="0 0 862 1067"
    className="lg:w-screen"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_3228_2658)">
      <path
        d="M206.071 360.529C191.075 535.938 67.6606 601.375 7.82796 612.167C-100.666 612.167 -84.1932 471.864 -154.061 327.015C-209.955 211.137 -155.008 62.1234 -120.547 2.10135C-5.04744 -103.553 245.265 -303.84 322.518 -259.761C419.083 -204.662 441.236 -36.5248 347.511 26.5267C253.786 89.5782 224.816 141.269 206.071 360.529Z"
        fill="url(#paint0_linear_3228_2658)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3228_2658"
        x="-632.425"
        y="-720.425"
        width="1494.31"
        height="1787.02"
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
          result="effect1_foregroundBlur_3228_2658"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3228_2658"
        x1="114.729"
        y1="-266"
        x2="114.729"
        y2="612.167"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

export default FaqMain;
