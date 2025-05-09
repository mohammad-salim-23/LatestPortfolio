/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
const staticProjects = [
  {
    id: 1,
    image: "https://i.ibb.co.com/svXX4m4M/BikeShop.png",
    title: "Bike Shop",
    description: "🚀 Technologies Used:\n✅ Redux – For efficient state management across …",
    live_link: "https://bike-shop-client-six.vercel.app",
    client_side_link: "https://github.com/mohammad-salim-23/Assignment48BikeClient",
    server_side_link: "https://github.com/mohammad-salim-23/BikeShopServer-L2",
    future_plan: `🔹 Add user reviews and real-time inventory tracking\n🔹 Implement loyalty points system for frequent buyers\n🔹 Integrate location-based delivery tracking`,
    technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    core_features: [
      "User authentication and authorization",
      "Product listing and filtering",
      "Cart and order system",
      "Admin dashboard with inventory control"
    ]
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/tP26TKBR/giftap1.png",
    title: "Giftap",
    description: "🎯 Project Overview:\nGiftap is an e-commerce platform designed to stre…",
    client_side_link: "https://github.com/Naiemjoyi/giftap_client.git",
    server_side_link: "https://github.com/Naiemjoyi/giftap_server.git",
    live_link: "https://giftap901.web.app/",
    future_plan: `🔹 Integrate AI-powered recommendation system\n🔹 Add order tracking and SMS notifications\n🔹 Include gift wrapping and personalized messages feature`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Firebase", "Socket.io"],
    core_features: [
      "Real-time gift customization and delivery scheduling",
      "User and seller dashboards",
      "Wishlist, cart, and order tracking",
      "Secure payment with SSLCommerz"
    ]
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/yFXdY3NM/Nestly.png",
    title: "BasaFinder (Smart Rental & Housing Solution)",
    description: "📘 Overview:\nNestly is a smart rental housing platform built with Next.js + TypeScript + React.\n✅ JWT authentication\n✅ Dashboards\n✅ Listings\n✅ Stripe payment\n✅ Responsive design",
    client_side_link: "https://github.com/ChowdhuryFatema/nestly-client",
    server_side_link: "https://github.com/isaiful508/nestly-server",
    live_link: "https://nextly-client.vercel.app",
    future_plan: `🔹 Launch mobile app and add AI-based rent prediction\n🔹 Add real-time chat between tenant and landlord\n🔹 Enable virtual tour integration for listings`,
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "JWT", "Stripe", "MongoDB", "Express.js"],
    core_features: [
      "User role-based dashboards (Admin, Tenant, Landlord)",
      "Rental listings with filtering and map view",
      "Secure booking with Stripe",
      "JWT-based authentication"
    ]
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/zTBvXK6k/3idiots.png",
    title: "3 Idiots Academy",
    description: "📌 Features:\n✅ Course enrollment\n✅ Instructor application\n✅ Dashboard",
    client_side_link: "https://github.com/mohammad-salim-23/Edumanage-client-side",
    server_side_link: "https://github.com/mohammad-salim-23/Edumanage-server-side",
    live_link: "https://edumanage-client-side.web.app",
    future_plan: `🔹 Add certificate generation and quiz system\n🔹 Include live classes with scheduling support\n🔹 Integrate student performance analytics dashboard`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Firebase", "Stripe"],
    core_features: [
      "User roles: Admin, Instructor, Student",
      "Secure login and enrollment",
      "Course management system",
      "Real-time feedback and Stripe payment integration"
    ]
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const index = Number(id);
    const found = staticProjects[index - 1];
    if (found) {
      setProject(found);
    } else {
      console.error("Project not found");
    }
  }, [id]);

  if (!project) return <div className="text-center mt-10 text-red-500">Project not found</div>;

return (
  <div className="min-h-screen bg-black text-white p-6 py-12 flex items-center justify-center">
    <div className="w-full max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 text-center mt-8">{project.title}</h1>

      {/* Image at the top */}
      <div className="mb-10">
        <Image
    src={project.image}
    alt={project.title}
    width={1200}
    height={0}
    className="rounded-md w-full max-h-65 object-cover shadow-xl"
  />
        
      </div>

      {/* Details below in column-wise layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-pink-400 mb-2">🎯 Project Overview:</h2>
            <p className="whitespace-pre-line text-gray-300">{project.description}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-green-400 mb-2">📈 Future Plans:</h2>
            <p className="whitespace-pre-line text-gray-300">{project.future_plan}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-yellow-400 mb-2">⚙️ Core Features:</h2>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {project.core_features?.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">🧩 Technologies Used:</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-2 pt-4">
            <a href={project.live_link} target="_blank" className="text-blue-400 underline font-semibold block">
              🔗 Live Preview
            </a>
            <a href={project.client_side_link} target="_blank" className="text-teal-400 underline font-semibold block">
              💻 Client Code
            </a>
            <a href={project.server_side_link} target="_blank" className="text-purple-400 underline font-semibold block">
              🖥️ Server Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

};

export default ProjectDetails;
