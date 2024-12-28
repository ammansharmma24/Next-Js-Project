'use client'
import React from "react";
import courseData from "@/data/courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
import { Cousine } from "next/font/google";


interface Course {
  id: number;
  course_name: string;
  description: string;
  fees_in_inr: number;
  avail: boolean;
}

const FeaturedCourses = () => {
  var featuredCourses = courseData.courses.filter(
    (course: Course) => course.avail
  );
  return (
    <div>
      <div className=" mt-5 py-12 bg-gray-900">
        <div className="">
          <div className="text-center">
            <h2 className="text-2xl text-teal-600 font-semibold tracking-wide">
              Featured Courses
            </h2>
            <h1 className="text-3xl mt-2 leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Learn With Best
            </h1>
          </div>
        </div>
        <div className="mt-10 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
            {featuredCourses.map((course: Course) => (
              <div key={course.id} className="flex justify-center ">
                <BackgroundGradient className="rounded-[22px] h-[100%] w-[100%] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-center items-start">
                    <h1 className="text-center text-2xl">{course.course_name}</h1>
                    <p className="my-5">{course.description}</p>
                    <h2 className="">price:<span className="font-semibold text-1xl">{course.fees_in_inr}</span></h2>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={"/courses"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
