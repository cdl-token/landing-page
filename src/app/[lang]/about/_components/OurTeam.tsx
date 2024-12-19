"use client";

import { motion } from "framer-motion";
import TextAnimation from "@/components/ui/scroll-text";
import Image from "next/image";
import { leftVariant, rightVariants } from "@/lib/animation-variants";

const OurTeam = () => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center"
      id="our-team"
    >
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-3 px-5 py-20">
        <TextAnimation
          text="MEET OUR TEAM"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
          classname="text-center font-neue text-3xl font-bold leading-[42px] md:text-[38px] text-white"
        />
        <motion.span
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="max-w-[824px] text-center font-apfel text-sm font-normal md:text-[19px]"
        >
          A dynamic group of passionate professionals, each bringing unique
          expertise to drive innovation, collaboration, and growth. Together,
          we&apos;re shaping the future of our industry.
        </motion.span>
        <div className="grid w-full gap-10 py-10 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0)}
            className="flex flex-col items-center gap-5"
          >
            <Image
              src="/static/our-team/2.png"
              width={230}
              height={230}
              alt="Team 1"
            />
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-center font-neue text-[21px] font-bold uppercase leading-[22px]">
                Jason Shubrook
              </h1>
              <span className="mb-3 text-center text-[#898990]">
                Co-Founder & CEO
              </span>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {linkedIn}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {twitter}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.1)}
            className="flex flex-col items-center gap-5"
          >
            <Image
              src="/static/our-team/1.png"
              width={230}
              height={230}
              alt="Team 1"
            />
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-center font-neue text-[21px] font-bold uppercase leading-[22px]">
                Stephen Freshwater
              </h1>
              <span className="mb-3 text-center text-[#898990]">
                Co-Founder & COO
              </span>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {linkedIn}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {twitter}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.2)}
            className="flex flex-col items-center gap-5"
          >
            <Image
              src="/static/our-team/3.png"
              width={230}
              height={230}
              alt="Team 1"
            />
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-center font-neue text-[21px] font-bold uppercase leading-[22px]">
                Brian Fudge
              </h1>
              <span className="mb-3 text-center text-[#898990]">
                Co-Founder & CFO
              </span>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {linkedIn}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {twitter}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.3)}
            className="flex flex-col items-center gap-5"
          >
            <Image
              src="/static/our-team/4.png"
              width={230}
              height={230}
              alt="Team 1"
            />
            <div className="flex flex-col items-center gap-1">
              <h1 className="text-center font-neue text-[21px] font-bold uppercase leading-[22px]">
                Andrew Speer
              </h1>
              <span className="mb-3 text-center text-[#898990]">CMO</span>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {linkedIn}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#232325] transition-all duration-200 ease-in hover:bg-[#CBFB45] hover:text-black">
                  {twitter}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const twitter = (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.3438 3.75C14.3438 3.90625 14.3438 4.03125 14.3438 4.1875C14.3438 8.53125 11.0625 13.5 5.03125 13.5C3.15625 13.5 1.4375 12.9688 0 12.0312C0.25 12.0625 0.5 12.0938 0.78125 12.0938C2.3125 12.0938 3.71875 11.5625 4.84375 10.6875C3.40625 10.6562 2.1875 9.71875 1.78125 8.40625C2 8.4375 2.1875 8.46875 2.40625 8.46875C2.6875 8.46875 3 8.40625 3.25 8.34375C1.75 8.03125 0.625 6.71875 0.625 5.125V5.09375C1.0625 5.34375 1.59375 5.46875 2.125 5.5C1.21875 4.90625 0.65625 3.90625 0.65625 2.78125C0.65625 2.15625 0.8125 1.59375 1.09375 1.125C2.71875 3.09375 5.15625 4.40625 7.875 4.5625C7.8125 4.3125 7.78125 4.0625 7.78125 3.8125C7.78125 2 9.25 0.53125 11.0625 0.53125C12 0.53125 12.8438 0.90625 13.4688 1.5625C14.1875 1.40625 14.9062 1.125 15.5312 0.75C15.2812 1.53125 14.7812 2.15625 14.0938 2.5625C14.75 2.5 15.4062 2.3125 15.9688 2.0625C15.5312 2.71875 14.9688 3.28125 14.3438 3.75Z"
      fill="currentColor"
    />
  </svg>
);

const linkedIn = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.125 14H0.21875V4.65625H3.125V14ZM1.65625 3.40625C0.75 3.40625 0 2.625 0 1.6875C0 0.78125 0.75 0.03125 1.65625 0.03125C2.59375 0.03125 3.34375 0.78125 3.34375 1.6875C3.34375 2.625 2.59375 3.40625 1.65625 3.40625ZM13.9688 14H11.0938V9.46875C11.0938 8.375 11.0625 7 9.5625 7C8.0625 7 7.84375 8.15625 7.84375 9.375V14H4.9375V4.65625H7.71875V5.9375H7.75C8.15625 5.21875 9.09375 4.4375 10.5 4.4375C13.4375 4.4375 14 6.375 14 8.875V14H13.9688Z"
      fill="currentColor"
    />
  </svg>
);

export default OurTeam;
