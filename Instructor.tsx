"use client"
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";


const techer = [
  {
    id: "instructor_001",
    name: "Luiz Fernando",
    description: "Microsoft-certified full-stack developer with 20 years of experience. Specializes in ASP.NET, React, and UX design. Known for deep technical dives and personalized pacing.",
    image:       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",

  },
  {
    id: "instructor_002",
    name: "Sonia K.",
    description: "Passionate web developer and tutor focused on project-based learning. Helps beginners become job-ready using HTML, CSS, JavaScript, and Python frameworks.",
    image:       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",

  },
  {
    id: "instructor_003",
    name: "Syed Bahadur",
    description: "Certified web developer with 7+ years of experience. Offers structured lessons with real-world examples in PHP, MySQL, Node.js, and MongoDB.",
    image:      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

  },
  {
    id: "instructor_004",
    name: "Mudassar N.",
    description: "Experienced freelancer specializing in WordPress, Bootstrap, and Amazon affiliate sites. Focuses on practical, hands-on website building.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",

  },
  {
    id: "instructor_005",
    name: "Ateeba M.",
    description: "Web development tutor with 3+ years of teaching experience. Expert in React and Next.js, known for patient and research-driven instruction.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  }
] 
const Instructor = () => {
  return (
         <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-5xl lg:w-7xl md:w-4xl text-blue-200 font-bold text-center mb-8 ">
                Meet Our Professional
            </h2>
            <p className="text-base md:text-xl text-cyan-100 text-center mb-4">
                They Are Helping You To Achive Your Goal
            </p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={techer}/>
            </div>
            </WavyBackground>
        </div>
  )
}

export default Instructor