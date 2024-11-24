import Image from "next/image";

const FilterSearch = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid w-full max-w-7xl gap-5 px-5 py-20 border-white/30 border-t sm:grid-cols-2 lg:grid-cols-4">
        <h1 className="font-neue text-[40px] font-bold uppercase leading-[50px]">
          Filter & Search
        </h1>
        <div className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5">
          <Image
            src="/static/services/search.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Complete Results</h1>
          <span className="leading-[20px] text-white/70">
            Find any token or NFT in under 500ms.
          </span>
        </div>
        <div className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5">
          <Image
            src="/static/services/indexing.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Automatic Indexing</h1>
          <span className="leading-[20px] text-white/70">
            New assets available immediately after creation.
          </span>
        </div>
        <div className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5">
          <Image
            src="/static/services/power.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Powerful Filters</h1>
          <span className="leading-[20px] text-white/70">
            Sort by volume, liquidity, number of transactions, and more.
          </span>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
