import Image from "next/image";
import React from "react";

const TransactionCard = () => {
  return (
    <div
      className="relative flex h-[190px] w-[calc(100vw-36px)] sm:w-[350px] flex-col gap-3 rounded-lg border border-white bg-white/45 px-4 py-5"
      style={{
        backdropFilter: "blur(3px)",
      }}
    >
      <div className="flex items-center justify-between gap-5">
        <h1 className="font-neue font-bold uppercase">Transactions</h1>
        <h1 className="text-sm">View all</h1>
      </div>
      <div className="flex w-full gap-2.5 items-center rounded-lg bg-white p-3">
        <Image
          src="/static/coinsvgs/bitcoin.svg"
          width={41}
          height={41}
          alt="bitcoin"
          className="min-w-[41px]"
        />
        <div className="flex w-full flex-col">
          <span className="text-black">You buy Bitcoin</span>
          <span className="text-sm text-black/50">Today</span>
        </div>
        <span className="text-nowrap text-black">$124.01</span>
      </div>
      <div className="flex w-full gap-2.5 items-center rounded-lg bg-white p-3">
        <Image
          src="/static/coinsvgs/ether.svg"
          width={41}
          height={41}
          alt="bitcoin"
          className="min-w-[41px]"
        />
        <div className="flex w-full flex-col">
          <span className="text-black">You sell Ethereum</span>
          <span className="text-sm text-black/50">Today</span>
        </div>
        <span className="text-nowrap text-black">$247.23</span>
      </div>
    </div>
  );
};

export default TransactionCard;
