import React from "react";

const Roadmap = () => {
  return (
    <section className="max-w-screen flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-5 border-t border-white/30 px-5 py-20">
        <h1 className="font-neue text-4xl font-bold">Roadmap</h1>
        <span className="text-center font-apfel max-w-[520px]">
          The CDL Token roadmap outlines key phases for launching, expanding,
          and promoting the token.
        </span>
        <div className="grid gap-5 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex max-w-[94vw] flex-col gap-3 rounded-2xl border-4 border-white bg-black p-5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#D9D9D9] px-2 font-neue text-2xl font-bold text-black">
                Q4
              </span>
              <span className="font-neue text-3xl font-bold">2024</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-[#232325] h-full px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="">
                  CDL branding and marketing materials design
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Develop the staking mechanism</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Launch Pre-Sale and Public Sale</span>
              </div>
            </div>
          </div>
          <div className="flex max-w-[94vw] flex-col gap-3 rounded-2xl border-4 border-dashed border-primary bg-black p-5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#D9D9D9] px-2 font-neue text-2xl font-bold text-black">
                Q1
              </span>
              <span className="font-neue text-3xl font-bold">2024</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-[#232325] h-full px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="">DeFi Partnerships</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">
                  Staking Launch APY incentives for CDL holders
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Governance Voting </span>
              </div>
            </div>
          </div>
          <div className="flex max-w-[94vw] flex-col gap-3 rounded-2xl border-4 border-white bg-black p-5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#D9D9D9] px-2 font-neue text-2xl font-bold text-black">
                Q1
              </span>
              <span className="font-neue text-3xl font-bold">2024</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-[#232325] h-full px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="">Cross-Chain Support</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">
                  User Dashboard with staking & referral tracking
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Community Airdrop</span>
              </div>
            </div>
          </div>
          <div className="flex max-w-[94vw] flex-col gap-3 rounded-2xl border-4 border-white bg-black p-5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#D9D9D9] px-2 font-neue text-2xl font-bold text-black">
                Q1
              </span>
              <span className="font-neue text-3xl font-bold">2024</span>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-[#232325] h-full px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="">Exchange Listing Cex’s & Dex’s</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">
                  Advanced Analytics access & Premium AI Analytics features
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] w-[10px] min-h-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Global Community Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
