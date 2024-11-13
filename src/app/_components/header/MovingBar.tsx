import { CoinData, getMovingBarData } from "@/lib/coins-data";
import { formatCurrency } from "@/utils/formatters";
import Image from "next/image";

const MovingBar = async (): Promise<JSX.Element> => {
  const data: CoinData[] = await getMovingBarData();

  const displayTicker = (number: number): JSX.Element => (
    <div
      className={`ticker-text${
        number === 2 ? "2" : ""
      } text-neutralLight z-[999] flex h-[36px] w-fit select-none items-center gap-x-16 overflow-hidden bg-black px-5 text-white`}
    >
      {data?.map((coin, index) => (
        <div className="flex gap-x-4" key={index}>
          <Image
            src={coin.logoUrl || ""}
            width={20}
            height={20}
            alt={coin.name}
          />
          <span className="text-sm">{coin.name}</span>
          <span className="text-sm">
            {formatCurrency(coin.quote.USD.price)}
          </span>
          <div className="flex items-center gap-x-1">
            <span className="text-sm text-white">
              {coin.quote.USD.percent_change_24h > 0 ? upArrow : downArrow}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-[36px] w-screen bg-black">
      <div className="ticker-container relative flex overflow-x-hidden">
        {displayTicker(1)}
        {displayTicker(2)}
      </div>
    </div>
  );
};

const downArrow = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12L5.88675 7H0.113249L3 12ZM2.5 0L2.5 7.5H3.5L3.5 0L2.5 0Z"
      fill="#FF4500"
    />
  </svg>
);

const upArrow = (
  <svg
    width="6"
    height="12"
    viewBox="0 0 6 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 0L0.113249 5H5.88675L3 0ZM2.5 12L2.5 4.5H3.5L3.5 12L2.5 12Z"
      fill="#00FF00"
    />
  </svg>
);

export default MovingBar;
