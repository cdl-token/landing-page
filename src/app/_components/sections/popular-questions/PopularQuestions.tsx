import QuestionAccordion from "./QuestionAccordion";

const PopularQuestions = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-20">
        <h1 className="font-neue text-4xl font-bold uppercase leading-[50px]">
          Popular Questions <br /> About CDL Token?
        </h1>
        <QuestionAccordion
          question="What makes CDL Token unique?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
          defaultState={true}
        />
        <QuestionAccordion
          question="How do CDL Token holders benefit from its analytics?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
        <QuestionAccordion
          question="How does CDL Token ensure reliable data for users?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
        <QuestionAccordion
          question="What’s the future roadmap for CDL Token?"
          answer="CDL Token offers real-time analytics and aggregated data on the Binance
            Smart Chain, enabling fast, secure access to essential crypto insights"
        />
      </div>
    </div>
  );
};

export default PopularQuestions;
