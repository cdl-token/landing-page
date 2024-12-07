"use client";

import TextAnimation from "@/components/ui/scroll-text";
import { motion } from "framer-motion";
import { leftVariant } from "@/lib/animation-variants";
import QuestionAccordion from "@/components/QuestionAccordion";

const FAQs = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 border-t border-white/30 px-5 py-20">
        <TextAnimation
          text="FAQS"
          variants={{
            hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
            visible: {
              filter: "blur(0px)",
              opacity: 1,
              y: 0,
              transition: { ease: "linear" },
            },
          }}
          classname="font-neue text-4xl font-bold uppercase leading-[50px] text-white"
        />
        <motion.span
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="max-w-[510px] text-white/50"
        >
          Unlock the Information You Seek, Dive into Our Comprehensive
          Compilation of Frequently Asked Questions to Discover More about CDL
          Token.
        </motion.span>
        <QuestionAccordion
          question="How can I participate in the CDL Token presale?"
          answer="To participate in the CDL Token presale, visit the official CDL Token platform. Create an account or connect your crypto wallet, select the number of tokens you wish to purchase, and complete the transaction using accepted cryptocurrencies like ETH, BNB, or USDT. Early participants may also enjoy bonus rewards."
          defaultState={true}
        />
        <QuestionAccordion
          question="What are the benefits of using CDL Token?"
          list={[
            "Access to Real-Time Data: CDL Token provides exclusive access to analytics and aggregated crypto data on the Binance Smart Chain.",
            "Staking Rewards: Token holders can stake CDL Tokens to earn additional rewards.",
            "Low Transaction Fees: Transactions using CDL Tokens are fast, secure, and cost-effective.",
            "Utility in Ecosystem: CDL Tokens power ecosystem services, making them essential for users requiring advanced crypto insights.",
          ]}
        />
        <QuestionAccordion
          question="How does CDL Token support staking and rewards?"
          answer="CDL Token holders can lock their tokens in staking pools on the platform to earn rewards. The longer the staking duration and higher the amount staked, the greater the potential rewards. These incentives are distributed periodically, encouraging long-term participation."
        />
        <QuestionAccordion
          question="What is Crypto Data Live Token (CDL Token)?"
          answer="CDL Token is a utility token built on the Binance Smart Chain that facilitates access to advanced cryptocurrency data analytics and insights. It is central to the Crypto Data Live ecosystem, providing holders with staking opportunities, data access, and benefits across the platform."
        />
        <QuestionAccordion
          question="What is the purpose of CDL Token in the ecosystem?"
          answer="CDL Token serves as the backbone of the Crypto Data Live ecosystem by:"
          list={[
            "Enabling access to premium crypto data and analytics tools.",
            "Facilitating transactions within the platform.",
            "Rewarding users through staking and participation.",
            "Driving the growth of a decentralized and data-driven crypto community.",
          ]}
        />
        <QuestionAccordion
          question="How does CDL Token ensure security?"
          answer="CDL Token employs robust smart contracts audited by industry-leading firms to ensure the integrity of all transactions. Additionally, the platform uses advanced encryption and multi-layer security protocols to protect user data and funds."
        />
      </div>
    </div>
  );
};

export default FAQs;
