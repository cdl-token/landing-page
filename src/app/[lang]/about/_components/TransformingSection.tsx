"use client";

import { motion } from "framer-motion";
import TextAnimation from "@/components/ui/scroll-text";
import { leftVariant, rightVariants } from "@/lib/animation-variants";

const TransformingSection = () => {
  return (
    <div
      className="relative flex w-full items-center justify-center"
      id="about-cdl"
    >
      <div className="absolute top-0 md:-top-[400px]">{gradientSvg}</div>
      <div className="flex w-full max-w-7xl flex-col border-y border-white/30">
        <div className="static z-10 grid w-full gap-10 px-5 py-10 md:grid-cols-2">
          <div className="flex flex-col gap-3 md:gap-10">
            <motion.h2
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0)}
              className="font-neue uppercase tracking-[5px] text-primary md:text-[19px] md:leading-[24px]"
            >
              ABOUT CDL token
            </motion.h2>
            <TextAnimation
              text="Transforming Data for Tomorrow"
              variants={{
                hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                visible: {
                  filter: "blur(0px)",
                  opacity: 1,
                  y: 0,
                  transition: { ease: "linear" },
                },
              }}
              classname="font-neue text-2xl font-bold text-white uppercase leading-[42px] md:text-[38px]"
            />
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={leftVariant(0.1)}
              className="max-w-[534px] font-apfel leading-[24px] text-white/50"
            >
              CDL Token stands out as a unique oracle data solution, bridging
              real-world data with decentralized applications. By providing
              secure, reliable, and scalable data feeds, CDL enables blockchain
              projects to make informed decisions and execute smart contracts
              with accuracy, all while fostering transparency and
              decentralization.
            </motion.span>
          </div>
          <div className="grid grid-cols-2">
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightVariants(0)}
              className="flex items-center justify-end gap-2 border-y border-white/10 py-10 sm:gap-3"
            >
              <span className="text-xs sm:text-base">Real-Time Analytics</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F3F3]/10 sm:h-9 sm:w-9">
                {arrow}
              </div>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightVariants(0.1)}
              className="flex items-center justify-end gap-2 border-y border-white/10 py-10 sm:gap-3"
            >
              <span className="text-xs sm:text-base">Advanced Security</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F3F3]/10 sm:h-9 sm:w-9">
                {arrow}
              </div>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightVariants(0.2)}
              className="flex items-center justify-end gap-2 border-b border-white/10 py-10 sm:gap-3"
            >
              <span className="text-xs sm:text-base">Scalable Solutions</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F3F3]/10 sm:h-9 sm:w-9">
                {arrow}
              </div>
            </motion.div>
            <motion.div
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightVariants(0.3)}
              className="flex items-center justify-end gap-2 border-b border-white/10 py-10 sm:gap-3"
            >
              <span className="text-xs sm:text-base">User Education</span>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F3F3F3]/10 sm:h-9 sm:w-9">
                {arrow}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid place-items-center gap-5 pb-10 pt-5 text-center font-apfel sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
            className="flex w-full max-w-[337px] flex-col items-center justify-center gap-3 px-5"
          >
            <div
              className="my-5 flex h-20 w-20 items-center justify-center rounded-full pr-1 pt-1"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%)",
              }}
            >
              <span className="font-neue text-[28px] font-bold">1</span>
            </div>
            <div className="font-neue text-[21px] font-bold uppercase leading-[24px] text-[#F3F3F3] sm:text-nowrap">
              A Hub for innovation
            </div>
            <span className="text-center leading-[24px] text-[#898990]">
              Empowering users at the core, fostering collaboration and driving
              progress within a vibrant community.
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.1)}
            className="flex w-full max-w-[337px] flex-col items-center justify-center gap-3 px-5"
          >
            <div
              className="my-5 flex h-20 w-20 items-center justify-center rounded-full pr-0.5 pt-1"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%)",
              }}
            >
              <span className="font-neue text-[28px] font-bold">2</span>
            </div>
            <div className="font-neue text-[21px] font-bold uppercase leading-[24px] text-[#F3F3F3]">
              Swift & Secure
            </div>
            <span className="max-w-[261px] text-center leading-[24px] text-[#898990]">
              Experience lightning-fast transactions, backed by top-tier
              security for total peace of mind.
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.2)}
            className="flex w-full max-w-[337px] flex-col items-center justify-center gap-3 px-5"
          >
            <div
              className="my-5 flex h-20 w-20 items-center justify-center rounded-full pr-0.5 pt-1.5"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%)",
              }}
            >
              <span className="font-neue text-[28px] font-bold">3</span>
            </div>
            <div className="font-neue text-[21px] font-bold uppercase leading-[24px] text-[#F3F3F3]">
              Built for Growth
            </div>
            <span className="max-w-[269px] text-center leading-[24px] text-[#898990]">
              A resilient infrastructure crafted to effortlessly scale and meet
              evolving demands.
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0.3)}
            className="flex w-full max-w-[337px] flex-col items-center justify-center gap-3 px-5"
          >
            <div
              className="my-5 flex h-20 w-20 items-center justify-center rounded-full pr-0.5 pt-1"
              style={{
                background:
                  "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 21.35%, rgba(203, 251, 69, 0.08) 100%)",
              }}
            >
              <span className="font-neue text-[28px] font-bold">4</span>
            </div>
            <div className="font-neue text-[21px] font-bold uppercase leading-[24px] text-[#F3F3F3]">
              Global Reach
            </div>
            <span className="text-center leading-[24px] text-[#898990]">
              Offering equal access to financial opportunities, breaking down
              geographic barriers for users worldwide.
            </span>
          </motion.div>
        </div>
        <div className="grid gap-10 px-5 py-10 lg:grid-cols-3">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0)}
            className="flex flex-col gap-3 md:gap-10"
          >
            <h1 className="font-neue text-lg font-bold uppercase leading-[24px] md:text-[21px]">
              OUR VISION
            </h1>
            <span className="text-[#898990]">
              To empower the next generation of blockchain and crypto data
              services by providing seamless integration, robust security, and
              innovative solutions that drive value for users and businesses
              globally. CDL Token aims to bridge the gap between decentralized
              finance, data analytics, and blockchain technology, enabling
              real-time insights and actionable strategies.
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.1)}
            className="flex flex-col gap-3 md:gap-10"
          >
            <h1 className="font-neue text-lg font-bold uppercase leading-[24px] md:text-[21px]">
              OUR MISSION
            </h1>
            <span className="text-[#898990]">
              To become the leading cryptocurrency and data platform, creating a
              fully decentralized ecosystem that fosters transparency,
              scalability, and growth. CDL Token envisions a future where
              blockchain-powered data services are universally accessible,
              transforming industries and enabling enterprises to thrive in a
              decentralized world.
            </span>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.2)}
            className="flex flex-col gap-3 md:gap-10"
          >
            <h1 className="font-neue text-lg font-bold uppercase leading-[24px] md:text-[21px]">
              CORE VALUE
            </h1>
            <span className="text-[#898990]">
              CDL Token is built on transparency, security, innovation,
              decentralization, and scalability. We ensure open access to data,
              protect user assets, and drive continuous innovation. By
              empowering the community and reducing centralization, we create a
              scalable ecosystem that grows with user needs.
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const arrow = (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3321_3904)">
      <path
        d="M8.00001 12.9362L12.6667 8.26957L8.00001 3.60291M12.6667 8.26957L3.33334 8.26957"
        stroke="#F3F3F3"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3321_3904">
        <rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.269531)"
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
    <g filter="url(#filter0_f_3301_3859)">
      <path
        d="M614.538 1147.9C425.046 1378.34 -574.033 1250.95 -667.924 1208.52C-819.369 1104.26 102.374 1024.38 144.039 755.045C177.37 539.58 836.691 719.924 1150.48 623.183C1687.92 457.493 2216.26 392.818 2281.73 528.584C2363.58 698.29 1324.35 819.636 1132.93 817.584C941.513 815.531 851.402 859.847 614.538 1147.9Z"
        fill="url(#paint0_linear_3301_3859)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3301_3859"
        x="-1139.14"
        y="0.738068"
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
          result="effect1_foregroundBlur_3301_3859"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3301_3859"
        x1="2305.77"
        y1="289.773"
        x2="2096.62"
        y2="1429.77"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" stopOpacity="0.55" />
      </linearGradient>
    </defs>
  </svg>
);

export default TransformingSection;
