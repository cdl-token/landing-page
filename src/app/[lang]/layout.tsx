import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../_components/header/Header";
import MovingBar from "../_components/header/MovingBar";
import Footer from "../_components/footer/Footer";

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
  title: "CDL Token",
  description: "CDL token landing page",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const lang = (await params).lang;
  return (
    <html lang="en">
      <body className={`${neueMachinaFont.variable} ${apfelFont.variable} scrollbar-none`}>
        <MovingBar />
        <Header lang={lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
