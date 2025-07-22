"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
 
const content = [
 
  {
    title: "Interface Alchemy",
    description : "We turn static ideas into dynamic interfaces using React, Framer Motion, and TypeScript. Watch your vision come alive with fluid animations and responsive precision.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.alchemy.com/api/og?variant=dapp&title=Interface&token=265ab92dad3e1421b66c0327e520caba0b392f98b2d09d7112ddf6f43e0b8a50"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
 )
  },
  {
    title: "Stack Sculptors",
    description: "From MongoDB schemas to Next.js routing, we shape powerful architectures that are both scalable and elegant. Your backend, beautifully built.",
     content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
 )
  },
  {
    title: "Design-Driven Dev",
    description: "It’s not just about the code—it’s about the feel. We balance creative flair with rigorous logic, refining every pixel to elevate the user experience.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://cdn.sanity.io/images/r115idoc/production/900dc7be7ee358f7fe34284b73c6b1f662d3e10a-3840x2160.png?w=3840&q=75&fit=clip&auto=format"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
 )
  },
  {
    title: "Performant by Default",
    description: "Speed isn’t an afterthought—it’s our foundation. We optimize performance from the first render with smart bundling, lazy loading, and lean code practices.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://www.foregroundweb.com/wp-content/uploads/2020/07/photography-website-performance-mobile.png.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
 )
  },
  {
    title: "Modular & Maintainable",
    description: "Components that snap together like Lego. We follow clean architecture principles so your codebase stays adaptable, readable, and future-proof.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://media.licdn.com/dms/image/v2/C4D12AQExb3EzKj9yKg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1578527524839?e=2147483647&v=beta&t=zqkberQOHLR9LML6FF_TnTU8DpPXAuWAPdixgTzcMEg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
 )
  },
  {
    title: "PixelSyntax",
    description: "High-performance websites built with a designer’s eye and a developer’s mind. Featuring responsive layouts, interactive components, and gradient-rich interfaces powered by Framer Motion and React.",
     content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="https://i0.wp.com/simonkingsnorth.com/wp-content/uploads/2022/05/twitter-e1652184978470.jpg?fit=1200%2C795&ssl=1"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
 )
  }

];


const light = () => {
  return (
    <div>
       <StickyScroll content={content}/>
    </div>
  )
}

export default light