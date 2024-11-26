import Image from "next/image";

const TokenPowers = () => {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="absolute -top-10 right-0">
        <Image
          src="/static/services/parrallax.png"
          width={700}
          height={867}
          alt="parallax"
        />
      </div>
      <div className="static z-10 grid w-full max-w-7xl md:grid-cols-2 gap-10 px-5 py-20">
        <div className="flex flex-col gap-5 py-10">
          <h1 className="max-w-[310px] font-neue text-3xl md:text-[55px] uppercase md:leading-[58px]">
            Cdl token powers industry leaders
          </h1>
          <span className="max-w-[320px] font-apfel">
            Learn how CDL helps industry leaders save time, money, and
            development resources
          </span>
        </div>
        <div className="flex flex-col gap-5 rounded-[20px] border border-white/50 px-10 py-12 text-[#B8B8B8]">
          <Image
            src="/static/services/companies/tradingview.svg"
            width={173}
            height={32}
            alt="Trading view"
          />
          <span className="text-[24px] uppercase leading-[29px]">
            TradingView, and their 50 million users, rely on CDL TOKEN as the
            sole source of truth for all on-chain data.
          </span>
          <span className="text-[19px] leading-[30px] pb-40">
            “CDL has been instrumental in our efforts to support high quality
            DEX data via the TradingView interface. We were using 3-4 data
            providers previously, including the Graph, and have now consolidated
            everything to CDL.”
          </span>
        </div>
      </div>
    </div>
  );
};

export default TokenPowers;
