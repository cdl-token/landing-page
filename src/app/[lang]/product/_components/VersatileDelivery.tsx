"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { leftVariant } from "@/lib/animation-variants";

const VersatileDelivery = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid w-full max-w-7xl gap-5 px-5 py-20 sm:grid-cols-2 lg:grid-cols-4">
        <motion.h1
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="font-neue text-[40px] font-bold uppercase leading-[50px]"
        >
          Versatile delivery methods
        </motion.h1>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0)}
          className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5"
        >
          <Image
            src="/static/services/clock.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Real-time</h1>
          <span className="leading-[20px] text-white/70">
            On-chain → queryable in less than 3 seconds.
          </span>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.1)}
          className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5"
        >
          <Image
            src="/static/services/websockets.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Websockets</h1>
          <span className="leading-[20px] text-white/70">
            Live-streaming data over unbroken connections.
          </span>
        </motion.div>
        <motion.div
          initial="hide"
          whileInView="show"
          exit="show"
          variants={leftVariant(0.2)}
          className="flex aspect-square flex-col gap-3 rounded-[20px] border border-white/75 p-5"
        >
          <Image
            src="/static/services/webhooks.svg"
            width={144}
            height={144}
            alt="Clock"
          />
          <h1 className="text-[24px]">Webhooks</h1>
          <span className="leading-[20px] text-white/70">
            Get alerted when anything happens on-chain.
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default VersatileDelivery;
