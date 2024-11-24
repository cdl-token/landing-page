import Image from "next/image";

const Comprehensive = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="static z-10 flex w-full max-w-7xl border-b border-white/30 flex-col items-center justify-center gap-10 px-5 py-20 text-center">
        <h1 className="font-neue text-3xl md:text-[45px] font-bold uppercase">
          Comprehensive Access Points
        </h1>
        <div className="grid w-full md:grid-cols-2 pt-10 gap-x-10 gap-y-20">
          <div className="flex flex-col md:flex-row items-center gap-5 text-start">
            <Image
              src="/static/services/pricing.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                USD Pricing
              </h1>
              <span className="font-apfel text-lg uppercase">
                Get the exact value of every real-time or historical on-chain
                transaction
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 text-start">
            <Image
              src="/static/services/charts.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                Charts
              </h1>
              <span className="font-apfel text-lg uppercase">
                Everything required to quickly populate accurate and
                comprehensive pricing charts.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 text-start">
            <Image
              src="/static/services/stacks.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                Real-time aggregates
              </h1>
              <span className="font-apfel text-lg uppercase">
                Volume, liquidity, unique wallets, and more available instantly
                for multiple timeframes
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-5 text-start">
            <Image
              src="/static/services/holder.svg"
              width={144}
              height={144}
              alt="pricing"
            />
            <div className="flex flex-col gap-3 text-center md:text-start">
              <h1 className="font-neue text-[30px] font-bold uppercase">
                Holders
              </h1>
              <span className="font-apfel text-lg uppercase">
                Detailed information about token and NFT holders in a format
                that's easy to access and consistently reliable.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comprehensive;
