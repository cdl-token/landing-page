"use client";

import Image from "next/image";

export default function CompaniesSlider() {
  return (
    <div className="flex items-center px-5 grayscale gap-10">
      <Image
        src="/static/companies/binance.svg"
        width={150}
        height={40}
        alt="binance"
      />
      <Image
        src="/static/companies/circle.svg"
        width={150}
        height={40}
        alt="binance"
      />
      <Image
        src="/static/companies/cmc.svg"
        width={150}
        height={40}
        alt="binance"
      />
      <Image
        src="/static/companies/metamask.svg"
        width={150}
        height={40}
        alt="binance"
      />
      <Image
        src="/static/companies/polygon.svg"
        width={150}
        height={40}
        alt="polygon"
      />
      <Image
        src="/static/companies/solana.svg"
        width={150}
        height={40}
        alt="solana"
      />
      <Image
        src="/static/companies/polkadot.svg"
        width={150}
        height={40}
        alt="polkadot"
      />
      <Image
        src="/static/companies/gorand.svg"
        width={150}
        height={40}
        alt="gorand"
      />
    </div>
  );
}
