"use client";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import PresaleCard from "./PresaleCard";
import PresaleCardBinance from "./PresaleCardBinance";
import { useAppKitNetworkCore } from "@reown/appkit/react";
import { useEffect, useState } from "react";
import useDisableLocalStorage from "@/components/notification/useDisableLocalStorage";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { motion } from "framer-motion";
import { leftVariant, rightVariants } from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";

const PresaleSection = () => {
  useDisableLocalStorage();
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const { chainId } = useAppKitNetworkCore();

  console.log("🚀 ~ PresaleSection ~ chainId:", chainId);

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-screen relative flex w-full flex-col items-center justify-center py-20">
      <div className="grid w-full max-w-7xl gap-20 px-5 lg:grid-cols-2">
        <div>{chainId === 97 ? <PresaleCardBinance /> : <PresaleCard />}</div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.1)}
          className="flex flex-col gap-5 md:py-20"
        >
          <TextAnimation
            text="Join cdl token presale"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="font-neue text-2xl font-bold uppercase md:text-5xl text-white"
          />
          <motion.p
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0)}
            className="w-full max-w-[667px] lowercase text-white"
          >
            Welcome to the CDL Token Sale, your exclusive entry point into a
            world of powerful, real-time crypto intelligence, secure
            transactions, and innovative analytics, all powered by the Ethereum
            chain.
          </motion.p>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.4)}
            className="mt-10 flex w-full items-center gap-2"
          >
            <PrimaryButton className="w-full sm:w-fit" title="Launch Dapp" />
            <SecondaryButton className="w-full sm:w-fit" title="How to buy?" />
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.5)}
          >
            <Image
              src="/static/globe.png"
              className="hidden md:block"
              width={733}
              height={659}
              alt="globe"
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 -z-10">{gradientSvg}</div>
    </div>
  );
};

const gradientSvg = (
  <svg
    width="1721"
    height="1625"
    viewBox="0 0 1721 1625"
    fill="none"
    className="xl:w-screen"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_3010_181)">
      <path
        d="M719.813 570.897C555.966 371.644 -307.902 481.794 -389.086 518.483C-520.035 608.63 276.963 677.701 312.989 910.582C341.809 1096.89 911.9 940.95 1183.23 1024.6C1647.92 1167.86 2104.76 1223.79 2161.38 1106.4C2232.15 959.656 1333.56 854.733 1168.05 856.507C1002.54 858.282 924.621 819.964 719.813 570.897Z"
        fill="url(#paint0_linear_3010_181)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3010_181"
        x="-858.03"
        y="0.538971"
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
          result="effect1_foregroundBlur_3010_181"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3010_181"
        x1="1130.15"
        y1="1403"
        x2="400.48"
        y2="343.072"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

export default PresaleSection;
