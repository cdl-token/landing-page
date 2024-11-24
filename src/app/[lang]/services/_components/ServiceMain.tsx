import Image from "next/image";

const ServiceMain = () => {
  return (
    <div className="relative flex min-h-[45rem] w-full items-center justify-center pt-20 md:pt-40">
      <div className="absolute -left-[500px] -top-[600px]">{gradientSvg}</div>
      <div className="grid w-full max-w-7xl md:grid-cols-[1fr_720px_1fr]">
        <div className="relative hidden lg:block">
          <img
            src="/static/wave.png"
            width={1146}
            height={901}
            alt="wave"
            className="absolute right-0 top-0 min-h-[901px] min-w-[1146px] scale-x-[-1]"
          />
        </div>
        <div className="static z-10 flex h-full px-5 flex-col items-center justify-center gap-1 md:gap-5 text-center">
          <h1
            className="font-neue text-3xl font-bold uppercase md:text-[70px] md:leading-[72px]"
            style={{
              background: "linear-gradient(90deg, #FF1CF7 0%, #00D18C 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            WHY ACCEPT
          </h1>
          <h1 className="font-neue text-3xl font-bold uppercase md:text-[70px] md:leading-[72px]">
            Raw data when
          </h1>
          <h1 className="font-neue text-3xl font-bold uppercase md:text-[70px] md:leading-[72px]">
            Insights await?
          </h1>
          <span className="max-w-[597px] py-5 md:py-0 text-sm text-center font-apfel md:text-lg">
            The CDL Token enables real-time access to comprehensive crypto data,
            delivering insights on over 6 million tokens and 1 billion NFTs
            across 57 blockchain networks.
          </span>
          <button className="my-5 flex items-center rounded-[5px] bg-white p-1 text-black hover:shadow-lg">
            {buttonSvg}
            <span className="px-3 pt-0.5 font-neue text-sm font-bold uppercase">
              get started
            </span>
          </button>
          <div className="my-10 flex h-[160px] w-[696px] flex-col items-center justify-center gap-5 rounded-[20px] bg-white text-black">
            <span className="uppercase">Powering leading web3 platforms</span>
            <Image
              src="/static/services/companies.svg"
              width={597}
              height={20}
              alt="Companies"
            />
          </div>
        </div>
        <div className="relative hidden lg:block">
          <img
            src="/static/wave.png"
            width={1146}
            height={901}
            alt="wave"
            className="absolute left-0 top-0 min-h-[901px] min-w-[1146px]"
          />
        </div>
      </div>
    </div>
  );
};

const buttonSvg = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H36C38.2091 0 40 1.79086 40 4V36C40 38.2091 38.2091 40 36 40H4C1.79086 40 0 38.2091 0 36V4Z"
      fill="#111111"
    />
    <rect
      width="4.8"
      height="4.8"
      transform="translate(17.6094 22.4094)"
      fill="white"
    />
    <rect
      width="4.8"
      height="4.8"
      transform="translate(22.4092 17.6094)"
      fill="white"
    />
    <rect
      width="4.8"
      height="4.8"
      transform="translate(17.6094 12.8093)"
      fill="white"
    />
    <rect
      width="4.8"
      height="4.8"
      transform="translate(12.8096 17.6094)"
      fill="white"
    />
  </svg>
);

const gradientSvg = (
  <svg
    width="1496"
    height="1789"
    className="lg:w-screen"
    viewBox="0 0 1496 1789"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_80_2307)">
      <path
        d="M839.071 1081.53C824.075 1256.94 700.661 1322.37 640.828 1333.17C532.334 1333.17 548.807 1192.86 478.939 1048.02C423.045 932.137 477.992 783.123 512.453 723.101C627.953 617.447 878.265 417.16 955.518 461.239C1052.08 516.338 1074.24 684.475 980.511 747.527C886.786 810.578 857.816 862.269 839.071 1081.53Z"
        fill="url(#paint0_linear_80_2307)"
      />
      <path
        d="M839.071 1081.53C824.075 1256.94 700.661 1322.37 640.828 1333.17C532.334 1333.17 548.807 1192.86 478.939 1048.02C423.045 932.137 477.992 783.123 512.453 723.101C627.953 617.447 878.265 417.16 955.518 461.239C1052.08 516.338 1074.24 684.475 980.511 747.527C886.786 810.578 857.816 862.269 839.071 1081.53Z"
        stroke="black"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_80_2307"
        x="0.0746155"
        y="0.0746765"
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
          result="effect1_foregroundBlur_80_2307"
        />
      </filter>
      <linearGradient
        id="paint0_linear_80_2307"
        x1="747.729"
        y1="455"
        x2="747.729"
        y2="1333.17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3C38F4" />
      </linearGradient>
    </defs>
  </svg>
);

export default ServiceMain;
