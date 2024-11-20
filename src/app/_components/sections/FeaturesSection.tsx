import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="relative flex w-full items-center justify-center">
      <div className="static z-10 flex min-h-screen w-full max-w-7xl flex-col gap-10 border-t border-white/30 px-5 py-20">
        <h1 className="font-neue text-5xl font-bold uppercase">
          Features and benefits
        </h1>
        <div className="grid w-full gap-10 md:grid-cols-[3.5fr_6fr]">
          <div className="relative flex h-[22rem] w-full flex-col gap-3 overflow-hidden rounded-lg border border-white/10 p-8">
            <h1 className="font-neue text-3xl font-bold">
              User-Friendly Interface
            </h1>
            <span className="h-full font-apfel text-white/75">
              Navigate our intuitive platform with ease, whether you&apos;re a
              seasoned trader or a newcomer.
            </span>
            <Image
              src="/static/feature-card/icon1.svg"
              width={48}
              height={48}
              alt="icon"
            />
            <div className="absolute left-0 top-0">{cardGradient1}</div>
          </div>
          <div className="relative flex h-[22rem] w-full flex-col gap-3 overflow-hidden rounded-lg border border-white/10 p-8">
            <h1 className="font-neue text-3xl font-bold">Advanced Security</h1>
            <span className="h-full font-apfel text-white/75">
              Your assets are protected with top-tier security protocols,
              including multi-factor authentication and cold storage.
            </span>
            <Image
              src="/static/feature-card/icon2.svg"
              width={48}
              height={48}
              alt="icon"
            />
            <div className="absolute left-0 top-0">{cardGradient2}</div>
          </div>
        </div>
        <div className="grid w-full gap-10 md:grid-cols-[6fr_4fr]">
          <div className="relative flex h-[22rem] w-full flex-col gap-3 overflow-hidden rounded-lg border border-white/10 p-8">
            <h1 className="font-neue text-3xl font-bold">
              Real-Time Market Data
            </h1>
            <span className="h-full font-apfel text-white/75">
              Stay ahead with real-time updates and in-depth market analysis.
            </span>
            <Image
              src="/static/feature-card/icon3.svg"
              width={48}
              height={48}
              alt="icon"
            />
            <div className="absolute left-0 top-0">{cardGradient3}</div>
          </div>
          <div className="relative flex h-[22rem] w-full flex-col gap-3 overflow-hidden rounded-lg border border-white/10 p-8">
            <h1 className="font-neue text-3xl font-bold">
              Smart Contract Integration
            </h1>
            <span className="h-full font-apfel text-white/75">
              Leverage the power of smart contracts for secure and transparent
              transactions.
            </span>
            <Image
              src="/static/feature-card/icon4.svg"
              width={48}
              height={48}
              alt="icon"
            />
            <div className="absolute left-0 top-0">{cardGradient4}</div>
          </div>
        </div>
      </div>
      <div className="absolute -z-10">{gradientSvg}</div>
    </section>
  );
};

const gradientSvg = (
  <svg
    width="1721"
    height="1736"
    viewBox="0 0 1721 1736"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="xl:w-screen"
  >
    <g filter="url(#filter0_f_177_441)">
      <path
        d="M543.993 1147.49C354.502 1377.93 -644.577 1250.54 -738.468 1208.11C-889.914 1103.86 31.83 1023.97 73.4942 754.643C106.826 539.178 766.147 719.522 1079.94 622.781C1617.37 457.091 2145.71 392.416 2211.19 528.182C2293.04 697.888 1253.81 819.234 1062.39 817.181C870.969 815.129 780.858 859.445 543.993 1147.49Z"
        fill="url(#paint0_linear_177_441)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_441"
        x="-1209.68"
        y="0.336029"
        width="3879.88"
        height="1735.66"
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
          result="effect1_foregroundBlur_177_441"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_441"
        x1="2235.23"
        y1="289.371"
        x2="2026.08"
        y2="1429.37"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" stopOpacity="0.55" />
      </linearGradient>
    </defs>
  </svg>
);

const cardGradient1 = (
  <svg
    width="486"
    height="359"
    viewBox="0 0 486 359"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4" filter="url(#filter0_f_177_392)">
      <path
        d="M151.682 -125.885C166.91 -40.4902 232.853 148.904 374.802 223.321C552.24 316.343 438.649 365.409 426.537 373.141"
        stroke="url(#paint0_linear_177_392)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_392"
        x="-195.979"
        y="-326.969"
        width="1020.04"
        height="1027.63"
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
          stdDeviation="84.6367"
          result="effect1_foregroundBlur_177_392"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_392"
        x1="289.023"
        y1="-58.1387"
        x2="378.196"
        y2="296.454"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

const cardGradient2 = (
  <svg
    width="1000"
    height="400"
    viewBox="0 0 705 359"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4" filter="url(#filter0_f_177_404)">
      <path
        d="M295.399 -105.392C289.34 -18.862 291.808 200.997 426.614 287.686C493.746 330.856 452.848 509.218 439.215 513.762"
        stroke="url(#paint0_linear_177_404)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_404"
        x="-56.826"
        y="-287.323"
        width="871.36"
        height="1142.26"
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
          stdDeviation="84.6367"
          result="effect1_foregroundBlur_177_404"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_404"
        x1="378.854"
        y1="-105.392"
        x2="378.854"
        y2="513.762"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F7931A" />
        <stop offset="1" stopColor="#2D28FF" />
      </linearGradient>
    </defs>
  </svg>
);

const cardGradient3 = (
  <svg
    width="1000"
    height="400"
    viewBox="0 0 694 404"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4" filter="url(#filter0_f_177_396)">
      <path
        d="M-8.22373 -34.1212C69.7431 3.89662 233.858 119.157 266.584 276.054C307.491 472.175 385.772 376.35 396.524 366.816"
        stroke="url(#paint0_linear_177_396)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_396"
        x="-256.916"
        y="-366.266"
        width="950.544"
        height="1115.31"
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
          stdDeviation="84.6367"
          result="effect1_foregroundBlur_177_396"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_396"
        x1="-59.1604"
        y1="54.1037"
        x2="418.011"
        y2="329.599"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D08BFE" />
        <stop offset="1" stopColor="#985353" />
      </linearGradient>
    </defs>
  </svg>
);

const cardGradient4 = (
  <svg
    width="478"
    height="404"
    viewBox="0 0 478 404"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.4" filter="url(#filter0_f_177_412)">
      <path
        d="M195.85 512.132C172.219 428.67 148.744 229.503 243.888 100.525C362.817 -60.6979 239.205 -55.1779 224.931 -56.8375"
        stroke="url(#paint0_linear_177_412)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_412"
        x="-175.641"
        y="-407.372"
        width="821.096"
        height="1138.14"
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
          stdDeviation="84.6367"
          result="effect1_foregroundBlur_177_412"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_412"
        x1="295.569"
        y1="491.294"
        x2="182.865"
        y2="-48.0472"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00BAE1" />
        <stop offset="1" stopColor="#5300AE" />
      </linearGradient>
    </defs>
  </svg>
);

export default FeaturesSection;
