/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    const fetchProjectDetails = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/projects/${id}`);
        if (!res.ok) throw new Error("Project not found");
        const data = await res.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project details:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetails();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading project details...</p>;
  if (!project) return <p className="text-center mt-10 text-red-500">Project not found.</p>;

  // Add line break before "Key Features"
  const formattedDescription = project.description.includes("Key Features")
    ? project.description.replace("Key Features", "<br /><strong>Key Features</strong>")
    : project.description;

  return (
    <div className="max-w-6xl">
    <h2 className="text-3xl font-bold text-center mt-2 ">{project.title}</h2>
    <div className="container mx-auto  px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        
      <div>
     
      <div className="mt-6 flex justify-center">
        <Image src={project.image} alt={project.title} width={600} height={600} className="rounded-lg" />
      </div>
     
      </div>

      <div className=" flex flex-col gap-4">
      <p className="mt-6 text-lg text-gray-700" dangerouslySetInnerHTML={{ __html: formattedDescription }}></p>
        <a href={project.client_side_link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
          🔗 Client Side Code
        </a>
        <a href={project.server_side_link} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
          🔗 Server Side Code
        </a>
        <a href={project.live_link} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline font-bold animate-pulse">
          🚀 Live Preview
        </a>
      </div>
    </div>
    </div>
  );
};

export default ProjectDetails;
