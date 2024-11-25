"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function CompaniesSlider() {
  return (
    <motion.div className="flex w-full items-center justify-center py-10">
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="max-w-7xl"
      >
        <CarouselContent>
          <CarouselItem className="flex min-w-[250px] items-center justify-center gap-3 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              src="/static/companies/binance.svg"
              width={150}
              height={40}
              alt="binance"
            />
          </CarouselItem>
          <CarouselItem className="flex min-w-[250px] items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              src="/static/companies/polygon.svg"
              width={150}
              height={40}
              alt="polygon"
            />
          </CarouselItem>
          <CarouselItem className="flex min-w-[250px] items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              src="/static/companies/solana.svg"
              width={150}
              height={40}
              alt="solana"
            />
          </CarouselItem>
          <CarouselItem className="flex min-w-[250px] items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              src="/static/companies/polkadot.svg"
              width={150}
              height={40}
              alt="polkadot"
            />
          </CarouselItem>
          <CarouselItem className="flex min-w-[250px] items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              src="/static/companies/gorand.svg"
              width={150}
              height={40}
              alt="gorand"
            />
          </CarouselItem>
          {/* <CarouselItem className="flex min-w-[250px] items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              quality={100}
              src={`/static/clients/chainlink.svg`}
              width={200}
              height={100}
              alt="chainlink"
            />
          </CarouselItem>
          <CarouselItem className="flex min-w-[250px] items-center justify-center gap-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              quality={100}
              src={`/static/clients/bnb.svg`}
              width={60}
              height={60}
              alt="bnb"
            />
            <span className="text-2xl">BNB</span>
          </CarouselItem>
          <CarouselItem className="flex min-w-[250px] items-center justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
            <Image
              quality={100}
              src={`/static/clients/cmc.svg`}
              width={200}
              height={100}
              alt="cmc"
            />
          </CarouselItem> */}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
