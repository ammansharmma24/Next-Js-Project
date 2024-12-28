"use client";

import { StickyScroll } from "./ui/sticky-scroll-reveal";

const WhyChooseUs = () => {
  const content = [
    {
      title: "Expert Instructors",
      description:
        "Learn from industry experts with years of experience in programming and software development. Our instructors bring real-world insights and practical knowledge to help you master coding skills and stay ahead in the competitive tech industry.",
    },
    {
      title: "Hands-On Learning",
      description:
        "Engage in practical, hands-on projects that simulate real-world challenges. Our courses emphasize experiential learning, allowing you to build, test, and refine your skills through interactive assignments and real coding exercises.",
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "Our meticulously designed curriculum covers all essential aspects of programming. From foundational concepts to advanced techniques, our courses provide a thorough understanding, ensuring you have the knowledge and skills needed to excel in your career.",
    },
    {
      title: "Career Support",
      description:
        "Benefit from our dedicated career support services, including resume building, interview preparation, and job placement assistance. We help you navigate the job market and connect with top employers to launch and advance your programming career.",
    },
  ];

  return <StickyScroll content={content} />;
};

export default WhyChooseUs;
