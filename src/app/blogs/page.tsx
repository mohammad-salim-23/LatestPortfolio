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

    useEffect(()=>{
        const fetchBlogs = async()=>{
          try{
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`);
            const data = await res.json();
            setBlogs(data);
          }catch(error){
            console.error("Error fetching blogs: ", error);
          }
        };
        fetchBlogs();
    },[]);
    return (
        <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">Latest Blogs</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-semibold mt-4">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.content}</p>
            <p className="text-sm text-teal-500 mt-2">{blog.category}</p>
          </div>
        ))}
      </div>
    </div>       
    )
}
export default Blogs;