import Image from "next/image";
import React from "react";

const AccountCard = () => {
  return (
    <div
      className="relative grid h-[220px] w-[calc(100vw-56px)] grid-cols-[4fr_7fr] rounded-lg border border-white bg-white/45 px-4 py-5 sm:w-[350px]"
      style={{
        backdropFilter: "blur(3px)",
      }}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="font-neue leading-3">Account</span>
          <h1 className="text-apfel font-sans text-lg font-bold">$10,561.23</h1>
          <div className="flex items-center">
            <span>20.5%</span>
            {arrowUpRightSvg}
          </div>
        </div>
        <button className="button w-fit rounded-full border border-white/30 px-3 py-1.5 text-xs transition-all duration-200 ease-in hover:border-white">
          Live data
        </button>
      </div>
      <Image
        src="/static/charts/account-chart.svg"
        className="absolute -right-20 -top-7"
        width={350}
        height={300}
        alt="chart"
      />
    </div>
  );
};

const arrowUpRightSvg = (
  <svg
    width="25"
    height="26"
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.53366 9.05471H16.4175V15.9386M15.9395 9.53276L8.96001 16.5122"
      stroke="white"
      strokeWidth="1.17157"
      strokeMiterlimit="10"
      strokeLinecap="square"
    />
  </svg>
);

export default AccountCard;
