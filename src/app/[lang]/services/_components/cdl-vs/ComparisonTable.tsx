const ComparisonTable = () => {
  return (
    <div className="grid w-[1280px] min-w-[1280px] overflow-x-auto grid-cols-5">
      <div className="flex flex-col">
        <div className="h-[96px] border-b border-white/75"></div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Data Availability
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Requests Per Second
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Verifiable Accuracy
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          USD Pricing
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Charting Endpoint
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Aggregates
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Search with Filters
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Holders Data
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Webhooks
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center border-b border-white/75 px-2">
          Websockets
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex h-[96px] items-center justify-center rounded-t-[20px] border border-[#B71DFF] text-xl">
          CDL
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          3 seconds
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          500+
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[32px] items-center justify-center rounded-b-[20px] border-x border-b border-[#B71DFF] text-xl"></div>
      </div>
      <div className="flex flex-col">
        <div className="flex h-[96px] items-center justify-center rounded-t-[20px] border-b border-white/75 text-xl">
          Alchemy
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          3 seconds
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          150
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="border- flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex h-[96px] items-center justify-center rounded-t-[20px] border-b border-white/75 text-xl">
          Coin Gecko
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          10 seconds
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          15
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-x border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex h-[96px] items-center justify-center rounded-t-[20px] border-b border-white/75 text-xl">
          DEX Screener
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          10 seconds
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          5
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {tickSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
        <div className="flex h-[57px] min-w-[240px] items-center justify-center border-b border-white/75 px-2 text-center">
          {crossSvg}
        </div>
      </div>
    </div>
  );
};

const crossSvg = (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.1">
      <rect
        width="32"
        height="32"
        transform="translate(0.0898438 0.439941)"
        fill="#F9F9F9"
      />
    </g>
    <g clipPath="url(#clip0_84_415)">
      <path
        d="M28.0898 0.439941H4.08984C1.8807 0.439941 0.0898438 2.2308 0.0898438 4.43994V28.4399C0.0898438 30.6491 1.8807 32.4399 4.08984 32.4399H28.0898C30.299 32.4399 32.0898 30.6491 32.0898 28.4399V4.43994C32.0898 2.2308 30.299 0.439941 28.0898 0.439941Z"
        fill="#B7B3A2"
      />
      <path
        d="M21.0898 21.4399L11.0898 11.4399"
        stroke="#F9F9F9"
        strokeWidth="3"
      />
      <path
        d="M11.0898 21.4399L21.0898 11.4399"
        stroke="#F9F9F9"
        strokeWidth="3"
      />
    </g>
    <defs>
      <clipPath id="clip0_84_415">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0.0898438 0.439941)"
        />
      </clipPath>
    </defs>
  </svg>
);

const tickSvg = (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_84_266)">
      <path
        d="M28.6904 0.439941H4.69043C2.48129 0.439941 0.69043 2.2308 0.69043 4.43994V28.4399C0.69043 30.6491 2.48129 32.4399 4.69043 32.4399H28.6904C30.8996 32.4399 32.6904 30.6491 32.6904 28.4399V4.43994C32.6904 2.2308 30.8996 0.439941 28.6904 0.439941Z"
        fill="#B71DFF"
      />
      <path
        d="M9.69043 15.4399L14.6904 20.4399L23.6904 11.4399"
        stroke="#F9F9F9"
        strokeWidth="3"
      />
    </g>
    <defs>
      <clipPath id="clip0_84_266">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0.69043 0.439941)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default ComparisonTable;
