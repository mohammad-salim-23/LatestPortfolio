"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  interface Blog {
    id: string;
    title: string;
    content: string;
    image: string;
    category: string;
    postedDate: string;
  }

  const [blogs, setBlogs] = useState<Blog[]>([]);

  const sampleBlogs: Blog[] = [
    {
      id: "1",
      title: "Mastering Object-Oriented Programming",
      content:
        "Explore the core principles of OOP like encapsulation, inheritance, and polymorphism with real-world JavaScript examples. This blog dives deep into how classes and objects can be used to model real-world problems, making your code reusable and easier to maintain. You'll also learn about access modifiers, constructor functions, method overriding, and best practices for designing clean and efficient object-oriented systems in modern web applications.",
      image: "https://i.pinimg.com/736x/5a/2d/56/5a2d561e9823dacfecdda467290b4724.jpg",
      category: "OOP",
      postedDate: "2025-04-22"
    },
    {
      id: "2",
      title: "Top 10 Coding Problems for Competitive Programming",
      content:
        "Sharpen your CP skills with these frequently asked problems and tips to optimize runtime. From number theory and dynamic programming to binary search and graph traversal, this blog outlines problems that challenge your understanding and improve your problem-solving speed. For each problem, we provide hints, time complexity analysis, and potential pitfalls to avoid during contests like Codeforces, LeetCode, or AtCoder.",
      image: "https://i.pinimg.com/736x/57/b9/51/57b9516d6c1c45db6548c45f6d2e44f9.jpg",
      category: "CP",
      postedDate: "2025-04-20"
    },
    {
      id: "3",
      title: "Understanding Data Structures & Algorithms",
      content:
        "Learn how to approach DSA problems from scratch, including array manipulations, stack-based recursion, and tree traversals. This blog covers essential structures like arrays, linked lists, stacks, queues, trees, and graphs, and explains algorithmic techniques such as sorting, searching, recursion, dynamic programming, and backtracking. Ideal for beginners and intermediate programmers preparing for job interviews or tech internships.",
      image: "https://i.pinimg.com/736x/f5/cf/03/f5cf03f7f6f1a7ea526722cafbb32529.jpg",
      category: "DSA",
      postedDate: "2025-04-18"
    },
    {
      id: "4",
      title: "Building Scalable Apps with Next.js 14",
      content:
        "A beginner-friendly guide to routing, SSR, and API routes in the latest version of Next.js. Learn how to optimize images, implement dynamic routing using the App Router, and improve performance with middleware and caching strategies. We’ll also explore how to build secure API routes, use the new Server Actions feature, and deploy your project seamlessly on platforms like Vercel.",
      image: "https://i.pinimg.com/736x/bb/7e/d0/bb7ed0738a635022cc2a93599e0b8902.jpg",
      category: "Next.Js",
      postedDate: "2025-04-15"
    },
    {
      id: "5",
      title: "10 ES6 Features Every Developer Should Know",
      content:
        "From arrow functions to destructuring — these JavaScript features will boost your code efficiency. This blog walks you through modern JS syntax enhancements including template literals, spread/rest operators, modules, default parameters, classes, and promises. Each feature includes practical examples and comparisons with ES5-style code so you can confidently upgrade your codebase for modern development needs.",
      image: "https://i.pinimg.com/736x/89/c6/36/89c63670d9ca886db068c3cb501c9ee7.jpg",
      category: "JavaScript",
      postedDate: "2025-04-12"
    }
  ];
  

  useEffect(() => {
    setBlogs(sampleBlogs);
  }, []);

  const truncateText = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="container mx-auto px-4 py-6 mt-15 bg-black">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Latest Blogs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-gray-900 rounded-md p-4 shadow-lg">
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <Link href={`/blog/${blog.id}`}>
              <h3 className="text-xl font-semibold mt-4 text-teal-400 hover:underline cursor-pointer">
                {blog.title}
              </h3>
            </Link>
            <p className="text-white mt-2">
              {truncateText(blog.content, 100)}
            </p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-teal-500">{blog.category}</span>
              <Link href={`/blogs/${blog.id}`} className="text-sm text-teal-500 hover:text-teal-700 hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
