"use client"
import Image from "next/image";
import presenTation from "../../images/presenTation.jpeg";
import swapnoferi from "../../../public/swapnoferi.jpg";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
} from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiRedux } from "react-icons/si";
import { motion } from "framer-motion";

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

const SkillPage = () => {
  return (
    <div className="relative bg-black">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/skills.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
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
                <Image
                  src={swapnoferi}
                  alt="Leadership Icon"
                  className="mx-auto h-64 w-auto object-contain"
                />
                <p className="text-white mt-2 text-sm md:text-base">
                  Developed strong leadership abilities through active involvement in organizing community and
                  educational initiatives, particularly under the Swapnoferi platform.
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-xl font-bold text-white mb-2">Presentation Skill</h2>
                <Image
                  src={presenTation}
                  alt="Presentation Icon"
                  className="mx-auto h-64 w-auto object-contain"
                />
                <p className="text-white mt-2 text-sm md:text-base">
                  Completed a certified course on Presentation & Public Speaking from 10 Minute School, enhancing my
                  communication and public speaking skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
