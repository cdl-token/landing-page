import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const ServicesSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const sliderData = [
    {
      title: "Live Data Flows",
      description:
        "Our Data Flows are doing something new - providing live data from source so users are aware of market moves as they happen, not after. With no lag, global providers and multiple plug-in options the way we handle data is different.",
      link: "/product",
      image: "/static/cube3.png",
      gradient: cardGradient1,
      imagePosition: "absolute left-0 top-0",
      contentClass: "p-5 pt-[180px]",
    },
    {
      title: "Neo Oracles",
      description:
        "Old oracles use data that is updated infrequently and after the event. Our Neo Oracles harness data with multiple instances running simultaneously across a decentralized global network to verify it for pin-point accuracy.",
      link: "/product",
      image: "/static/cube2.png",
      gradient: cardGradient2,
      imagePosition: "absolute bottom-0 right-0",
      contentClass: "p-5 pb-[28px] mt-[20px]",
    },
    {
      title: "AI Agents & Algos",
      description:
        "Our AI Agents and advanced algorithms deliver market intelligence and data-driven insights both online and on-chain. Gain a trading edge with bespoke models, predictive pricing, real time price slippage curves and much more.",
      link: "/product",
      image: "/static/cube1.png",
      gradient: cardGradient3,
      imagePosition: "absolute -bottom-10 -right-10",
      contentClass: "p-5 pb-[28px] mt-[20px]",
    },
    {
      title: "Multi-Exchange Support",
      description:
        "Get real-time data from multiple crypto exchanges in one place, making it easy to compare prices, liquidity, and trading volume across various platforms",
      link: "/product",
      image: "/static/cube3.png",
      gradient: cardGradient1,
      imagePosition: "absolute left-0 top-0",
      contentClass: "p-5 pt-[180px]",
    },
    {
      title: "Real-Time Data Feeds",
      description:
        "Access up-to-the-minute cryptocurrency price updates, volume data, and market trends to stay informed and make timely decisions",
      link: "/product",
      image: "/static/cube2.png",
      gradient: cardGradient2,
      imagePosition: "absolute bottom-0 right-0",
      contentClass: "p-5 pb-[28px] mt-[20px]",
    },
    {
      title: "Harnessing the Power of AI",
      description:
        "At CDL Token, we are partnering with leading AI companies to establish a cutting-edge AI research arm, transforming the way crypto data is analyzed and utilized.",
      link: "/product",
      image: "/static/cube1.png",
      gradient: cardGradient3,
      imagePosition: "absolute -bottom-10 -right-10",
      contentClass: "p-5 pb-[28px] mt-[20px]",
    },
  ];

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <div className="flex flex-col gap-5">
      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full max-w-7xl"
      >
        <CarouselContent>
          {sliderData.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="relative flex h-[488px] w-full flex-col overflow-hidden rounded-2xl bg-[#F8F8F81F]">
                  <div
                    className={`z-10 flex h-full flex-col ${item.contentClass}`}
                  >
                    <h1 className="font-neue text-3xl font-bold">
                      {item.title}
                    </h1>
                    <span className="font-apfel text-lg text-white/75">
                      {item.description}
                    </span>
                    <Link
                      href={item.link}
                      className="absolute bottom-6 mt-16 flex w-fit items-center justify-center rounded-full border border-white/30 bg-black/20 px-5 pb-2 pt-1.5 font-apfel transition-all ease-in hover:border-white"
                    >
                      See more
                    </Link>
                  </div>
                  <div className="absolute right-0">{item.gradient}</div>
                  <Image
                    className={item.imagePosition}
                    width={233}
                    height={260}
                    alt={`image-${index}`}
                    src={item.image}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const cardGradient1 = (
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

const cardGradient2 = (
  <svg
    width="467"
    height="537"
    viewBox="0 0 467 537"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6" filter="url(#filter0_f_177_363)">
      <path
        d="M465.347 -46.5791C471.406 39.951 453.646 239.709 334.132 346.499C184.74 479.986 306.867 499.867 320.499 504.412"
        stroke="url(#paint0_linear_177_363)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_363"
        x="-89.8975"
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
          result="effect1_foregroundBlur_177_363"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_363"
        x1="363.474"
        y1="-46.5791"
        x2="363.474"
        y2="504.411"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00BAE1" />
        <stop offset="1" stopColor="#5300AE" />
      </linearGradient>
    </defs>
  </svg>
);

const cardGradient3 = (
  <svg
    width="467"
    height="537"
    viewBox="0 0 467 537"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6" filter="url(#filter0_f_177_357)">
      <path
        d="M249.515 -72.7083C243.456 13.8219 261.216 213.58 380.73 320.37C530.123 453.857 407.996 473.738 394.363 478.282"
        stroke="url(#paint0_linear_177_357)"
        strokeWidth="362.404"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_357"
        x="-101.99"
        y="-254.639"
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
          result="effect1_foregroundBlur_177_357"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_357"
        x1="351.388"
        y1="-72.7083"
        x2="351.388"
        y2="478.282"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F7931A" />
        <stop offset="1" stopColor="#2D28FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default ServicesSlider;
