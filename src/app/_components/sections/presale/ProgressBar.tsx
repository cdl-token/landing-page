const ProgressBar = () => {
  return (
    <div className="flex flex-col gap-y-1 w-full">
      <div className="flex justify-between">
        <h3 className="px-3 text-sm sm:text-base sm:leading-[18px]">
          $10M
        </h3>
        <h3 className="px-1 text-sm sm:text-base sm:leading-[18px]">$300M</h3>
      </div>
      <div className="h-[10px] w-full rounded-[5px] bg-custom-bg/50 sm:h-[17px]">
        <div
          className="bg-primary h-full rounded-[5px]"
          style={{ width: `10%` }}
        ></div>
      </div>
      <div className="flex justify-between py-1 md:py-1.5">
        <span className="text-neutralLight text-xs sm:text-sm sm:leading-6">
          Softcap in 1069 days
        </span>
        <span className="text-neutralLight text-xs sm:text-sm sm:leading-6">
          Hardcap
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
