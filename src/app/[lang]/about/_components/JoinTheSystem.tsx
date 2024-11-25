import Image from "next/image";

const JoinTheSystem = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="static z-10 grid max-w-7xl gap-2 px-5 py-20 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h1 className="gap-3 font-neue text-2xl md:text-[38px] font-bold uppercase md:leading-[42px]">
            Join the fastest growing ecosystem
          </h1>
          <span className="text-">
            CDL Token is at the forefront of a dynamic and rapidly growing
            ecosystem designed to enhance crypto data services and blockchain
            innovation.
          </span>
          <ul className="flex list-disc flex-col gap-2 pl-5">
            <li>
              Seamless Integration: Built to work effortlessly with Ethereum and
              other blockchain platforms.
            </li>
            <li>
              Incentive-Driven: Rewards for staking, referrals, and active
              participation.
            </li>
            <li>
              Future-Proof: A scalable ecosystem ready for decentralized
              applications and enterprise adoption.
            </li>
          </ul>
          <div className="grid py-10 gap-10 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
              <h1 className="font-neue text-2xl md:text-[38px] font-bold md:leading-[42px]">
                60M+
              </h1>
              <span className="font-apfel">Total Data Transactions</span>
            </div>
            <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
              <h1 className="font-neue text-2xl md:text-[38px] font-bold md:leading-[42px]">
                1500+
              </h1>
              <span className="font-apfel">Validator nodes</span>
            </div>
            <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
              <h1 className="font-neue text-2xl md:text-[38px] font-bold md:leading-[42px]">
                1000+
              </h1>
              <span className="font-apfel">Data Integrations</span>
            </div>
          </div>
        </div>
        <Image
          src="/static/map.svg"
          className="static z-10"
          width={870}
          height={590}
          alt="Map"
        />
      </div>
    </div>
  );
};

export default JoinTheSystem;
