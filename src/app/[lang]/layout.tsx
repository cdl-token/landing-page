import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../_components/header/Header";

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
  params: {
    [key: string]: string | undefined;
  };
}

export default function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const lang = params.lang;
  return (
    <html lang="en">
      <body className={`${neueMachinaFont.variable} ${apfelFont.variable}`}>
        <Header lang={lang} />
        {children}
      </body>
    </html>
  );
}
