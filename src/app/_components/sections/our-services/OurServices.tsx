"use client";

import { motion } from "framer-motion";
import ServicesSlider from "./ServicesSlider";
import { bottomVariants, leftVariant } from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";

export function OurServices() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 border-t border-white/30 px-5 py-20">
        <TextAnimation
          text="Our Services"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
          classname="pl-4 font-neue text-3xl font-bold md:text-5xl uppercase text-white"
        />
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={bottomVariants(0)}
        >
          <ServicesSlider />
        </motion.div>
      </div>
      <div className="absolute -z-10">{gradientSvg}</div>
    </div>
  );
}

const gradientSvg = (
  <svg
    width="1721"
    height="1624"
    viewBox="0 0 1721 1624"
    className="xl:w-screen"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_177_295)">
      <path
        d="M671.066 570.504C507.219 371.251 -356.649 481.4 -437.833 518.089C-568.782 608.236 228.216 677.307 264.242 910.188C293.062 1096.49 863.153 940.556 1134.48 1024.21C1599.18 1167.47 2056.01 1223.39 2112.63 1106C2183.4 959.262 1284.82 854.339 1119.3 856.114C953.789 857.888 875.874 819.57 671.066 570.504Z"
        fill="url(#paint0_linear_177_295)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_295"
        x="-906.777"
        y="0.144928"
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
          result="effect1_foregroundBlur_177_295"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_295"
        x1="1081.4"
        y1="1402.6"
        x2="351.733"
        y2="342.678"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);
