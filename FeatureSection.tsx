"use client";
import Link from "next/link";
import rawData from "../data/web_courses.json";
import { Button } from "@/components/ui/stateful-button";
import { useRouter } from "next/navigation";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

interface CourseData {
  courses: Course[];
}

const Coursedata: CourseData = {
  courses: rawData.courses.flat(),
};

const FeatureSection = () => {
  const router = useRouter();

  const featuredCourses: Course[] = Coursedata.courses.filter(
    (course) => course.isFeatured
  );

  const feature = async () => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    router.push("/courses");
  };

  return (
    <div className="py-10 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-300 font-semibold tracking-wide">
          FEATURED COURSES
        </h2>
        <p className="mt-6 text-4xl leading-8 font-extrabold tracking-tight text-cyan-100 sm:text-5xl">
          Learn With Us
        </p>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {featuredCourses.map((course) => (
            <BackgroundGradient key={course.id}>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-300 mb-4">{course.description}</p>
                <p className="text-black font-semibold mb-2">
                  Instructor: {course.instructor}
                </p>
                <p className="text-black-500 font-bold">₹{course.price}</p>
                <Link href={`/courses/${course.slug}`}>
                 <div className="mt-10 text-center">
            <div className="mt-24 text-center">
                    <div className="flex h-40 w-full items-center justify-center">
                      <Button onClick={feature}>Know More</Button>
                    </div>
                  </div>
        </div>
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <div className="flex h-40 w-full items-center justify-center">
          <Button onClick={feature}>Know More</Button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;