"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiNextdotjs, SiRedux } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" />, level: "90%" },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" />, level: "85%" },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-3xl" />, level: "80%" },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" />, level: "75%" },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-3xl" />, level: "70%" },
  { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" />, level: "70%" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" />, level: "70%" },
  { name: "MongoDB", icon: <FaDatabase className="text-green-700 text-3xl" />, level: "65%" },
];

const HomePage = () => {
  return (
    <div className="container mx-auto max-w-7xl px-6 text-center flex flex-col items-center">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mt-16"
      >
        DEVELOPER, PROBLEM SOLVER <br /> AND TECH ENTHUSIAST.
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6"
      >
        <Link href="/Resume.pdf" download>
          <button className="px-6 py-2 border border-black rounded-full hover:bg-teal-600 hover:text-white transition-all">
            DOWNLOAD CV
          </button>
        </Link>
      </motion.div>
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mt-8 rounded-lg overflow-hidden shadow-lg w-full md:w-full md:h-[400px]"
      >
        <Image src="/Salim.jpg" alt="Salim" width={800} height={400} className="rounded-lg w-full h-full object-cover" />
      </motion.div>
      
      {/* Skills Section */}
      <h2 className="text-3xl font-bold mt-16">Skills</h2>
      <div className="w-full overflow-hidden whitespace-nowrap mt-6">
        <div className="flex gap-6 animate-marquee">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center mx-4">
              {skill.icon}
              <p className="mt-2 text-lg font-semibold">{skill.name}</p>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                <div className={`h-2 bg-green-400`} style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
