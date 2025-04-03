/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
import { useRouter } from "next/navigation";
import { Footer } from "@/components/shared/Footer";
import profileImg from "../../public/salim1.jpg";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    level: "90%",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="text-blue-500 text-3xl" />,
    level: "85%",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-500 text-3xl" />,
    level: "90%",
  },
  {
    name: "React",
    icon: <FaReact className="text-blue-400 text-3xl" />,
    level: "85%",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black text-3xl" />,
    level: "80%",
  },
  {
    name: "Redux",
    icon: <SiRedux className="text-purple-600 text-3xl" />,
    level: "85%",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    level: "80%",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="text-green-700 text-3xl" />,
    level: "95%",
  },
  {
    name: "Java",
    icon: <FaJava className="text-red-500 text-3xl" />,
    level: "75%",
  },
  {
    name: "C++",
    icon: <SiCplusplus className="text-blue-500 text-3xl" />,
    level: "70%",
  },
  {
    name: "DSA",
    icon: <FaJava className="text-yellow-600 text-3xl" />,
    level: "75%",
  },
  {
    name: "OOP",
    icon: <FaJava className="text-indigo-500 text-3xl" />,
    level: "80%",
  },
];

const HomePage = () => {
  interface Project {
    _id: string;
    title: string;
    image: string;
    live_link: string;
    description: string;
  }

  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/projects`,
        {
          cache: "no-store",
        }
      );
      const data = await res.json();
      setProjects(data.slice(0, 3));
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black mt-8">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl  text-white font-bold mb-4"
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
              className="text-gray-600 mb-8"
            >
              I am a MERN stack web developer.
            </motion.p>
            {/*             
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex space-x-4"
            >
              <Link href="/Resume.pdf" download>
                <button className="px-6 py-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition duration-200">
                  Get CV
                </button>
              </Link>
              <Link href="/contact">
                <button className="px-6 py-3 border border-teal-500 text-teal-500 rounded-full hover:bg-teal-50 transition duration-200">
                  Contact
                </button>
              </Link>
            </motion.div> */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 flex space-x-4"
            >
              <Link href="/Resume.pdf" download>
                <motion.button
                  initial={{ boxShadow: "0 0 0px rgba(255, 255, 255, 0)" }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(0, 255, 255, 0.8)",
                      "0 0 30px rgba(0, 255, 255, 1)",
                      "0 0 20px rgba(0, 255, 255, 0.8)",
                    ],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="px-6 py-2 border border-black rounded-full hover:bg-teal-500 hover:text-black transition-all text-teal-500 animate-pulse cursor-pointer"
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
              <Image
                src={profileImg}
                alt="Salim Hossain"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-4xl font-bold text-teal-500 mb-2">01+</h3>
              <p className="text-gray-600">YEARS EXPERIENCE</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-4xl font-bold text-teal-500 mb-2">05+</h3>
              <p className="text-gray-600">CLIENTS WORLDWIDE</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-4xl font-bold text-teal-500 mb-2">10+</h3>
              <p className="text-gray-600">TOTAL PROJECTS</p>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="container mx-auto px-6 py-20 ">
        <h2 className="text-3xl font-bold mt-16 text-center text-white">
          Skills
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0.5, scale: 1 }}
              animate={
                index === currentSkill
                  ? {
                      opacity: 1,
                      scale: 1.1,
                      boxShadow: "0px 0px 20px rgba(255,255,255,0.8)",
                    }
                  : { opacity: 0.8 }
              }
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center p-4  rounded-lg  border border-teal-500"
            >
              {skill.icon}
              <p className="mt-2 text-lg font-semibold text-white">
                {skill.name}
              </p>
              <div className="w-24 md:w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-2 md:mt-3">
                <motion.div
                  className="h-2 bg-teal-400"
                  initial={{ width: 0 }}
                  animate={{ width: skill.level }}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects Section */}
      </div>{" "}
      {/* Closing Skills Section */}
      <div className="border-t border-gray-200 "></div>
      <div className=" py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">
            WORKS
          </h2>
          <p className="text-center text-gray-600 mb-12">SHOWCASE</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project._id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
                onClick={() => router.push(`/projects/${project._id}`)}
              >
                <div className="h-48 relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description.slice(0, 100)}...
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <button className="px-8 py-3 border border-teal-500 text-teal-500 rounded-full hover:bg-teal-500 hover:text-white transition duration-200 cursor-pointer">
                VIEW ALL PROJECTS
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="border-t border-gray-200 mt-8"></div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
