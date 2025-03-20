/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Image from 'next/image';

const Blogs = ()=>{
    const [blogs, setBlogs] = useState<any[]>([]);
    const [showModal , setShowModal] = useState(false);
    const [formData , setFormData] = useState({title: '', content: '', image: '', category: ''});
    const [editId , setEditId] = useState(null);

    useEffect(()=>{
        const fetchBlogs = async()=>{
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`, {
                cache: 'no-store'
            });
            const data = await res.json();
            setBlogs(data);
        };
        fetchBlogs();
    }, []);
    const handleInputChange = (e : any)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };
    const handleSubmit = async()=>{
        const method = editId? 'PUT' : 'POST';
        const url = editId ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${editId}`: `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs`;
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
    const handleDelete = async(id : any)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`,
            {method: 'DELETE'}
        )
        if(res.ok){
            setBlogs ((prevBlogs)=> prevBlogs.filter(blog=> blog._id!== id));
           
        }
    }
    return (
        <div className="p-5">
        <button onClick={() => setShowModal(true)} className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200">Create Blog</button>
        <table className="min-w-full border mt-4">
          <thead>
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Image</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td className="border p-2">{blog.title}</td>
                <td className="border p-2">{blog.category}</td>
                <td className="border p-2"><Image src={blog.image} alt={blog.title} width={64} height={64} className="object-cover" /></td>
                <td className="border p-2">
                  <button onClick={() => { setEditId(blog._id); setFormData(blog); setShowModal(true); }} className="bg-yellow-500 text-white p-1 mx-2 rounded">Edit</button>
                  <button onClick={() => handleDelete(blog._id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-5 rounded">
              <h2 className="text-xl mb-2">{editId ? 'Edit Blog' : 'Create Blog'}</h2>
              <input name="title" value={formData.title} onChange={handleInputChange} placeholder="Title" className="border p-2 w-full mb-2" />
              <input name="category" value={formData.category} onChange={handleInputChange} placeholder="Category" className="border p-2 w-full mb-2" />
              <input name="image" value={formData.image} onChange={handleInputChange} placeholder="Image URL" className="border p-2 w-full mb-2" />
              <textarea name="content" value={formData.content} onChange={handleInputChange} placeholder="Content" className="border p-2 w-full mb-2"></textarea>
              <button onClick={handleSubmit} className="bg-teal-500 text-white p-2 rounded hover:bg-teal-700">{editId ? 'Update' : 'Create'}</button>
              <button onClick={() => { setShowModal(false); setEditId(null); setFormData({ title: '', content: '', image: '', category: '' }); }} className="ml-2 bg-gray-500 text-white p-2 rounded">Cancel</button>
            </div>
          </div>
        )}
      </div>
    )
}
export default Blogs;
