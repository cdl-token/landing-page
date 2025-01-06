"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { leftVariant, rightVariants } from "@/lib/animation-variants";
import Link from "next/link";

// Dynamic imports
const PrimaryButton = dynamic(
  () => import("@/components/buttons/PrimaryButton"),
);
const SecondaryButton = dynamic(
  () => import("@/components/buttons/SecondaryButton"),
);
const TextAnimation = dynamic(() => import("@/components/ui/scroll-text"), {
  ssr: false, // Avoid SSR for animation-heavy component
});

const WhyInvestSection = () => {
  return (
    <section className="max-w-screen flex w-full items-center justify-center overflow-hidden">
      <div className="grid w-full max-w-7xl gap-10 border-t border-white/30 px-5 py-20 sm:min-h-[1300px] md:min-h-[700px] md:grid-cols-2 lg:min-h-[700px] 2xl:min-h-[800px]">
        {/* Left Section */}
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
              width={223}
              height={315}
              alt="Glow logo small"
              priority // Ensure this image is prioritized for above-the-fold
            />
          </div>
          <Image
            src="/static/glow-logo.png"
            className="static z-10 mt-10 sm:max-w-full md:absolute md:top-20 md:max-w-[450px]"
            width={624}
            height={600}
            alt="Glow logo large"
            loading="lazy" // Lazy load for improved performance
          />
        </motion.div>

        {/* Right Section */}
        <div className="static z-10 flex w-full flex-col gap-5 md:justify-center">
          {/* Heading */}
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
              {/* Replaced with Next.js Image */}
              <Image
                src="/static/glow-logo.png"
                className="absolute bottom-8 md:hidden"
                alt="Glow logo 1"
                width={60}
                height={60}
                loading="lazy"
              />
              <Image
                src="/static/glow-logo.png"
                className="absolute -bottom-2 left-[-14px] md:hidden"
                alt="Glow logo 2"
                width={60}
                height={60}
                loading="lazy"
              />
              <Image
                src="/static/glow-logo.png"
                className="absolute -bottom-2 left-[32px] md:hidden"
                alt="Glow logo 3"
                width={60}
                height={60}
                loading="lazy"
              />
            </div>
          </div>

          {/* Animated Text */}
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

          {/* Description */}
          <motion.p
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0)}
            className="lowercase text-white"
          >
            CDL Token empowers investors with real-time analytics, live charts,
            and secure transactions on the Binance Smart Chain. With plans to
            expand features and partnerships, CDL Token offers exclusive
            insights and innovative tools for informed, data-driven
            investing—positioning itself as a leader in crypto data solutions.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial="hide"
            whileInView="show"
            exit="show"
            variants={rightVariants(0.2)}
            className="mt-10 flex w-full items-center gap-2"
          >
            <Link className="w-full sm:w-fit" href="/#presale">
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
