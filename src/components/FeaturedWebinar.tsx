'use client'
import { HoverEffect } from "./ui/card-hover-effect";

const FeaturedWebinar = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center mt-28">
        <div className="text-center">
            <h2 className="text-2xl text-teal-600 font-semibold tracking-wide">Featured Courses</h2>
            <h1 className="text-3xl mt-2 leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Book For Free Now</h1>
        </div>
        <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
        </div>
    </div>
  )
}

export default FeaturedWebinar

export const projects = [
    {
        title: "Mastering Asynchronous Programming",
        description: "Unlock the power of asynchronous programming to improve the performance and responsiveness of your applications. This webinar covers key concepts, patterns, and best practices for writing efficient asynchronous code, helping you manage concurrency and perform tasks without blocking execution."
    },
    {
        title: "Building Scalable Web Applications",
        description: "Learn the techniques and tools required to build web applications that scale effortlessly. This webinar delves into architecture design, load balancing, database optimization, and other strategies to ensure your web apps can handle increasing traffic and demand."
    },
    {
        title: "Introduction to Cloud Computing for Developers",
        description: "Explore the fundamentals of cloud computing and how it can transform your development workflow. This webinar introduces you to popular cloud platforms, services, and deployment models, enabling you to leverage the cloud for building, deploying, and scaling applications."
    },
    {
        title: "Advanced Data Structures and Algorithms",
        description: "Enhance your problem-solving skills with an in-depth understanding of advanced data structures and algorithms. This webinar covers complex topics such as graphs, trees, dynamic programming, and algorithm optimization, providing you with the tools to tackle challenging coding problems."
    },
    {
        title: "Cross-Platform Mobile Development",
        description: "Discover how to create mobile applications that run seamlessly on multiple platforms. This webinar focuses on cross-platform development frameworks, tools, and best practices, enabling you to write code once and deploy it across iOS, Android, and other mobile operating systems."
    },
    {
        title: "DevOps Best Practices and Tools",
        description: "Learn how to streamline your development and deployment processes with DevOps. This webinar covers essential DevOps practices, tools, and methodologies, helping you automate workflows, enhance collaboration between development and operations teams, and achieve continuous integration and delivery."
    }
]
