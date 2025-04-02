import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="py-20 bg-black text-white text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Let&apos;s work together.</h2>
        
        {/* Contact Button */}
        <Link href="/contact">
          <button className="px-8 py-3  border border-teal-500 text-teal-500 rounded-full font-medium hover:bg-teal-500 hover:text-black transition duration-200 mb-12 cursor-pointer">
            CONTACT ME
          </button>
        </Link>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/mohammad-salim-23" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-teal-500 transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/abdullah-siddique-mohammad-salim-bb09ba264" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-teal-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          
         
          
          <a 
            href="mailto:your.mohammadsalim017427@gmail.com" 
            className="text-white hover:text-teal-500 transition duration-200"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-gray-400">
          © {new Date().getFullYear()} Mohammad Salim. All rights reserved.
        </p>
      </div>
    </div>
  );
};