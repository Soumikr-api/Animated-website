"use client";
import { useRouter } from "next/navigation";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export const HeroSection = () => {
  const router = useRouter();

  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center 
      justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="p-4 relative z-10 w-full text-center">
        <h1
          className="mt-16 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50 to-neutral-400"
        >
          Master in Web Development.
        </h1>
        <p
          className="mt-4 font-bold text-base md:text-lg
          text-neutral-300 max-w-lg mx-auto"
        >
                We build modern, responsive websites that combine sleek design with powerful functionality.
                From startups to enterprises, our solutions are crafted to elevate your digital presence and drive real results.          


        </p>
        <div className="mt-6">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={() => router.push("/courses")}
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;