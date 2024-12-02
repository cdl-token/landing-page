"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import TextAnimation from "./ui/scroll-text";

const ContactFooter = () => {
  const router = useRouter();

  const leftToRightVariants = (delay: number) => ({
    hide: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  });

  return (
    <div className="grid place-items-center">
      <div className="mt-8 flex max-w-[75rem] flex-col gap-y-[61px] px-8 xl:px-2">
        <div className="flex flex-col gap-y-0.5">
          <TextAnimation
            text="Need Help?"
            variants={{
              hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
              visible: {
                filter: "blur(0px)",
                opacity: 1,
                y: 0,
                transition: { ease: "linear" },
              },
            }}
            classname="text-wrap font-neue text-xl font-bold md:text-3xl uppercase text-white"
          />
        </div>
        <div className="grid gap-x-5 gap-y-10 md:grid-cols-3">
          <motion.div
            className="group flex w-full gap-x-3 gap-y-[30px] rounded-[10px]"
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftToRightVariants(0)}
          >
            <div className="grid h-[80px] w-[80px] place-items-center">
              <Image
                src="/static/contact-footer/chat.png"
                width={80}
                height={80}
                alt="img"
              />
            </div>
            <div className="flex w-[80%] flex-col gap-x-3 gap-y-3">
              <TextAnimation
                text="24/7 Chat Support"
                variants={{
                  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: { ease: "linear" },
                  },
                }}
                classname="font-neue text-[21.33px] font-bold leading-6 text-white"
              />
              <TextAnimation
                as="p"
                letterAnime={true}
                text="Get 24/7 chat support with our friendly customer service agents
            at your service."
                classname="lowercase text-white"
                variants={{
                  hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
              />
              <button
                className="mt-2 flex items-center gap-x-2 text-center"
                onClick={() => router.push("/contact-us")}
              >
                <p className="text-primary1 hover:border-primary1 font-neue font-bold hover:border-b">
                  Chat now
                </p>
                {arrowHead}
              </button>
            </div>
          </motion.div>
          <motion.div
            className="group flex w-full gap-x-3 gap-y-[30px] rounded-[10px]"
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftToRightVariants(0.5)}
          >
            <div className="grid h-[80px] w-[80px] place-items-center">
              <Image
                src="/static/contact-footer/faq.png"
                width={80}
                height={80}
                alt="img"
              />
            </div>
            <div className="flex w-[80%] flex-col gap-x-3 gap-y-3">
              <TextAnimation
                text="FAQs"
                variants={{
                  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: { ease: "linear" },
                  },
                }}
                classname="font-neue text-[21.33px] font-bold leading-6 text-white"
              />
              <TextAnimation
                as="p"
                letterAnime={true}
                text="View FAQs for detailed instructions on specific features."
                classname="lowercase text-white"
                variants={{
                  hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
              />
              <button
                className="mt-2 flex items-center gap-x-2 text-center"
                onClick={() => router.push("/faqs")}
              >
                <p className="text-primary1 hover:border-primary1 font-neue font-bold hover:border-b">
                  Learn more
                </p>
                {arrowHead}
              </button>
            </div>
          </motion.div>
          <motion.div
            className="group flex w-full gap-x-3 gap-y-[30px] rounded-[10px]"
            initial="hide"
            whileInView="show"
            exit="show"
            variants={leftToRightVariants(0.5)}
          >
            <div className="grid h-[80px] w-[80px] place-items-center">
              <Image
                src="/static/contact-footer/announce.png"
                width={80}
                height={80}
                alt="img"
              />
            </div>
            <div className="flex w-[80%] flex-col gap-x-3 gap-y-3">
              <TextAnimation
                text="Announcements"
                variants={{
                  hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: { ease: "linear" },
                  },
                }}
                classname="font-neue text-[21.33px] font-bold leading-6 text-white"
              />
              <TextAnimation
                as="p"
                letterAnime={true}
                text="Stay up to date with the latest stories and commentary."
                classname="lowercase text-white"
                variants={{
                  hidden: { filter: "blur(4px)", opacity: 0, y: 20 },
                  visible: {
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                    },
                  },
                }}
              />
              <button
                className="mt-2 flex items-center gap-x-2 text-center"
                onClick={() => router.push("/faqs")}
              >
                <p className="text-primary1 hover:border-primary1 font-neue font-bold hover:border-b">
                  Learn more
                </p>
                {arrowHead}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const arrowHead = (
  <svg
    width="8"
    height="15"
    viewBox="0 0 8 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.15479 1.82556L6.8351 7.50588L1.15479 13.1862"
      stroke="currentColor"
      strokeWidth="2.27213"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ContactFooter;
