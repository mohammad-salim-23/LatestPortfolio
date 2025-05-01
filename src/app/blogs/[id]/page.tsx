/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  content: string;
  image: string;
  category: string;
  postedDate: string;
};

const sampleBlogs: Blog[] = [
    {
      id: "1",
      title: "Mastering Object-Oriented Programming",
      content:
        "Object-Oriented Programming (OOP) is a paradigm centered around the concept of objects. It helps developers write more modular, scalable, and reusable code. Key principles of OOP include:\n\n1️⃣ **Encapsulation** – bundling data and functions that operate on that data within one unit, like a class. This restricts direct access to some of an object's components, which is a means of preventing accidental interference and misuse of the data.\n\n2️⃣ **Inheritance** – allows a class to inherit properties and behavior (methods) from another class. This promotes code reusability and a natural hierarchy.\n\n3️⃣ **Polymorphism** – enables one interface to be used for a general class of actions. For example, a function can process objects differently based on their class.\n\n4️⃣ **Abstraction** – hides complex reality while exposing only the necessary parts. In JS, this can be simulated using constructor functions and prototypes or ES6 classes.\n\nPractical examples in JavaScript include creating `User`, `Admin`, or `Product` classes where different roles share common methods like `login()` but also have their own behaviors. With modern JS, we use `class`, `constructor`, `extends`, and `super` to implement OOP. Mastering these concepts is essential for building clean, maintainable, and scalable codebases.",
      image: "https://i.pinimg.com/736x/5a/2d/56/5a2d561e9823dacfecdda467290b4724.jpg",
      category: "OOP",
      postedDate: "2025-04-22",
    },
    {
      id: "2",
      title: "Top 10 Coding Problems for Competitive Programming",
      content:
        "Competitive programming (CP) helps sharpen your algorithmic thinking and coding speed. Here are 10 must-solve problems and concepts:\n\n1️⃣ **Binary Search on Answer** – Ideal for optimization problems.\n2️⃣ **Two Pointers** – Great for array problems involving pairs or subarrays.\n3️⃣ **DFS/BFS Traversal** – Used for tree and graph-based questions.\n4️⃣ **Sliding Window** – Solves problems efficiently over a range.\n5️⃣ **Dynamic Programming (DP)** – Core topic. Solve classic problems like Longest Common Subsequence, 0/1 Knapsack, and Fibonacci.\n6️⃣ **Greedy Algorithms** – Where locally optimal decisions lead to a globally optimal solution.\n7️⃣ **Prefix Sum / Difference Array** – For range queries.\n8️⃣ **Union-Find (Disjoint Sets)** – Used in graph connectivity and Kruskal’s MST.\n9️⃣ **Bit Manipulation** – XOR, AND, OR tricks.\n🔟 **Modular Arithmetic** – For large number calculations.\n\nSolving these topics on platforms like Codeforces, AtCoder, and LeetCode will improve your thinking, reduce time complexity, and prepare you for contests and interviews.",
      image: "https://i.pinimg.com/736x/57/b9/51/57b9516d6c1c45db6548c45f6d2e44f9.jpg",
      category: "CP",
      postedDate: "2025-04-20",
    },
    {
      id: "3",
      title: "Understanding Data Structures & Algorithms",
      content:
        "To write efficient code, a solid understanding of Data Structures & Algorithms (DSA) is essential. Here's a breakdown of what's important:\n\n🔹 **Arrays & Strings** – Basics like searching, sorting, and manipulating.\n🔹 **Linked Lists** – Singly and doubly linked lists are used in many real-world systems.\n🔹 **Stacks & Queues** – LIFO and FIFO structures. Solve problems like balancing parentheses or evaluating expressions.\n🔹 **Trees & Graphs** – DFS/BFS, traversals, shortest path (Dijkstra, Bellman-Ford), MSTs.\n🔹 **Hash Tables** – Used for quick lookups, an essential part of almost every application.\n🔹 **Sorting Algorithms** – Bubble, Merge, Quick, and their complexities.\n🔹 **Recursion & Backtracking** – Solving mazes, permutations, and combinations.\n🔹 **Dynamic Programming** – Optimal substructure problems like LIS, rod cutting, coin change.\n\nApproaching problems with clarity on time and space complexity and practicing regularly can significantly enhance your problem-solving skills for interviews and real-world projects.",
      image: "https://i.pinimg.com/736x/f5/cf/03/f5cf03f7f6f1a7ea526722cafbb32529.jpg",
      category: "DSA",
      postedDate: "2025-04-18",
    },
    {
      id: "4",
      title: "Building Scalable Apps with Next.js 14",
      content:
        "Next.js 14 is a powerful React framework for building full-stack web apps. Here's what makes it scalable and efficient:\n\n✅ **App Router & File-based Routing** – You can define routes using folder structure under `app/`. It also supports nested layouts and dynamic routes.\n✅ **Server Actions** – A new way to handle server logic directly inside your components without API routes.\n✅ **Image Optimization** – Use `next/image` for automatic image resizing, lazy loading, and better performance.\n✅ **Static & Server-side Rendering (SSR)** – Choose rendering methods per page. `generateStaticParams` for static pages, and `fetch()` for server-side.\n✅ **API Routes** – Handle backend logic inside `/api` folder.\n✅ **Middleware** – Implement redirects, authentication checks, and headers at edge locations.\n✅ **Deployment** – Vercel offers seamless deployment with CI/CD, custom domains, and analytics.\n\nThis stack is perfect for large-scale apps like e-commerce, SaaS, and blogs. The modular structure, performance features, and TypeScript support make Next.js a solid choice.",
      image: "https://i.pinimg.com/736x/bb/7e/d0/bb7ed0738a635022cc2a93599e0b8902.jpg",
      category: "Next.Js",
      postedDate: "2025-04-15",
    },
    {
      id: "5",
      title: "10 ES6 Features Every Developer Should Know",
      content:
        "ES6 (ECMAScript 2015) brought significant improvements to JavaScript, making code more concise and readable. Here are 10 features every developer should master:\n\n1️⃣ **Arrow Functions** – Shorter syntax for writing functions: `const add = (a, b) => a + b;`\n2️⃣ **Template Literals** – Use backticks for multi-line strings and interpolation: `` `Hello, ${name}` ``\n3️⃣ **Destructuring** – Extract values from objects/arrays easily: `const {name, age} = user;`\n4️⃣ **Spread & Rest Operators** – `...` for copying, merging, and function parameters.\n5️⃣ **Default Parameters** – Set default values in functions: `function greet(name = 'Guest')`\n6️⃣ **Classes** – Cleaner syntax for OOP in JS.\n7️⃣ **Modules** – `export` and `import` statements for better file structure.\n8️⃣ **Promises** – Handle asynchronous code without callbacks: `fetch().then().catch()`\n9️⃣ **Let & Const** – Block-scoped variables for better safety.\n🔟 **For...of Loop** – Loop through iterable objects.\n\nUnderstanding and using these features makes your code modern, easier to debug, and more maintainable.",
      image: "https://i.pinimg.com/736x/89/c6/36/89c63670d9ca886db068c3cb501c9ee7.jpg",
      category: "JavaScript",
      postedDate: "2025-04-12",
    },
  ];

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const found = sampleBlogs.find((blog) => blog.id === id);
    if (found) {
      setBlog(found);
    } else {
      console.error("Blog not found");
    }
  }, [id]);

  if (!blog)
    return <div className="text-center mt-10 text-red-500">Blog not found</div>;

  return (
    <div className="p-6 mt-15 max-w-7xl mx-auto bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">{blog.title}</h1>
      <p className="text-center text-sm text-gray-400 mb-6">
        📅 {blog.postedDate} | 📚 {blog.category}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={200}
          className="rounded-md w-full h-128 object-cover"
        />
        <div>
          <p className="text-gray-200 whitespace-pre-line leading-relaxed">
            {blog.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
