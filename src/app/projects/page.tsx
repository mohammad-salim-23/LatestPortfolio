/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const router = useRouter();

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
  console.log(projects);
  return (
    <div className="p-5 z-1">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project._id}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-200 cursor-pointer relative"
            onClick={() => router.push(`/projects/${project._id}`)}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              className="rounded-md object-cover w-full h-48"
            />
            <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{project.description.slice(0, 100)}...</p>
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 mt-3 inline-block relative  font-bold animate-pulse"
              onClick={(e) => e.stopPropagation()} 
            >
              Live Preview
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
