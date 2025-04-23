"use client"

import Link from "next/link";
import { useState } from "react";

// Type Definitions
type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  console.log("session...",session);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//  const [token , setToken] = useState<string | null>(null);

// useEffect(()=>{
//   // This code runs only on the client side after hydration
//   setToken(localStorage.getItem("accessToken"));
// },[])
//  const handleLogout = () => {
//   signOut();
//   localStorage.removeItem("accessToken");
//  }
  return (
   <div className="fixed top-0 left-0 right-0 z-50 w-full bg-black border-b py-4 shadow-sm mb-8">
     <div className=" mx-auto flex items-center justify-between mr-12 ">
      {/* Left Side: Logo & Mobile Menu */}
      <div className="flex items-center">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navbar Logo with Glowing Effect */}
        <Link
          href="/"
          className="ml-4 text-xl font-semibold text-gray-800 relative"
        >
          <span className="relative text-teal-500 font-bold animate-pulse">
            Salim
          </span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex">
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-teal-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="/blogs">Blog</Link>
          </li>
          <li className="hover:text-teal-600">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-4 bg-white shadow-md rounded-md w-52 p-2 lg:hidden z-10">
          <li className="py-2 px-4 hover:bg-teal-100">
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 px-4 hover:bg-teal-100">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="py-2 px-4 hover:bg-teal-100">
            <Link href="/blogs">Blog</Link>
          </li>
          <li className="py-2 px-4 hover:bg-teal-100">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      )}

      {/* Right Side: Login/Logout Button
      <div className="flex items-center">
        {session?.user || token ? (
          <button
            onClick={handleLogout}
            className="border border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-black transition duration-200 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="border border-teal-500 text-teal-500 px-5 py-2 rounded-full hover:bg-teal-500 hover:text-black transition duration-200"
          >
            Login
          </Link>
        )}
      </div> */}
    </div>
   </div>
  );
};

export default Navbar;
