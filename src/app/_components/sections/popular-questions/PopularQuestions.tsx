"use client";

import { motion } from "framer-motion";
import QuestionAccordion from "./QuestionAccordion";
import { leftVariant } from "@/lib/animation-variants";

const PopularQuestions = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-20">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="font-neue text-3xl font-bold uppercase md:text-4xl md:leading-[50px]"
        >
          Popular Questions <br /> About CDL Token?
        </motion.h1>
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
