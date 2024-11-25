import CompaniesSlider from "./CompaniesSlider";

const TopCompaniesStrip = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col gap-5 px-5 py-5">
        <div className="flex w-full flex-col gap-2">
          <h2 className="font-apfel text-lg font-bold">
            Trusted by Leading Companies Worldwide
          </h2>
          <h1 className="font-neue text-4xl font-bold uppercase">
            Used by the world&apos;s TOP companies
          </h1>
        </div>
        <CompaniesSlider />
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
