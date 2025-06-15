import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className="relative py-20 bg-black text-white text-center">
      {/* Background Video */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        
        {/* Optional: dark overlay for better readability */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Let&apos;s work together.</h2>

        <Link href="/contact">
          <button className="px-8 py-3 border border-teal-500 text-teal-500 rounded-full font-medium hover:bg-teal-500 hover:text-black transition duration-200 mb-12 cursor-pointer">
            CONTACT ME
          </button>
        </Link>

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
            href="mailto:your.mohammad.salim.tech@gmail.com"
             target="_blank"
            className="text-white hover:text-teal-500 transition duration-200"
            aria-label="Email"
          >
            <FaEnvelope className="text-2xl" />
          </a>
          <a
            href="https://www.youtube.com/@DSAMaster-wq6lt"
            target="_blank"
            className="text-white hover:text-teal-500 transition duration-200"
            aria-label="Email"
          >
            <FaYoutube className="text-2xl" />
          </a>
        </div>

        <p className="mt-12 text-gray-400">
          © {new Date().getFullYear()} Mohammad Salim. All rights reserved.
        </p>
      </div>
    </div>
  );
};
