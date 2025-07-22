"use client"

import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Light from "@/components/Light"
import Cards from "@/components/Cards";
import Upcoming from "@/components/Upcoming";
import Instructor from "@/components/Instructor";
export default function home(){
  return(
<main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
        <h1 className="text-2xl text-center"></h1>
      <HeroSection/>
      <FeatureSection/>
      <Light/>
      <Cards/>
      <Upcoming/>
      <Instructor/>
      
</main>
  );
}