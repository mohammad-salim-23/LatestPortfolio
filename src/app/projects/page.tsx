/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const router = useRouter();

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


  useEffect(() => {
    setProjects(staticProjects);
  }, []);

  return (
    <div className="p-5 z-1 mt-15 lg:mt-15 bg-black">
      <h2 className="text-3xl font-bold text-center text-white mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
         <div
  key={project.id}
  className="border border-gray-700 bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-white/30 transition duration-300 cursor-pointer relative flex flex-col justify-between h-[450px]"
  onClick={() => router.push(`/projects/${project.id}`)}
>
  <Image
    src={project.image}
    alt={project.title}
    width={300}
    height={200}
    className="rounded-md object-cover w-full h-48"
  />
  <h3 className="text-xl font-semibold mt-3 text-white">{project.title}</h3>
  <p className="text-gray-300 text-sm mt-2 whitespace-pre-line line-clamp-4">
    {project.description.slice(0, 100)}...
  </p>
  <p className="text-gray-400 text-xs mt-2 italic line-clamp-2">
    🔮 Future Plan: {project.future_plan}
  </p>
  <a
    href={project.live_link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-green-400 mt-auto inline-block relative font-semibold hover:underline"
    onClick={(e) => e.stopPropagation()}
  >
    🔗 Live Preview
  </a>
</div>

        ))}
      </div>
    </div>
  );
};

export default Projects;
