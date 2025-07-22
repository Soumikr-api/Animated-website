import { Button } from "./ui/stateful-button"
import { HoverEffect } from "./ui/card-hover-effect";
 


const Upcoming = () => {
    const webinar = [
  {
    "title": "Modern UI with Tailwind & Framer Motion",
    "description": "Discover how to create visually captivating interfaces with Tailwind CSS and Framer Motion. We'll animate real-world components and refine design flow.",
    "slug": "modern-ui-tailwind-framer-motion",
    "isFeatured": true
  },
  {
    "title": "Mastering Next.js Routing & Data Fetching",
    "description": "A deep dive into dynamic routing, server-side rendering, and API integration using Next.js 14 — ideal for building scalable web apps.",
    "slug": "nextjs-routing-data-fetching",
    "isFeatured": true
  },
  {
    "title": "Debug Like a Pro: Solving Complex React Errors",
    "description": "Navigate tricky bugs in nested arrays, props, and state management. Get hands-on practice debugging real projects with live coaching.",
    "slug": "react-error-debugging",
    "isFeatured": true
  },
  {
    "title": "Building Structured Web Data with JSON",
    "description": "Learn how to organize testimonial, content, and dynamic layouts using structured JSON. Perfect for developers creating reusable CMS-style layouts.",
    "slug": "structured-web-data-json",
    "isFeatured": true
  }
]
    function feature(event: MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error("Function not implemented.")
    }

  return (
    <div className="p-12 bg-neutral-950"> 
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center ">
            <h2 className="text-base text-teal-700 font-semibold tracking-wide uppercase">
                FEATURDE WEBINAR
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-100">
                Go With your Tech Journey
            </p>
        </div>
        <div className="mt-10">
        <HoverEffect 
        items={webinar}/>
        </div>
        <div className="mt-10 text-center">
            <div className="mt-24 text-center">
                    <div className="flex h-40 w-full items-center justify-center">
                      <Button onClick={feature}>Know More</Button>
                    </div>
                  </div>
        </div>

    </div>
    </div>
  )
}

export default Upcoming