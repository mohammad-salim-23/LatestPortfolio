/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
} from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiCplusplus } from "react-icons/si";

import { Footer } from "@/components/shared/Footer";
import presenTation from "../images/presenTation.jpeg";
import profileImg from "../../public/salim1.jpg";
import swapnoferi from "../../public/swapnoferi.jpg";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: "90%", category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: "85%", category: "frontend" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" />, level: "90%", category: "frontend" },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, level: "85%", category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl" />, level: "80%", category: "frontend" },
  { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" />, level: "85%", category: "frontend" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" />, level: "80%", category: "backend" },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 text-3xl" />, level: "95%", category: "backend" },
  { name: "Java", icon: <FaJava className="text-red-500 text-3xl" />, level: "75%", category: "backend" },
  { name: "C++", icon: <SiCplusplus className="text-blue-500 text-3xl" />, level: "70%", category: "backend" },
  { name: "DSA", icon: <FaJava className="text-yellow-600 text-3xl" />, level: "75%", category: "cs-fundamentals" },
  { name: "OOP", icon: <FaJava className="text-indigo-500 text-3xl" />, level: "80%", category: "cs-fundamentals" },
];

const staticProjects = [
  {
    id: 1,
    image: "https://i.ibb.co.com/svXX4m4M/BikeShop.png",
    title: "Bike Shop",
    description: "🚀 Technologies Used:\n✅ Redux – For efficient state management across …",
    live_link: "https://bike-shop-client-six.vercel.app",
    client_side_link: "https://github.com/mohammad-salim-23/Assignment4BikeClient",
    server_side_link: "https://github.com/mohammad-salim-23/BikeShopServer-L2",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/tP26TKBR/giftap1.png",
    title: "Giftap",
    description: "🎯 Project Overview:\nGiftap is an e-commerce platform designed to stre…",
    client_side_link: "https://github.com/Naiemjoyi/giftap_client.git",
    server_side_link: "https://github.com/Naiemjoyi/giftap_server.git",
    live_link: "https://giftap901.web.app/",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/yFXdY3NM/Nestly.png",
    title: "BasaFinder (Smart Rental & Housing Solution)",
    description: "📘 Overview:\nNestly is a smart rental housing platform built with Next.js + TypeScript + React.....",
    client_side_link: "https://github.com/ChowdhuryFatema/nestly-client",
    server_side_link: "https://github.com/isaiful508/nestly-server",
    live_link: "https://nextly-client.vercel.app",
  },
];

const HomePage = () => {
  const router = useRouter();
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black mt-8">
      {/* Hero Section */}
    <div className="relative w-full lg:h-[500px] overflow-hidden">
  {/* Background Video */}
 

  {/* Content Over Video */}
  <div className="container relative z-10 mx-auto px-6 py-20">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl text-white font-bold mb-4"
        >
          Mohammad Salim
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-teal-500 mb-6"
        >
          A WEB DEVELOPER
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-white mb-8"
        >
          I am a MERN stack web developer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex space-x-4"
        >
          <Link href="/updateResume.pdf" download>
            <motion.button
              className="px-6 py-2 border border-black rounded-full bg-teal-500 hover:text-black transition-all text-white animate-pulse cursor-pointer"
              initial={{ boxShadow: "0 0 0px rgba(255, 255, 255, 0)" }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(0, 255, 255, 0.8)",
                  "0 0 30px rgba(0, 255, 255, 1)",
                  "0 0 20px rgba(0, 255, 255, 0.8)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              DOWNLOAD RESUME
            </motion.button>
          </Link>
          <Link href="/contact">
            <button className="px-6 py-3 border bg-white border-teal-500 text-teal-500 rounded-full hover:bg-teal-50 transition duration-200 cursor-pointer">
              Contact
            </button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:w-1/2 flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500">
          <Image src={profileImg} alt="Salim Hossain" />
        </div>
      </motion.div>
    </div>
  </div>
</div>


      

    
      {/* Skills Section */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-white">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Technical Skills</h3>
            {["frontend", "backend", "cs-fundamentals"].map((category) => (
              <div key={category}>
                <h4 className="text-xl font-medium text-white mb-2 capitalize">
                  {category === "cs-fundamentals" ? "CS Fundamentals" : category}
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0.5, scale: 1 }}
                        animate={{
                          opacity: 1,
                          scale: 1.05,
                          boxShadow: "0px 0px 10px rgba(0,255,255,0.4)",
                        }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center p-3 rounded-lg border border-teal-500"
                      >
                        {skill.icon}
                        <p className="mt-2 text-sm font-semibold text-white">{skill.name}</p>
                        <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                          <motion.div
                            className="h-2 bg-teal-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: skill.level }}
                            transition={{ duration: 1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">Leadership Skill</h2>
                <Image src={swapnoferi} alt="Leadership Icon" className="mx-auto h-64 w-auto object-contain" />
                <p className="text-white mt-2 text-sm md:text-base">
                  Developed strong leadership abilities through active involvement in organizing community and
                  educational initiatives, particularly under the Swapnoferi platform.
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">Presentation Skill</h2>
                <Image src={presenTation} alt="Presentation Icon" className="mx-auto h-64 w-auto object-contain" />
                <p className="text-white mt-2 text-sm md:text-base">
                  Completed a certified course on Presentation & Public Speaking from 10 Minute School, enhancing my
                  communication and public speaking skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     {/* Projects Section */}
      <div className="px-6">
         <h2 className="text-3xl font-bold text-center text-white mb-2">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {staticProjects.map((project) => (
      <Link key={project.id} href={`/projects/${project.id}`}>
        <div className="text-white">
          <h3 className="text-white font-bold mb-2">{project.title}</h3>
          <Image
            src={project.image}
            alt={project.title}
            width={300}
            height={200}
            className="rounded-md object-cover w-full h-48"
          />
          <p>{project.description}</p>
        </div>
      </Link>
    ))}
  </div>

  {/* Centered Button Outside the Grid */}
  <div className="flex justify-center mt-10">
    <Link href="/projects">
      <button className="px-8 py-3 border border-teal-500 text-teal-500 rounded-full font-medium hover:bg-teal-500 hover:text-black transition duration-200 mb-12 cursor-pointer">
        View All Projects
      </button>
    </Link>
  </div>
</div>


      {/* CTA Footer Section */}
      <div className="border-t border-gray-200 mt-8" />
      <Footer />
    </div>
  );
};

export default HomePage;
