"use client";

import { useEffect, useRef, useState } from "react";

const Card = ({
  state,
  bonusPercent,
  daysLeft,
  start,
  endTime = "01:00:00:00",
}) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
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

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
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

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer(endTime);

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    // set timer to 52 days 21 hours 12 minutes 08 seconds
    deadline.setDate(deadline.getDate() + parseFloat(endTime.substring(0, 2)));
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className="bg-[#232325] group w-[85vw] min-w-[271.5px] max-w-full rounded-3xl p-4 transition-all duration-500 ease-in-out hover:scale-105 sm:w-[313px]">
      <h2 className="mt-4 pl-4">State: {state}</h2>
      <div className="flex justify-between">
        <div>
          <p className="font-neue group-hover:text-primary1 mt-5 pl-3 text-4xl font-extrabold leading-10">
            {bonusPercent}%
          </p>
          <p className="font-apfel-grotezktext group-hover:text-primary1 mt-1 pl-4 text-[18px] font-normal">
            BONUS
          </p>
        </div>
        <div className="relative mt-7 flex w-full justify-center py-5 text-start">
        </div>
      </div>
      <div className="my-4 flex items-center justify-between gap-1 px-4">
        <p className="text-neutralLight">{daysLeft}</p>
        <span className="text-sm">
          {start} <p className="text-sm">{timer}</p>
        </span>
      </div>
    </div>
  );
};

export default Card;
