"use client";

import { useRef, useState, useEffect } from "react";

const PresaleCountdown = () => {
  const ref = useRef<NodeJS.Timeout | null>(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (e: string) => {
    const total = Date.parse(e) - Date.parse(new Date().toISOString());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e: string) => {
    const { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (days > 9 ? days : "0" + days) +
          ":" +
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds),
      );
    }
  };

  const clearTimer = (e: string) => {
    setTimer("52:21:12:08");
    if (ref.current) clearInterval(ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date("2025-02-20T00:00:00Z");

    return deadline.toISOString();
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="flex justify-between gap-3 sm:gap-6">
      <div className="flex flex-col items-center gap-y-2 sm:gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(0, 1)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(1, 2)}
          </div>
        </div>
        <span className="text-neutralLight text-sm sm:hidden">Days</span>
        <span className="text-neutralLight hidden sm:block md:text-[18px] md:leading-[22.4px]">
          Days
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-2 sm:gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(3, 4)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(4, 5)}
          </div>
        </div>
        <span className="text-neutralLight text-sm sm:hidden">Hrs</span>
        <span className="text-neutralLight hidden sm:block md:text-[18px] md:leading-[22.4px]">
          Hours
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-2 sm:gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(6, 7)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(7, 8)}
          </div>
        </div>
        <span className="text-neutralLight text-sm sm:hidden">Mins</span>
        <span className="text-neutralLight hidden sm:block md:text-[18px] md:leading-[22.4px]">
          Minutes
        </span>
      </div>
      <div className="flex flex-col items-center gap-y-2 sm:gap-y-6">
        <div className="flex gap-x-1">
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(9, 10)}
          </div>
          <div className="grid h-[36px] w-[28px] place-items-center rounded-[5px] border border-primary bg-custom-bg px-1.5 pt-1 font-neue text-sm font-bold leading-[15px] sm:h-[63px] sm:w-[40px] sm:text-[30px] xl:w-[50px]">
            {timer.substring(10)}
          </div>
        </div>
        <span className="text-neutralLight text-sm sm:hidden">Secs</span>
        <span className="text-neutralLight hidden sm:block md:text-[18px] md:leading-[22.4px]">
          Seconds
        </span>
      </div>
    </div>
  );
};

export default PresaleCountdown;
