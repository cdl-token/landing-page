import QuestionAccordion from "./QuestionAccordion";

const FAQs = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 border-t border-white/30 px-5 py-20">
        <h1 className="font-neue text-4xl font-bold uppercase leading-[50px]">
          FAQs
        </h1>
        <span className="max-w-[510px] text-white/50">
          Unlock the Information You Seek, Dive into Our Comprehensive
          Compilation of Frequently Asked Questions to Discover More about CDL
          Token.
        </span>
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
