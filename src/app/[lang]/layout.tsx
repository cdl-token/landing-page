import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../_components/header/Header";
import TokensMarquee from "../_components/header/TokensMarquee";
import Footer from "../_components/footer/Footer";
import { AppKit } from "@/context/Web3Modal";
import { StoreProvider } from "@/context/Store/Store";
import ToastProvider from "@/components/notification/ToastProvider";
import PreloaderProvider from "./PreloaderProvider";
import CookiesBanner from "../_components/CookiesBanner";
import { GoogleAnalytics } from '@next/third-parties/google'

const neueMachinaFont = localFont({
  src: [
    {
      path: "./fonts/neue-machina/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/neue-machina/NeueMachina-Light.otf",
      weight: "100 300",
      style: "italic",
    },
    {
      path: "./fonts/neue-machina/NeueMachina-Ultrabold.otf",
      weight: "700 900",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
});

const apfelFont = localFont({
  src: "./fonts/apfel-grotezk/ApfelGrotezk-Regular.woff",
  variable: "--font-apfel",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Crypto Data Live CDL Token Presale",
  description:
    "The CDL token is the native coin for the Crypto Data Live platform. Join the presale and be part of redefining how data flows between TradFi and DeFi.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const lang = (await params).lang;
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neueMachinaFont.variable} ${apfelFont.variable} scrollbar-none font-apfel`}
      >
        <AppKit>
          <PreloaderProvider>
            <StoreProvider>
              <ToastProvider>
                <TokensMarquee />
                <Header lang={lang} />
                {children}
                <Footer lang={lang} />
                <CookiesBanner />
              </ToastProvider>
            </StoreProvider>
          </PreloaderProvider>
        </AppKit>
      </body>
      <GoogleAnalytics gaId="G-1D409RB5B8" />
    </html>
  );
}
