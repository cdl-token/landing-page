"use client";

import { motion } from "framer-motion";
import { leftVariant } from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";
import QuestionAccordion from "@/components/QuestionAccordion";

const PopularQuestions = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-20">
        <TextAnimation
          text="Popular Questions"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
          classname="font-neue text-3xl font-bold uppercase md:text-4xl md:leading-[50px] text-white"
        />
        <TextAnimation
          text="About cdl token?"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
          classname="font-neue text-3xl font-bold uppercase md:text-4xl md:leading-[50px] text-white"
        />
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.2)}
        >
          <QuestionAccordion
            question="What makes CDL Token unique?"
            answer="CDL Token stands out by offering real-time analytics and aggregated data through its integration with blockchain technology. By leveraging the Binance Smart Chain, CDL ensures secure, scalable, and cost-effective access to crucial crypto insights, empowering traders and investors with accurate, actionable information."
            defaultState={true}
          />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.3)}
        >
          <QuestionAccordion
            question="How do CDL Token holders benefit from its analytics?"
            answer="CDL Token holders gain access to advanced analytics tools, including real-time price tracking, AI-powered predictive models, and in-depth market insights. These resources provide users with a competitive edge in decision-making, enhancing investment strategies and portfolio performance."
          />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.4)}
        >
          <QuestionAccordion
            question="How does CDL Token ensure reliable data for users?"
            answer="CDL Token sources data from multiple decentralized and verified oracles, ensuring accuracy, reliability, and resistance to tampering. With features like VWAP, TWAP, and bid-offer pricing, CDL delivers transparent and robust information, empowering users with trustworthy data."
          />
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.5)}
        >
          <QuestionAccordion
            question="What’s the future roadmap for CDL Token?"
            answer="The CDL roadmap includes:"
            list={[
              "Expanding partnerships with top-tier exchanges and data providers.",
              "Launching innovative dApps for deeper analytics integration.",
              "Enhancing AI capabilities for real-time predictive pricing.",
              "Building a community-driven ecosystem to encourage participation and rewards for CDL holders.",
              "Establishing CDL as a global standard for crypto data services.",
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PopularQuestions;
