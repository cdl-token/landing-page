"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import LightGraph from "./LightGraph";

const ExploreNow = () => {
  const tabs = ["chart", "nft", "holders"];
  const [selectedTab, setSelectedTab] = useState("chart");
  return (
    <div className="static z-10 flex w-full items-center justify-center gap-3">
      <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-10 border-b border-white/30 px-5 py-10 text-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-neue text-3xl font-bold uppercase md:text-[45px] md:leading-[50px]">
            Explore Now
          </h1>
          <span className="text- max-w-[406px] font-apfel uppercase">
            Choose your data type and view the API code from CDL Token below.
          </span>
        </div>
        <div className="h-full min-h-[45rem] w-full overflow-hidden rounded-2xl border border-white/30">
          <div className="flex w-full items-center">
            {tabs.map((tab, index) => (
              <button
                className={cn(
                  "flex w-full items-center justify-center gap-1 border-b-2 py-5 font-apfel uppercase",
                  selectedTab === tab ? "border-primary" : "border-white/30",
                )}
                onClick={() => setSelectedTab(tab)}
                key={index}
              >
                {tab === "chart"
                  ? chartdataSvg
                  : tab === "nft"
                    ? nftdataSvg
                    : holdersdataSvg}
                {tab} <span className="hidden pl-0.5 md:inline">data</span>
              </button>
            ))}
          </div>
          {selectedTab === "chart" && <LightGraph />}
          {selectedTab === "nft" && <p>Coming Soon</p>}
          {selectedTab === "holders" && <p>Coming Soon</p>}
        </div>
      </div>
    </div>
  );
};

const chartdataSvg = (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.09375 4.14062V7.14062"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.84375 7.14062H6.34375C5.92954 7.14062 5.59375 7.47641 5.59375 7.89062V10.8906C5.59375 11.3048 5.92954 11.6406 6.34375 11.6406H7.84375C8.25796 11.6406 8.59375 11.3048 8.59375 10.8906V7.89062C8.59375 7.47641 8.25796 7.14062 7.84375 7.14062Z"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.09375 11.6406V13.1406"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0938 2.64062V4.14062"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.8438 4.14062H12.3438C11.9295 4.14062 11.5938 4.47641 11.5938 4.89062V9.39062C11.5938 9.80484 11.9295 10.1406 12.3438 10.1406H13.8438C14.258 10.1406 14.5938 9.80484 14.5938 9.39062V4.89062C14.5938 4.47641 14.258 4.14062 13.8438 4.14062Z"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.0938 10.1406V12.3906"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.59375 2.64062V16.1406H16.0938"
      stroke="#F9F9F9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const nftdataSvg = (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.0625 9.39062C7.89095 9.39062 8.5625 8.71908 8.5625 7.89062C8.5625 7.0622 7.89095 6.39062 7.0625 6.39062C6.23407 6.39062 5.5625 7.0622 5.5625 7.89062C5.5625 8.71908 6.23407 9.39062 7.0625 9.39062ZM16.4375 5.26562L9.3125 1.14062L2.1875 5.26562V13.5156L9.3125 17.6406L16.4375 13.5156V5.26562ZM9.3125 2.87388L14.9375 6.13046V11.291L11.5159 9.23808L5.53752 13.7219L3.6875 12.6508V6.13046L9.3125 2.87388ZM9.3125 15.9074L6.94841 14.5387L11.6091 11.0432L14.6071 12.8421L9.3125 15.9074Z"
      fill="#F9F9F9"
    />
  </svg>
);

const holdersdataSvg = (
  <svg
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3544_8063)">
      <path
        d="M6.48634 2.92197L9.56251 6.1915L12.6387 2.92197H6.48634ZM14.059 3.87471L11.5137 6.57822H16.0488L14.059 3.87471ZM15.8168 8.26572H9.56251H3.30822L9.56251 15.1669L15.8168 8.26572ZM3.07618 6.57822H7.61134L5.06603 3.87471L3.07618 6.57822ZM18.3445 7.98799L10.1883 16.988C10.0301 17.1638 9.80158 17.2657 9.56251 17.2657C9.32345 17.2657 9.09845 17.1638 8.93673 16.988L0.780482 7.98799C0.509779 7.68916 0.488685 7.24268 0.727748 6.91924L4.66525 1.57549C4.82345 1.36104 5.07658 1.23096 5.34376 1.23096H13.7813C14.0485 1.23096 14.3016 1.35752 14.4598 1.57549L18.3973 6.91924C18.6363 7.24268 18.6117 7.68916 18.3445 7.98799Z"
        fill="#F9F9F9"
      />
    </g>
    <defs>
      <clipPath id="clip0_3544_8063">
        <rect
          width="18"
          height="18"
          fill="white"
          transform="translate(0.5625 0.390625)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default ExploreNow;
