import About from "@/sections/About";
import FAQ from "@/sections/FAQ";
import TopSection from "@/sections/TopSection";

import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <TopSection />
      <About />
      <FAQ />
    </>
  );
}
