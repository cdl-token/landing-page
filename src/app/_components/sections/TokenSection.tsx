"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactFooter from "../../../components/ContactFooter";
import {
  leftToRightVariants,
  leftVariant,
  rightToLeftVariants,
} from "@/lib/animation-variants";
import TextAnimation from "@/components/ui/scroll-text";

const TokenSection = () => {
  return (
    <div className="grid h-auto items-center justify-center">
      <div className="flex flex-col border-t border-white/30 px-4 py-20 pl-8 md:flex-row md:gap-8 lg:justify-end lg:gap-10">
        <motion.div
          className="static z-10 flex max-w-[38.7rem] flex-col md:max-w-[34.7rem] lg:max-w-[34.7rem]"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftToRightVariants}
        >
          <TextAnimation
            text="Gain access to real-time and historical data for your favorite
              assets"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="text-wrap font-neue text-xl font-bold md:text-4xl lg:text-[37.96px] lg:leading-[42.64px] uppercase text-white"
          />
          <motion.p
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftVariant(0)}
            className="mt-8 text-wrap text-[16px] lowercase leading-[24px] text-white/50"
          >
            Empower yourself to manage your cryptocurrencies, NFTs, and other
            digital assets with complete control, privacy, and security, all
            from the convenience of your own device.
          </motion.p>
          <div className="mt-6 max-w-[38rem]">
            <Image
              src="/static/token-section/line2.svg"
              alt="Arrow"
              width={413}
              height={1}
            />
          </div>
          <motion.p
            initial="hide"
            whileInView="show"
            exit="show"
            className="mt-6 lowercase text-white/50"
            variants={leftVariant(0)}
          >
            Wondering what tokens is supported?
          </motion.p>
          <span className="mt-2 flex text-center">
            <Link href="/product">
              <p className="text-primary1 hover:border-primary1 cursor-pointer font-neue font-bold hover:border-b">
                See all tokens
              </p>
            </Link>
            <div className="flex justify-center text-center">
              <Image
                src="/static/token-section/arrowHead.svg"
                alt="Arrow"
                width={16}
                height={10}
              />
            </div>
          </span>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-end"
          initial="hide"
          whileInView="show"
          exit="show"
          variants={rightToLeftVariants}
        >
          <motion.div
            className="mt-8 max-w-[38rem] md:max-w-[30rem] lg:max-w-[38rem]"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              src="/static/token-section/sideIcon.svg"
              alt="Arrow"
              width={643}
              height={489}
            />
          </motion.div>
        </motion.div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default TokenSection;
