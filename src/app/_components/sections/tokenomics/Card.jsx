"use client";

import SecondaryButton from "@/components/buttons/SecondaryButton";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Card = ({
  state,
  bonusPercent,
  daysLeft,
  start,
  endDate, // Accepting endDate as a prop
}) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00:00");

  const getTimeRemaining = (endDate) => {
    const total = Date.parse(endDate) - Date.parse(new Date());
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

  const startTimer = (endDate) => {
    const { total, days, hours, minutes, seconds } = getTimeRemaining(endDate);
    if (total >= 0) {
      setTimer(
        `${days > 9 ? days : "0" + days}:${
          hours > 9 ? hours : "0" + hours
        }:${minutes > 9 ? minutes : "0" + minutes}:${
          seconds > 9 ? seconds : "0" + seconds
        }`
      );
    }
  };

  const clearTimer = (endDate) => {
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(endDate);
    }, 1000);
    Ref.current = id;
  };

  useEffect(() => {
    if (endDate) {
      clearTimer(endDate);
    }
    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
  }, [endDate]);

  return (
    <div className="group w-[85vw] min-w-[271.5px] max-w-full rounded-3xl bg-[#232325] p-4 transition-all duration-500 ease-in-out hover:scale-105 sm:w-[313px]">
      <h2 className="mt-4 pl-4">State: {state}</h2>
      <div className="flex justify-between">
        <div>
          <p className="group-hover:text-primary1 mt-5 pl-3 font-neue text-4xl font-extrabold leading-10">
            {bonusPercent}%
          </p>
          <p className="font-apfel-grotezktext group-hover:text-primary1 mt-1 pl-4 text-[18px] font-normal">
            BONUS
          </p>
        </div>
        <Link href="/#presale" className="z-10">
          <SecondaryButton
            className="absolute right-5 top-20 mt-auto hidden group-hover:flex"
            title="Buy now"
          />
        </Link>
        <div className="relative mt-7 flex w-full justify-center py-5 text-start"></div>
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
