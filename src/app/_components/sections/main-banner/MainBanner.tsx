import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import AccountCard from "./AccountCard";
import TransactionCard from "./TransactionsCard";

const MainBanner = () => {
  return (
    <section className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="relative z-10 flex min-h-screen w-full max-w-7xl flex-col justify-center gap-12 border-b border-white/30 pl-5 pt-10 md:min-h-[900px]">
        <div className="flex animate-slideIn flex-col gap-2 pt-32 font-neue text-4xl font-bold uppercase sm:pt-0 md:text-5xl lg:text-[60px] xl:text-[68px]">
          <span className="text-primary">Your Gateway to</span>
          <span>real-time</span>
          <span>crypto data</span>
        </div>
        <p className="w-full max-w-[597px] animate-slideIn">
          Stay ahead in the crypto market with live price updates, market
          insights, and comprehensive analytics, empowering you to make smart,
          informed investment decisions at every moment.
        </p>
        <div className="flex animate-slideIn items-center gap-5 pb-20">
          <PrimaryButton title="Buy CDL Token" />
          <SecondaryButton title="Details" />
        </div>
        <div className="hidden">
          <TransactionCard />
        </div>
        <div className="hidden">
          <AccountCard />
        </div>
        <div className="hidden md:block absolute left-[65%] top-32 z-20">
          <AccountCard />
        </div>
        <div className="hidden md:block absolute left-[50%] bottom-16 z-20">
          <TransactionCard />
        </div>
        <div
          className="absolute -right-20 top-0 hidden h-[96%] w-[40%] bg-cover bg-center bg-no-repeat md:block"
          style={{
            backgroundImage: "url(/static/banner-bg.png",
          }}
        ></div>
        <div
          className="absolute left-0 top-0 h-[96%] w-screen -z-10 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: "url(/static/banner-bg.png",
          }}
        >
          <div className="w-full h-full bg-black/60"></div>
        </div>
      </div>
      <div className="absolute left-[-510px] top-[-568px] -z-10">
        {gradientBg}
      </div>
    </section>
  );
};

const gradientBg = (
  <svg
    width="1309"
    height="1464"
    viewBox="0 0 1309 1464"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_60_3587)">
      <path
        d="M652.071 756.529C637.075 931.938 513.661 997.375 453.828 1008.17C345.334 1008.17 361.807 867.864 291.939 723.015C236.045 607.137 290.992 458.123 325.453 398.101C440.953 292.447 691.265 92.1595 768.518 136.239C865.083 191.338 887.236 359.475 793.511 422.527C699.786 485.578 670.816 537.269 652.071 756.529Z"
        fill="url(#paint0_linear_60_3587)"
      />
      <path
        d="M652.071 756.529C637.075 931.938 513.661 997.375 453.828 1008.17C345.334 1008.17 361.807 867.864 291.939 723.015C236.045 607.137 290.992 458.123 325.453 398.101C440.953 292.447 691.265 92.1595 768.518 136.239C865.083 191.338 887.236 359.475 793.511 422.527C699.786 485.578 670.816 537.269 652.071 756.529Z"
        stroke="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_60_3587"
        x="-186.925"
        y="-324.925"
        width="1495.31"
        height="1788.02"
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
          result="effect1_foregroundBlur_60_3587"
        />
      </filter>
      <linearGradient
        id="paint0_linear_60_3587"
        x1="560.729"
        y1="130"
        x2="560.729"
        y2="1008.17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3C38F4" />
      </linearGradient>
    </defs>
  </svg>
);

export default MainBanner;
