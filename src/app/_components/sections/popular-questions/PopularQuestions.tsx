"use client";

import { motion } from "framer-motion";
import QuestionAccordion from "./QuestionAccordion";
import { leftVariant } from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";

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
          text="About CDL Token?"
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
            answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
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
            answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
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
            answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
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
            answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PopularQuestions;
