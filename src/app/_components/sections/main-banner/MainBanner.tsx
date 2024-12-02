"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Earth from "@/components/ui/better-globe";
import { FlipWords } from "@/components/ui/flip-words";
import {
  bottomVariants,
  leftVariant,
  rightVariants,
} from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";

const MainBanner = () => {
  const words = ["Outsmarting", "Surpassing", "Overcoming"];

  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-x-hidden">
      <div className="grid min-h-screen w-full max-w-7xl justify-center px-5 pb-20 md:min-h-[900px] md:pb-0 lg:grid-cols-2 lg:gap-12">
        <div className="flex h-full flex-col justify-center gap-12">
          <div className="flex flex-col gap-2 pt-32 font-neue text-3xl font-bold uppercase sm:pt-0 md:text-5xl lg:text-[50px] xl:text-[55px]">
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={bottomVariants(0)}
              className="flex items-center text-primary"
            >
              <FlipWords className="text-primary" words={words} />
              <TextAnimation
                text="the"
                variants={{
                  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: { ease: "linear" },
                  },
                }}
                classname="font-neue font-bold uppercase text-white"
              />
            </motion.span>
            <TextAnimation
              text="Institutions in"
              variants={{
                hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                visible: {
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                  transition: { ease: "linear" },
                },
              }}
              classname="font-neue font-bold uppercase text-white"
            />
            <TextAnimation
              text="Their Own Arena"
              variants={{
                hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                visible: {
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                  transition: { ease: "linear" },
                },
              }}
              classname="font-neue font-bold uppercase text-white"
            />
          </div>
          <TextAnimation
            as="p"
            letterAnime={true}
            text="For years, CDL has empowered institutional investors with bespoke
            data, advanced analytics, price predictions, and real-time news
            feeds — giving them a significant edge in the markets. Now, CDL is
            bringing that same power to you."
            classname="w-full max-w-[597px] lowercase text-white"
            variants={{
              hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                },
              },
            }}
          />
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.8)}
            className="flex w-full flex-col items-center gap-5 pb-20 sm:w-fit sm:flex-row"
          >
            <PrimaryButton title="Buy CDL Token" className="w-full sm:w-fit" />
            <SecondaryButton title="Details" className="sn:w-fit w-full" />
          </motion.div>
        </div>
        <div className="flex h-full w-full items-center">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.1)}
            className="relative flex aspect-square h-fit w-full max-w-full items-center justify-center"
          >
            <Earth />
          </motion.div>
        </div>
      </div>
      <div className="absolute left-[-510px] top-[-568px] -z-10">
        {gradientBg}
      </div>
    </section>
  );
};

const gradientBg = (
  <svg
    width="1309"
    height="1464"
    viewBox="0 0 1309 1464"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_60_3587)">
      <path
        d="M652.071 756.529C637.075 931.938 513.661 997.375 453.828 1008.17C345.334 1008.17 361.807 867.864 291.939 723.015C236.045 607.137 290.992 458.123 325.453 398.101C440.953 292.447 691.265 92.1595 768.518 136.239C865.083 191.338 887.236 359.475 793.511 422.527C699.786 485.578 670.816 537.269 652.071 756.529Z"
        fill="url(#paint0_linear_60_3587)"
      />
      <path
        d="M652.071 756.529C637.075 931.938 513.661 997.375 453.828 1008.17C345.334 1008.17 361.807 867.864 291.939 723.015C236.045 607.137 290.992 458.123 325.453 398.101C440.953 292.447 691.265 92.1595 768.518 136.239C865.083 191.338 887.236 359.475 793.511 422.527C699.786 485.578 670.816 537.269 652.071 756.529Z"
        stroke="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_60_3587"
        x="-186.925"
        y="-324.925"
        width="1495.31"
        height="1788.02"
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
          result="effect1_foregroundBlur_60_3587"
        />
      </filter>
      <linearGradient
        id="paint0_linear_60_3587"
        x1="560.729"
        y1="130"
        x2="560.729"
        y2="1008.17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3C38F4" />
      </linearGradient>
    </defs>
  </svg>
);

export default MainBanner;
