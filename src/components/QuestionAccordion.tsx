"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const QuestionAccordion = ({
  question,
  answer,
  list,
  defaultState = false,
}: {
  question: string;
  answer?: string;
  list?: string[];
  defaultState?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultState);
  return (
    <div
      className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/30 p-6"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <h1 className="max-w-[80%] font-neue text-xl font-bold md:text-2xl">
          {question}
        </h1>
        <div
          className={cn(
            "flex h-8 w-16 items-center justify-center rounded-xl border border-white/20 sm:h-12",
            isOpen ? "rotate-0 bg-white/20" : "rotate-180",
            "transition-all duration-200 ease-in",
          )}
        >
          {chevronSvg}
        </div>
      </div>
      <div
        className={cn(
          isOpen ? "h-fit pb-6" : "h-0 pb-0",
          "mt-2 overflow-hidden text-white/50 transition-all duration-200 ease-in",
        )}
      >
        {answer}
        {list && (
          <ul className="list-disc pl-5">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="absolute left-0 top-0">{gradientSvg}</div>
    </div>
  );
};

const chevronSvg = (
  <svg
    width="21"
    height="13"
    viewBox="0 0 21 13"
    fill="none"
    className="scale-75 sm:scale-100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.22143 0.944048L10.6087 8.31521L17.9959 0.944048L20.2652 3.21333L10.6087 12.8699L0.952148 3.21333L3.22143 0.944048Z"
      fill="white"
    />
  </svg>
);

const gradientSvg = (
  <svg
    width="1026"
    height="216"
    className="min-h-[500px]"
    viewBox="0 0 1026 216"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.2" filter="url(#filter0_f_177_468)">
      <path
        d="M797.304 -147.822C665.215 -102.492 336.125 29.315 255.26 205.867C214.99 293.789 -67.6597 360.783 -79.4608 350.769"
        stroke="url(#paint0_linear_177_468)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_468"
        x="-365.972"
        y="-488.486"
        width="1391.37"
        height="1190.72"
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
          stdDeviation="84.6367"
          result="effect1_foregroundBlur_177_468"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_468"
        x1="827.793"
        y1="-70.1361"
        x2="-101.513"
        y2="294.58"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#2D28FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default QuestionAccordion;
