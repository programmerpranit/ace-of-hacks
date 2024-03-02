import About from "@/sections/About";
import FAQ from "@/sections/FAQ";
import Sponsors from "@/sections/Sponsors";
import TopSection from "@/sections/TopSection";
import Tracks from "@/sections/Tracks";

import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <TopSection />
      <About />
      <Tracks />
      <Sponsors />
      <FAQ />
      {/* <OurTeam /> */}
    </>
  );
}
