import ComparisonTable from "./ComparisonTable";

const CDLvs = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-5 px-5 py-20 border-y border-white/30 text-center">
        <h1 className="max-w-[455px] font-neue text-3xl font-bold uppercase md:text-[45px] md:leading-[50px]">
          CDL Token vs the Competition
        </h1>
        <span className="max-w-[638px] font-apfel uppercase">
          In the world of blockchain data, CDL Token sets the standard with
          unparalleled reliability, precision, and comprehensive insights
        </span>
        <div className="overflow-auto pt-10 max-w-[96vw]">
          <ComparisonTable />
        </div>
      </div>
    </div>
  );
};

export default CDLvs;
