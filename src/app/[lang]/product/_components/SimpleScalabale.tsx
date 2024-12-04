"use client";

import {
  leftVariant,
  rightVariants,
  topVariants,
} from "@/lib/animation-variants";
import { motion } from "framer-motion";

const SimpleScalabale = () => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-2 border-b border-white/30 px-5 py-20">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="font-neue text-[45px] font-bold uppercase leading-[50px]"
        >
          Simple, scalable pricing
        </motion.div>
        <motion.span
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightVariants(0)}
          className="font-apfel uppercase text-white/75"
        >
          Pricing to fit builders and teams of all sizes.
        </motion.span>
        <div className="static z-10 grid w-full gap-5 py-20 md:grid-cols-3">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={topVariants(0)}
            className="flex h-[45rem] w-full flex-col justify-between rounded-[15px] border border-[#c8bed8] p-8 text-[#c8bed8] transition-all duration-200 ease-in hover:border-[#A625F6] xl:max-w-[421px]"
          >
            <div className="flex w-full flex-col">
              <span className="mb-2 w-fit rounded-full border px-3.5 pb-[5px] pt-1">
                FREE PLAN
              </span>
              <span className="mb-3 text-[15px]">
                For personal & hobby projects
              </span>
              <span className="text-[72px] font-bold leading-[79px]">$0</span>
              <span className="mb-5 text-[20px]">per million requests</span>
              <div className="flex flex-col gap-2 border-t border-[#D6D6D6] p-3">
                <span className="text-">1 API key</span>
                <span className="text-">10,000 requests/month</span>
                <span className="text-">5 requests per second</span>
                <span className="text-">Community support</span>
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#D6D6D6] px-5 py-3 text-primary hover:bg-white">
              {buttonIcon}
              <span className="uppercase">Get started</span>
            </button>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={topVariants(0.1)}
            className="flex h-[45rem] w-full flex-col justify-between rounded-[15px] border border-[#c8bed8] p-8 text-[#c8bed8] transition-all duration-200 ease-in hover:border-[#A625F6] xl:max-w-[421px]"
          >
            <div className="flex w-full flex-col">
              <span className="mb-2 w-fit rounded-full border px-3.5 pb-[5px] pt-1">
                GROWTH PLAN
              </span>
              <span className="mb-3 text-[15px]">For teams & startups</span>
              <span className="text-[72px] font-bold leading-[79px]">$350</span>
              <span className="mb-5 text-[20px]">per million requests</span>
              <div className="flex flex-col gap-2 border-t border-[#D6D6D6] p-3">
                <span className="text-">5 API key</span>
                <span className="text-">1,000,000 requests/month</span>
                <span className="text-">300 requests per second</span>
                <span className="text-">Priority support</span>
                <span className="text-">Websockets</span>
                <span className="text-">Webhooks</span>
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#D6D6D6] px-5 py-3 text-primary hover:bg-white">
              {buttonIcon}
              <span className="uppercase">Get started</span>
            </button>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={topVariants(0.2)}
            className="flex h-[45rem] w-full flex-col justify-between rounded-[15px] border border-[#c8bed8] p-8 text-[#c8bed8] transition-all duration-200 ease-in hover:border-[#A625F6] xl:max-w-[421px]"
          >
            <div className="flex w-full flex-col">
              <span className="mb-2 w-fit rounded-full border px-3.5 pb-[5px] pt-1">
                ENTERPRISE PLAN
              </span>
              <span className="mb-3 text-[15px]">
                Tailored solution for larger companies
              </span>
              <span className="text-5xl font-bold sm:text-[62px] sm:leading-[69px]">
                CUSTOM
              </span>
              <span className="mb-5 text-[20px]">per million requests</span>
              <div className="flex flex-col gap-2 border-t border-[#D6D6D6] p-3">
                <span className="text-">Unlimited API keys</span>
                <span className="text-">Unlimited requests/month</span>
                <span className="text-">Custom requests per second</span>
                <span className="text-">Dedicated support</span>
                <span className="text-">Websockets</span>
                <span className="text-">Webhooks</span>
                <span className="text-">High concurrency</span>
                <span className="text-">Custom SLAs</span>
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#D6D6D6] px-5 py-3 text-primary hover:bg-white">
              {buttonIcon}
              <span className="uppercase">Get started</span>
            </button>
          </motion.div>
        </div>
      </div>
      <div className="absolute">{gradientSvg}</div>
    </div>
  );
};

const buttonIcon = (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_84_693)">
      <path
        d="M10.9925 0.727539H5.65918V6.06087H10.9925V0.727539Z"
        fill="#B71DFF"
      />
      <path
        d="M10.9925 11.394H5.65918V16.7274H10.9925V11.394Z"
        fill="#B71DFF"
      />
      <path
        d="M5.65853 6.06104H0.325195V11.3944H5.65853V6.06104Z"
        fill="#B71DFF"
      />
      <path
        d="M16.3245 6.06104H10.9912V11.3944H16.3245V6.06104Z"
        fill="#B71DFF"
      />
    </g>
    <defs>
      <clipPath id="clip0_84_693">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0.325195 0.727539)"
        />
      </clipPath>
    </defs>
  </svg>
);

const gradientSvg = (
  <svg
    width="1728"
    height="1737"
    className="lg:w-screen"
    viewBox="0 0 1728 1737"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_84_728)">
      <path
        d="M686.538 1147.9C497.046 1378.34 -502.033 1250.95 -595.924 1208.52C-747.369 1104.26 174.374 1024.38 216.039 755.045C249.37 539.58 908.691 719.924 1222.48 623.183C1759.92 457.493 2288.26 392.818 2353.73 528.584C2435.58 698.29 1396.35 819.636 1204.93 817.584C1013.51 815.531 923.402 859.847 686.538 1147.9Z"
        fill="url(#paint0_linear_84_728)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_84_728"
        x="-1067.14"
        y="0.73819"
        width="3879.88"
        height="1735.66"
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
          result="effect1_foregroundBlur_84_728"
        />
      </filter>
      <linearGradient
        id="paint0_linear_84_728"
        x1="2377.77"
        y1="289.773"
        x2="2168.62"
        y2="1429.77"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" stopOpacity="0.55" />
      </linearGradient>
    </defs>
  </svg>
);

export default SimpleScalabale;
