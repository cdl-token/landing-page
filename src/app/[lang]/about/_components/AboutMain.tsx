import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const AboutMain = () => {
  return (
    <div
      className="relative flex min-h-[50rem] w-full flex-col items-center px-5 pt-40 text-center"
      style={{
        backgroundImage: "url(/static/looper.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1
        className="font-neue text-4xl font-bold lg:text-[70px] lg:leading-[72px]"
        style={{
          background: "linear-gradient(91.06deg, #FF1CF7 2.26%, #00F0FF 100%)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        A Next-Gen Blockchain.
      </h1>
      <h1 className="font-neue text-3xl font-bold lg:text-[60px] lg:leading-[62px]">
        Reliable & Secure Data.
      </h1>
      <span className="w-full max-w-[780px] py-5 text-center text-[20px]">
        Experience unparalleled speed and efficiency with our next-generation
        blockchain, designed to power seamless transactions and real-time data
        processing
      </span>
      <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row">
        <PrimaryButton title="About CDL Token" />
        <SecondaryButton title="Our Services" />
      </div>
      <div className="absolute left-0 top-0">{gradientSvg}</div>
    </div>
  );
};

const gradientSvg = (
  <svg
    width="862"
    height="1067"
    viewBox="0 0 862 1067"
    className="lg:w-screen"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_3228_2658)">
      <path
        d="M206.071 360.529C191.075 535.938 67.6606 601.375 7.82796 612.167C-100.666 612.167 -84.1932 471.864 -154.061 327.015C-209.955 211.137 -155.008 62.1234 -120.547 2.10135C-5.04744 -103.553 245.265 -303.84 322.518 -259.761C419.083 -204.662 441.236 -36.5248 347.511 26.5267C253.786 89.5782 224.816 141.269 206.071 360.529Z"
        fill="url(#paint0_linear_3228_2658)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3228_2658"
        x="-632.425"
        y="-720.425"
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
          result="effect1_foregroundBlur_3228_2658"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3228_2658"
        x1="114.729"
        y1="-266"
        x2="114.729"
        y2="612.167"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

export default AboutMain;