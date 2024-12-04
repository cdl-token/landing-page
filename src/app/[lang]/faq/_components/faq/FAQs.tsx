"use client";

import TextAnimation from "@/components/ui/scroll-text";
import QuestionAccordion from "./QuestionAccordion";
import { motion } from "framer-motion";
import { leftVariant } from "@/lib/animation-variants";

const FAQs = () => {
  return (
    <div className="flex items-center w-full">
      <div className="flex w-full flex-col gap-5 pb-20">
        <QuestionAccordion
          question="How can I participate in the CDL Token presale?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
          defaultState={true}
        />
        <QuestionAccordion
          question="What are the benefits of using CDL Token?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
        <QuestionAccordion
          question="How does CDL Token support staking and rewards?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
        <QuestionAccordion
          question="What is Crypto Data Live Token (CDL Token)?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
        <QuestionAccordion
          question="What is the purpose of CDL Token in the ecosystem?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
        <QuestionAccordion
          question="How does CDL Token ensure security?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
      </div>
    </div>
  );
};

export default FAQs;
