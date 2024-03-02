import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Ace of Hacks",
  description: "Biggest Hackathon in ACPCE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="icon" href="/favicon.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anta&family=Kode+Mono:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="relative">
          <div className="absolute -z-50 flex h-full w-screen justify-evenly">
            <div className="h-full w-0.5 bg-gray-700 opacity-20 max-md:hidden"></div>
            <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
            <div className="h-full w-0.5 bg-gray-700 opacity-20 max-md:hidden"></div>
            <div className="h-full w-0.5 bg-gray-700 opacity-20 max-md:hidden"></div>
            <div className="h-full w-0.5 bg-gray-700 opacity-20 max-md:hidden"></div>
            <div className="h-full w-0.5 bg-gray-700 opacity-20 "></div>
            <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
          </div>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
