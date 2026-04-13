import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";

import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Trust from "@/components/Trust";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Comparison />
        <Trust />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
