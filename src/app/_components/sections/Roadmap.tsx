import React from "react";

const Roadmap = () => {
  return (
    <section className="max-w-screen relative flex w-full items-center justify-center">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-5 border-t border-white/30 px-5 py-20">
        <h1 className="font-neue text-3xl md:text-4xl font-bold">Roadmap</h1>
        <span className="max-w-[520px] text-center font-apfel">
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
            <div className="flex h-full flex-col gap-2 rounded-lg bg-[#232325] px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="">
                  CDL branding and marketing materials design
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Develop the staking mechanism</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
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
            <div className="flex h-full flex-col gap-2 rounded-lg bg-[#232325] px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="">DeFi Partnerships</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">
                  Staking Launch APY incentives for CDL holders
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Governance Voting </span>
              </div>
            </div>
          </div>
          <div className="flex max-w-[94vw] flex-col gap-3 rounded-2xl border-4 border-white bg-black p-5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#D9D9D9] px-2 font-neue text-2xl font-bold text-black">
                Q2
              </span>
              <span className="font-neue text-3xl font-bold">2024</span>
            </div>
            <div className="flex h-full flex-col gap-2 rounded-lg bg-[#232325] px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="">Cross-Chain Support</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">
                  User Dashboard with staking & referral tracking
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Community Airdrop</span>
              </div>
            </div>
          </div>
          <div className="flex max-w-[94vw] flex-col gap-3 rounded-2xl border-4 border-white bg-black p-5">
            <div className="flex items-center gap-2">
              <span className="rounded bg-[#D9D9D9] px-2 font-neue text-2xl font-bold text-black">
                Q3
              </span>
              <span className="font-neue text-3xl font-bold">2024</span>
            </div>
            <div className="flex h-full flex-col gap-2 rounded-lg bg-[#232325] px-3 py-5">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="">Exchange Listing Cex’s & Dex’s</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">
                  Advanced Analytics access & Premium AI Analytics features
                </span>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-2 h-[10px] min-h-[10px] w-[10px] min-w-[10px] bg-primary"></div>
                <span className="text">Global Community Events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-20 left-0">
        {gradientSvg}
      </div>
    </section>
  );
};

const gradientSvg = (
  <svg
    width="921"
    height="1788"
    className=""
    viewBox="0 0 921 1788"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_177_294)">
      <path
        d="M81.5559 706.52C96.5519 531.112 219.966 465.674 279.799 454.882C388.293 454.882 371.82 595.186 441.688 740.034C497.582 855.912 442.635 1004.93 408.174 1064.95C292.674 1170.6 42.3617 1370.89 -34.8907 1326.81C-131.456 1271.71 -153.609 1103.57 -59.884 1040.52C33.8412 977.471 62.8108 925.78 81.5559 706.52Z"
        fill="url(#paint0_linear_177_294)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_294"
        x="-574.257"
        y="0.456512"
        width="1494.31"
        height="1787.02"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="227.213"
          result="effect1_foregroundBlur_177_294"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_294"
        x1="172.898"
        y1="1333.05"
        x2="172.898"
        y2="454.882"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F7931A" />
        <stop offset="0.61947" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

export default Roadmap;
