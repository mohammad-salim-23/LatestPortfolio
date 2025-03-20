/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";

const Blogs = ()=>{
    const [blogs, setBlogs] = useState<any[]>([]);
    const [showModal , setShowModal] = useState(false);
    const [formData , setFormData] = useState({title: '', content: '', image: '', category: ''});
    const [editId , setEditId] = useState(null);

    useEffect(()=>{
        const fetchBlogs = async()=>{
            const res = await fetch(`${process.env.BACKEND_URL}/blogs`, {
                cache: 'no-store'
            });
            const data = await res.json();
            setBlogs(data);
        };
        fetchBlogs();
    }, []);
    const handleInputChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async()=>{
        const method = editId? 'PUT' : 'POST';
        const url = editId ? `${process.env.BACKEND_URL}/blogs/${editId}`: `${process.env.BACKEND_URL}/blogs`;
        const res = await fetch(url, {
            method,
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(formData),
        })
        if(res.ok){
         const updatedData = await res.json();
         setBlogs((prevBlogs) => 
            editId 
                ? prevBlogs.map(blog => blog._id === editId ? updatedData : blog) 
                : [...prevBlogs, updatedData]
        );
        setShowModal(false);
        }
    }
    const handleDelete = async(id)
    return (
   <div>

   </div>
    )
}
export default Blogs;
