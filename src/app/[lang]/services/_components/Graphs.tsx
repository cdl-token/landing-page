"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import TradingView widgets without server-side rendering
const AdvancedRealTimeChartNoSSR = dynamic(
  () =>
    import("react-ts-tradingview-widgets").then((w) => w.AdvancedRealTimeChart),
  {
    ssr: false,
  },
);

const SymbolOverviewNoSSR = dynamic(
  () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
  {
    ssr: false,
  },
);

// Define the props interface
interface GraphsProps {
  coin?: string;
  symbolGraph?: string;
  symbol?: string;
  desc?: string;
}

const Graphs: React.FC<GraphsProps> = ({
  coin = "Bitcoin",
  symbolGraph = "BINANCE:BTCUSDT",
  symbol = "BTC",
  desc = "Bitcoin is a decentralized cryptocurrency originally described in a 2008 whitepaper by a person, or group of people, using the alias Satoshi Nakamoto. It was launched soon after, in January 2009 Bitcoin is a peer-to-peer online currency, meaning that all transactions happen directly between equal, independent network participants, without the need for any intermediary to permit or facilitate them.",
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-coal mx-5 h-full w-full max-w-7xl rounded-lg p-5 py-10 sm:p-20 sm:py-20">
        <div className="mb-5 flex gap-x-5">
          <h1 className="text-2xl font-bold">
            {coin + " "}
            <span className="text-primary">{symbol}</span>
          </h1>
        </div>
        <div className="text-darkgray pb-5">{desc}</div>
        <div className="relative h-[600px]">
          <AdvancedRealTimeChartNoSSR
            symbol={symbolGraph}
            theme="dark"
            autosize
            interval="1"
            timezone="exchange"
            locale="en"
            toolbar_bg="#f1f3f6"
            save_image={true}
            details={false}
            hide_side_toolbar={true}
          />
          <div className="absolute bottom-[4.6rem] left-0 grid h-12 w-16 place-items-center rounded-r-full">
            <div className="bg-primary grid h-10 w-10 place-items-center rounded-full border border-white/20 p-1">
              <Image
                src="/static/logo.svg"
                alt="coin"
                className="mt-1"
                width={20}
                height={20}
                quality={100}
              />
            </div>
          </div>
          <div className="bg-black absolute -bottom-20 h-20 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
