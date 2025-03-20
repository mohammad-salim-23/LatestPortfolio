/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ProjectPage = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
    client_side_link: "",
    server_side_link: "",
    live_link: "",
  });
  const [editId, setEditId] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`, {
        cache: "no-store",
      });
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  const handleInputChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${editId}`
      : `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`;
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      const updatedData = await res.json();
      setProjects((prevProjects) =>
        editId
          ? prevProjects.map((project) =>
              project._id === editId ? updatedData : project
            )
          : [...prevProjects, updatedData]
      );
      setShowModal(false);
    }
  };

  const handleDelete = async (id: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== id)
      );
    }
  };

  return (
    <div className="p-5">
      <button
        onClick={() => setShowModal(true)}
        className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
      >
        Create Project
      </button>

      <table className="min-w-full border mt-4">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Live Link</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td className="border p-2">{project.title}</td>
              <td className="border p-2">{project.description}</td>
              <td className="border p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </td>
              <td className="border p-2">
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Visit
                </a>
              </td>
              <td className="border p-2">
                <button
                  onClick={() => {
                    setEditId(project._id);
                    setFormData(project);
                    setShowModal(true);
                  }}
                  className="bg-yellow-500 text-white p-1 mx-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-5 rounded">
            <h2 className="text-xl mb-2">{editId ? "Edit Project" : "Create Project"}</h2>
            <input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Title"
              className="border p-2 w-full mb-2"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="border p-2 w-full mb-2"
            />
            <input
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="border p-2 w-full mb-2"
            />
            <input
              name="client_side_link"
              value={formData.client_side_link}
              onChange={handleInputChange}
              placeholder="Client-side Link"
              className="border p-2 w-full mb-2"
            />
            <input
              name="server_side_link"
              value={formData.server_side_link}
              onChange={handleInputChange}
              placeholder="Server-side Link"
              className="border p-2 w-full mb-2"
            />
            <input
              name="live_link"
              value={formData.live_link}
              onChange={handleInputChange}
              placeholder="Live Link"
              className="border p-2 w-full mb-2"
            />
            <button
              onClick={handleSubmit}
              className="bg-teal-500 text-white p-2 rounded hover:bg-teal-700"
            >
              {editId ? "Update" : "Create"}
            </button>
            <button
              onClick={() => {
                setShowModal(false);
                setEditId(null);
                setFormData({
                  title: "",
                  description: "",
                  image: "",
                  client_side_link: "",
                  server_side_link: "",
                  live_link: "",
                });
              }}
              className="ml-2 bg-gray-500 text-white p-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;
