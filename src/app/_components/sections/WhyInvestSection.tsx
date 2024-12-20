"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Image from "next/image";
import { motion } from "framer-motion";
import { leftVariant, rightVariants } from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";
import Link from "next/link";

const WhyInvestSection = () => {
  return (
    <section className="max-w-screen flex w-full items-center justify-center overflow-hidden">
      <div className="grid w-full max-w-7xl gap-10 border-t border-white/30 px-5 py-20 sm:min-h-[1300px] md:min-h-[700px] md:grid-cols-2 lg:min-h-[700px] 2xl:min-h-[800px]">
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="relative hidden w-full md:block"
        >
          <div className="relative h-[223px] w-[223px]">
            <div className="absolute z-10 h-full w-full rounded-full bg-black/50" />
            <Image
              src="/static/glow-logo.png"
              className="hidden md:block"
              width={223}
              height={315}
              alt="shape"
            />
          </div>
          <Image
            src="/static/glow-logo.png"
            className="static z-10 mt-10 sm:max-w-full md:absolute md:top-20 md:max-w-[450px]"
            width={624}
            height={600}
            alt="shape"
          />
        </motion.div>
        <div className="static z-10 flex w-full flex-col gap-5 md:justify-center">
          <div className="flex items-center justify-between">
            <motion.span
              initial="hide"
              whileInView="show"
              exit="show"
              variants={rightVariants(0)}
              className="font-neue font-bold"
            >
              Unbreakable protection
            </motion.span>
            <div className="relative flex h-full w-full max-w-[78.7px] flex-col items-center md:hidden">
              <div className="absolute -bottom-5 z-10 h-[110px] w-[110px] rounded-full bg-black/75"></div>
              <img
                src="/static/glow-logo.png"
                className="absolute bottom-8 md:hidden"
                alt="shape 1"
                width={60}
                height={60}
              />
              <img
                src="/static/glow-logo.png"
                className="absolute -bottom-2 left-[-14px] md:hidden"
                alt="shape 1"
                width={60}
                height={60}
              />
              <img
                src="/static/glow-logo.png"
                className="absolute -bottom-2 left-[32px] md:hidden"
                alt="shape 1"
                width={60}
                height={60}
              />
            </div>
          </div>
          <TextAnimation
            text="Why invest in CDL Token?"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="font-neue text-3xl font-bold md:text-5xl uppercase text-white"
          />
          <motion.p
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0)}
            className="lowercase text-white"
          >
            CDL Token empowers investors with real-time analytics, live charts
            and secure transactions on the Binance Smart chain. With plans to
            expand features and partnerships, CDL Token offers exclusive
            insights and innovative tools for informed, data-driven
            investing--positioning itself as a crypto leader in crypto data
            solutions.
          </motion.p>
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.2)}
            className="mt-10 flex w-full items-center gap-2"
          >
            <Link
              className="w-full sm:w-fit"
              href="https://cdl-token.gitbook.io/cdl-token/information/how-to-buy"
            >
              <PrimaryButton
                className="w-full sm:w-fit"
                title="Buy CDL Token"
              />
            </Link>
            <Link
              className="w-full sm:w-fit"
              href="https://dapp-one-phi.vercel.app/"
            >
              <SecondaryButton
                className="w-full sm:w-fit"
                title="Launch Dapp"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestSection;
