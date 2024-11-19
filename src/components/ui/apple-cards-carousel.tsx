"use client";
import React, {
  useEffect,
  useState,
  createContext,
} from "react";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <MoveLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <MoveRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  index,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const cubes = 12;

  return (
    <>
      <div className="flex h-[33rem] w-[465px] max-w-[90vw] flex-col overflow-hidden rounded-lg bg-white/10">
        <div className="relative h-full w-full">
          <img src={`/static/cube${index+1 % cubes}.png`} alt="" className={cn(
            "absolute right-0"
          )} />
          <div className="absolute bottom-0 right-0">{gradientSvg}</div>
        </div>
      </div>
    </>
  );
};

const gradientSvg = (
  <svg
    width="466"
    height="537"
    viewBox="0 0 466 537"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6" filter="url(#filter0_f_3061_130)">
      <path
        d="M464.937 -46.5791C470.996 39.951 453.236 239.709 333.722 346.499C184.329 479.986 306.456 499.867 320.089 504.412"
        stroke="url(#paint0_linear_3061_130)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_3061_130"
        x="-90.3079"
        y="-228.51"
        width="906.75"
        height="1077.38"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="84.6367"
          result="effect1_foregroundBlur_3061_130"
        />
      </filter>
      <linearGradient
        id="paint0_linear_3061_130"
        x1="363.064"
        y1="-46.5791"
        x2="363.064"
        y2="504.411"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00BAE1" />
        <stop offset="1" stopColor="#5300AE" />
      </linearGradient>
    </defs>
  </svg>
);
