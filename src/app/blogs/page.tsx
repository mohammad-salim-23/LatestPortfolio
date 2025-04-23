"use client"

import { useEffect, useState } from "react";
import Image from 'next/image';

const Blogs = ()=>{
    interface Blog{
        id: string;
        title: string;
        content:string;
        image : string;
        category: string
    }
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const sampleBlogs = [
      {
        id: "1",
        title: "Mastering Object-Oriented Programming",
        content: "Explore the core principles of OOP like encapsulation, inheritance, and polymorphism with real-world JavaScript examples.",
        image: "https://i.pinimg.com/736x/5a/2d/56/5a2d561e9823dacfecdda467290b4724.jpg",
        category: "OOP",
        postedDate: "2025-04-22"
      },
      {
        id: "2",
        title: "Top 10 Coding Problems for Competitive Programming",
        content: "Sharpen your CP skills with these frequently asked problems and tips to optimize runtime.",
        image: "https://i.pinimg.com/736x/57/b9/51/57b9516d6c1c45db6548c45f6d2e44f9.jpg",
        category: "CP",
        postedDate: "2025-04-20"
      },
      {
        id: "3",
        title: "Understanding Data Structures & Algorithms",
        content: "Learn how to approach DSA problems from scratch, including array manipulations and tree traversals.",
        image: "https://i.pinimg.com/736x/f5/cf/03/f5cf03f7f6f1a7ea526722cafbb32529.jpg",
        category: "DSA",
        postedDate: "2025-04-18"
      },
      {
        id: "4",
        title: "Building Scalable Apps with Next.js 14",
        content: "A beginner-friendly guide to routing, SSR, and API routes in the latest version of Next.js.",
        image: "https://i.pinimg.com/736x/bb/7e/d0/bb7ed0738a635022cc2a93599e0b8902.jpg",
        category: "Next.Js",
        postedDate: "2025-04-15"
      },
      {
        id: "5",
        title: "10 ES6 Features Every Developer Should Know",
        content: "From arrow functions to destructuring — these JavaScript features will boost your code efficiency.",
        image: "https://i.pinimg.com/736x/89/c6/36/89c63670d9ca886db068c3cb501c9ee7.jpg",
        category: "JavaScript",
        postedDate: "2025-04-12"
      }
    ];
    
    useEffect(()=>{
       setBlogs(sampleBlogs);
    },[]);
    return (
        <div className="container mx-auto px-4 py-6 mt-18 lg:mt-18 bg-black ">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Latest Blogs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog , index) => (
          <div key={blog.id || index} className="blog-item">
            <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4 text-teal-400">{blog.title}</h3>
            <p className="text-white mt-2">{blog.content}</p>
            <p className="text-sm text-teal-500 mt-2">{blog.category}</p>
          </div>
        ))}
      </div>
    </div>       
    )
}
export default Blogs;