"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { cn } from "@/utils/utils";

const cardcontent = [
  {
    name: "Ayesha Banerjee",
    title: "Frontend Developer Intern",
    quote: "Before joining, I could barely center a div. Now I’ve built a responsive portfolio using React and Framer Motion! Your guidance turned confusion into confidence.",
    image: "https://example.com/images/testimonial-ayesha.jpg"
  },
  {
    name: "Rohan Mehta",
    title: "Junior Web Developer",
    quote: "The way you explain complex TypeScript and Next.js concepts is pure gold. Debugging nested arrays used to terrify me — now it’s my favorite challenge.",
    image: "https://example.com/images/testimonial-rohan.jpg"
  },
  {
    name: "Tanya Arora",
    title: "Freelance UI/UX Designer",
    quote: "Your teaching feels like mentorship. You don’t just teach syntax — you make design thinking, animation, and UI detail feel exciting and attainable.",
    image: "https://example.com/images/testimonial-tanya.jpg"
  },
  {
    name: "Nikhil Raj",
    title: "Software Engineer",
    quote: "I’ve taken other web dev courses, but yours was the first that combined clean code and visual finesse. Every module had something mind-blowing.",
    image: "https://example.com/images/testimonial-nikhil.jpg"
  },
  {
    name: "Sneha Dutta",
    title: "UI Developer",
    quote: "You helped me see that creativity belongs in code. I now build sites that are fast, beautiful, and functional — with gradients I can be proud of.",
    image: "https://example.com/images/testimonial-sneha.jpg"
  }
];

const Cards = () => {
  return (
   <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        <h2 className="mb-8 text-3xl font-bold text-center z-10 text-gray-800 dark:text-white">
        Hear Our Success: Voice Of Our Student
      </h2>
       <div className="w-full max-w-6xl">
      <InfiniteMovingCards
        items={cardcontent}
        direction="right"
        speed="slow"
      />
      </div>
      </p>
    </div>
  );
}


export default Cards;