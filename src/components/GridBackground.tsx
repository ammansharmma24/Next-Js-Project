"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const GridBackground = () => {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex flex-col items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 top-[25%]">
          Programming Quotes
        </p>
        <div className="h-[40rem] rounded-md flex flex-col antialiased  bg-transparent items-center justify-center relative overflow-hidden mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
const testimonials = [
  {
    quote:
      "Coding like poetry should be short and concise.",
    name: "Santosh Kalwar",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    name: "Rick Cook",
  },
  {
    quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    name: "Martin Fowler",
  },
  {
    quote:
      "If we want users to like our software, we should design it to behave like a likable person",
    name: "Alan Cooper",
  },
  {
    quote:
      "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    name: "Sam Redwine",
  },
];
