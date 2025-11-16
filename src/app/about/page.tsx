'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="relative bg-black min-h-screen py-16 px-6 md:px-8">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
      </div>

      <div className="relative z-20 container mx-auto grid md:grid-cols-2 gap-6 lg:gap-10 items-start md:items-center">
        {/* Left Side */}
        <div className="flex flex-col justify-center ml-12">
          <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg border-4 border-teal-500 mb-4">
            <Image
              src="/salim.jpg"
              alt="Salim Hossain"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
           <Link href="/FullStackDeveloper.pdf" download>
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
          
        </div>

        {/* Right Side */}
        <div className="lg:mr-12">
          <h2 className="text-3xl font-bold text-white mb-4 mt-4">About Me</h2>
          <p className="text-gray-200 mb-4">
            I&#39;m <span className="text-teal-400 font-semibold">Mohammad Salim</span>, a passionate web developer and a CSE student currently in my <span className="text-teal-400 font-semibold">3rd year at Metropolitan University</span>, Sylhet.
          </p>
          <p className="text-gray-200 mb-4">
            I enjoy solving problems through code, especially via <span className="text-teal-400 font-semibold">competitive programming</span>. 
            Besides tech, I love to travel and read books during my free time.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><span className="font-semibold text-white">Field:</span> Web Development</li>
            <li><span className="font-semibold text-white">Studies:</span> CSE, Metropolitan University</li>
            <li><span className="font-semibold text-white">Hobbies:</span> Traveling, Reading Books</li>
            <li><span className="font-semibold text-white">Skills:</span> React, Next.js, TypeScript, Redux, MongoDB, Mongoose</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
