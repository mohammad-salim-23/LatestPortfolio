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
      server_side_link: "https://github.com/mohammad-salim-23/BikeShopServer-L2"
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/zTBvXK6k/3idiots.png",
      title: "3 Idiots Academy",
      description: "📌 Features:\n✅ Course enrollment for students.\n✅ Instructor applica…",
      client_side_link: "https://github.com/mohammad-salim-23/Edumanage-client-side",
      server_side_link: "https://github.com/mohammad-salim-23/Edumanage-server-side",
      live_link: "https://edumanage-client-side.web.app"
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/KcGgFTGr/food.jpg",
      title: "Restaurant Management",
      description: "📌 Features:\n✅ Buyers can browse & purchase food items.\n✅ Menu mana…",
      client_side_link: "https://github.com/mohammad-salim-23/Assignment-11-private-to-public",
      server_side_link: "https://github.com/mohammad-salim-23/Assignment-11-private-to-public-s…",
      live_link: "https://assignment-11-client-1d064.web.app"
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/tP26TKBR/giftap1.png",
      title: "Giftap",
      description: "🎯 Project Overview:\nGiftap is an e-commerce platform designed to stre…",
      client_side_link: "https://github.com/Naiemjoyi/giftap_client.git",
      server_side_link: "https://github.com/Naiemjoyi/giftap_server.git",
      live_link: "https://giftap901.web.app/"
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
            className="border border-gray-700 bg-gray-900 rounded-lg p-4 shadow-md hover:shadow-white/30 transition duration-300 cursor-pointer relative"
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
            <p className="text-gray-300 text-sm mt-2 whitespace-pre-line">
              {project.description.slice(0, 100)}...
            </p>
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 mt-3 inline-block relative font-semibold hover:underline"
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
