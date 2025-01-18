"use client";

import {
  leftVariant,
  rightVariants,
  topVariants,
} from "@/lib/animation-variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const pricingPlans = [
  {
    name: "Basic",
    price: "$0",
    license: "Personal",
    support: "Email",
    apiCalls: "3,600",
    updateFrequency: "5 Mins",
    callsPerMinute: "5",
    endpoints: "Basic",
    websocket: "No",
    historicData: "No",
  },
  {
    name: "Personal",
    price: "$25",
    license: "Personal",
    support: "Email",
    apiCalls: "210,000",
    updateFrequency: "1 Min",
    callsPerMinute: "5",
    endpoints: "Basic",
    websocket: "No",
    historicData: "No",
  },
  {
    name: "Startup",
    price: "$75",
    license: "Corporate",
    support: "Email",
    apiCalls: "850,000",
    updateFrequency: "30 Seconds",
    callsPerMinute: "120",
    endpoints: "Level 2",
    websocket: "No",
    historicData: "1 Month",
  },
  {
    name: "Business",
    price: "$250",
    license: "Corporate",
    support: "Email / Portal",
    apiCalls: "10,000,000",
    updateFrequency: "10 Seconds",
    callsPerMinute: "500",
    endpoints: "Level 2",
    websocket: "Yes",
    historicData: "3 Months",
  },
  {
    name: "Corporate",
    price: "$750",
    license: "Corporate",
    support: "Email / Portal",
    apiCalls: "40,000,000",
    updateFrequency: "5 Seconds",
    callsPerMinute: "2,000",
    endpoints: "Level 3",
    websocket: "Yes",
    historicData: "6 Months",
  },
  {
    name: "Enterprise",
    price: "POA",
    license: "Custom",
    support: "Email / Portal / Slack",
    apiCalls: "Unlimited",
    updateFrequency: "< 1 Second",
    callsPerMinute: "Unlimited",
    endpoints: "Level 3",
    websocket: "Yes",
    historicData: "Unlimited",
  },
];

const SimpleScalable = ({ lang = "en" }) => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-2 px-5 py-10">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="font-neue text-3xl md:text-[45px] font-bold uppercase md:leading-[50px]"
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
        <div className="py-10 max-w-screen px-5 flex w-full flex-col">
          <Carousel
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {pricingPlans.map((plan, index) => (
                <CarouselItem className="sm:basis-1/2 md:basis-1/3" key={index}>
                  <div className="flex gap-10 md:h-[45rem] w-full flex-col justify-between rounded-[15px] border border-[#c8bed8] p-5 md:p-8 text-[#c8bed8] transition-all duration-200 ease-in hover:border-[#A625F6] md:max-w-[421px]">
                    <div className="flex w-full flex-col">
                      <span className="mb-2 w-fit rounded-full border px-3.5 pb-[5px] pt-1">
                        {plan.name.toUpperCase()}
                      </span>
                      <span className="mb-3 text-[15px]">
                        {plan.license} License
                      </span>
                      <span className="text-[72px] font-bold leading-[79px]">
                        {plan.price}
                      </span>
                      <span className="mb-5 text-[20px]">per month</span>
                      <div className="flex flex-col gap-2 border-t border-[#D6D6D6] p-3">
                        <span>{plan.apiCalls} API Calls / Month</span>
                        <span>Update Frequency: {plan.updateFrequency}</span>
                        <span>Calls per Minute: {plan.callsPerMinute}</span>
                        <span>Endpoints: {plan.endpoints}</span>
                        <span>Websocket: {plan.websocket}</span>
                        <span>Historic Data: {plan.historicData}</span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#D6D6D6] px-5 py-3 text-primary hover:bg-white"
                    >
                      {buttonIcon}
                      <span className="uppercase">Get started</span>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      
      <div className="absolute w-full right-0 bottom-[350px] -z-10">
        <Image
          src="/static/bg/home/simple-scalable-gradient.svg"
          width={4251}
          height={6285}
          alt="Gradient"
          loading="lazy"
        />
      </div>
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

export default SimpleScalable;
