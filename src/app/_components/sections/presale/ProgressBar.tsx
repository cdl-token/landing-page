interface ProgressBarProps {
  raisedAmount?: number;
  soldPercentage?: number;
}
const ProgressBar: React.FC<ProgressBarProps> = ({
  raisedAmount,
  soldPercentage,
}) => {
  const roundOff = (num: number): string => {
    return num.toFixed(2);
  };

  return (
    <div className="flex w-full flex-col gap-y-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-sm sm:text-base sm:leading-[18px]">
            Stage 1 / 10
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <h3 className="text-sm sm:text-base sm:leading-[18px]">
            ${roundOff(raisedAmount || 0)} / $300M (2.1%)
          </h3>
        </div>
      </div>
      <div className="h-[10px] w-full rounded-[5px] bg-custom-bg/50 sm:h-[17px]">
        <div
          className="h-full rounded-[5px] bg-primary"
          style={{ width: `30%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
