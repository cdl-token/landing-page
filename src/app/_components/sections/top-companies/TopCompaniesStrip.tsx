import CompaniesSlider from "./CompaniesSlider";
import Marquee from "react-fast-marquee";

const TopCompaniesStrip = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-5">
        <div className="text-center text-xs sm:text-base font-apfel text-white/50">
          Used by leading brands/companies from across the globe
        </div>
        <div className="w-full py-5">
          <Marquee>
            <CompaniesSlider />
          </Marquee>
        </div>
        {/* <div className="flex w-full flex-wrap items-center justify-center gap-5 my-10 lg:justify-between">
          <Image
            src="/static/companies/binance.svg"
            width={150}
            height={40}
            alt="binance"
          />
          <Image
            src="/static/companies/polygon.svg"
            width={150}
            height={40}
            alt="polygon"
          />
          <Image
            src="/static/companies/solana.svg"
            width={150}
            height={40}
            alt="solana"
          />
          <Image
            src="/static/companies/polkadot.svg"
            width={150}
            height={40}
            alt="polkadot"
          />
          <Image
            src="/static/companies/gorand.svg"
            width={150}
            height={40}
            alt="gorand"
          />
        </div> */}
      </div>
    </section>
  );
};

export default TopCompaniesStrip;
