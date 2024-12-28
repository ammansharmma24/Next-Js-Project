import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center"></div>
      <h1 className="mt-20 md:mt-0 p-10 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Master The Art Of Programming
      </h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 w-auto mx-52 text-center">
        Unlock the world of technology with our comprehensive programming
        courses. Whether you're a beginner or looking to advance your skills,
        our expert-led curriculum offers practical, hands-on experience to help
        you master coding concepts and thrive in the digital age. Join us and
        start your journey to becoming a proficient programmer.
      </p>
      <div className="mt-10">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-200"
        >
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;