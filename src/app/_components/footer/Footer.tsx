import React from "react";
import HeaderLogo from "../header/HeaderLogo";
import Link from "next/link";
import {
  discordIcon,
  facebookIcon,
  telegramIcon,
  twitterIcon,
  youtubeIcon,
} from "./footer-icons";

const Footer = ({ lang = "en" }: { lang: string }) => {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center overflow-hidden border-t border-white/30">
      <div className="static z-10 flex w-full max-w-7xl flex-col gap-5 px-5 pt-20">
        <div className="grid gap-10 pb-10 lg:grid-cols-[10fr_5fr_5fr_5fr_10fr]">
          <div className="flex flex-col gap-2">
            <HeaderLogo />
            <span className="pl-5 text-sm">
              Empowering the future of crypto investments with real-time data,
              advanced AI analytics, and innovative blockchain solutions. Stay
              ahead in the market with CDL
            </span>
            <div className="mt-5 flex items-center gap-3 pl-5">
              <Link className="hover:text-primary" href="/">
                {telegramIcon}
              </Link>
              <Link className="hover:text-primary" href="/">
                {twitterIcon}
              </Link>
              <Link className="hover:text-primary" href="/">
                {facebookIcon}
              </Link>
              <Link className="hover:text-primary" href="/">
                {youtubeIcon}
              </Link>
              <Link className="hover:text-primary" href="/">
                {discordIcon}
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5 px-5 pt-8 lg:px-0">
            <h1 className="font-neue text-2xl font-bold">Company</h1>
            <Link className="hover:text-primary" href="/about">
              About
            </Link>
            <Link className="hover:text-primary" href="https://cdl-token.gitbook.io/cdl-token/usdcdl-token/editor">
              Token
            </Link>
            <Link className="hover:text-primary" href="/about#our-team">
              Team
            </Link>
            <Link className="hover:text-primary" href="/product">
              Product
            </Link>
          </div>
          <div className="flex flex-col gap-5 px-5 pt-8 lg:px-0">
            <h1 className="font-neue text-2xl font-bold">Resources</h1>
            <Link className="hover:text-primary" href="/static/whitepaper.pdf">
              Whitepaper
            </Link>
            <Link
              className="hover:text-primary"
              href="https://cdl-token.gitbook.io/cdl-token/"
            >
              Lightpaper
            </Link>
            <Link
              className="hover:text-primary"
              href="https://github.com/cyhammad/cdl-token"
            >
              Github
            </Link>
            <Link className="hover:text-primary" href="/contact">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-5 px-5 pt-8 lg:px-0">
            <h1 className="font-neue text-2xl font-bold">Community</h1>
            <Link
              className="hover:text-primary"
              href="https://cdl-token.gitbook.io/cdl-token/getting-started/team-and-principles"
            >
              Roles
            </Link>
            <Link
              className="hover:text-primary"
              href="https://cdl-token.gitbook.io/cdl-token/getting-started/publish-your-docs"
            >
              Ecosystem
            </Link>
            <Link className="hover:text-primary" href={`/${lang}/faq`}>
              Faq&apos;s
            </Link>
          </div>
          <div className="flex flex-col justify-end gap-5 px-5 pt-8 lg:px-0">
            <h1 className="font-neue text-xl">Sign up for our neweletter</h1>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-md border border-white/30 bg-transparent px-3 py-2 focus:outline-none"
              placeholder="Email Address ->"
            />
          </div>
        </div>
        <div className="ml-5 flex flex-wrap justify-between gap-3 pb-5">
          <span className="text-sm">
            Copyright © 2024 CDL. All Rights Reserved
          </span>
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <Link
              className="hover:text-primary"
              href="https://cdl-token.gitbook.io/cdl-token/security/term-and-conditons"
            >
              Terms of Service
            </Link>
            <Link
              className="hover:text-primary"
              href="https://cdl-token.gitbook.io/cdl-token/security/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:text-primary"
              href="https://cdl-token.gitbook.io/cdl-token/security/audits"
            >
              Security
            </Link>
          </div>
        </div>
        <img src="/static/footer/cdl-token.svg" className="w-full" />
      </div>
      <div className="absolute -right-20 bottom-[-220px]">{gradientSvg}</div>
    </footer>
  );
};

const gradientSvg = (
  <svg
    width="1009"
    height="1132"
    viewBox="0 0 1009 1132"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_177_492)">
      <path
        d="M656.388 706.639C671.384 531.23 794.798 465.793 854.631 455.001C963.125 455.001 946.652 595.304 1016.52 740.153C1072.41 856.031 1017.47 1005.04 983.006 1065.07C867.506 1170.72 617.194 1371.01 539.941 1326.93C443.376 1271.83 421.223 1103.69 514.948 1040.64C608.673 977.59 637.643 925.899 656.388 706.639Z"
        fill="url(#paint0_linear_177_492)"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_177_492"
        x="0.57486"
        y="0.575104"
        width="1494.31"
        height="1787.02"
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
          stdDeviation="227.213"
          result="effect1_foregroundBlur_177_492"
        />
      </filter>
      <linearGradient
        id="paint0_linear_177_492"
        x1="747.73"
        y1="1333.17"
        x2="747.73"
        y2="455.001"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F7931A" />
        <stop offset="0.61947" stopColor="#3104C2" />
      </linearGradient>
    </defs>
  </svg>
);

export default Footer;
