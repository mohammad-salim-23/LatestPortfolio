import Link from "next/link";
import { FaHome, FaBlog, FaRProject } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="bg-slate-100 min-h-screen p-2 md:p-4 rounded-xl w-16 md:w-60 flex flex-col items-center md:items-start">
      <ul className="flex flex-col w-full space-y-2 md:space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex flex-col md:flex-row items-center space-y-0 md:space-x-2 p-2 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm  md:inline">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="flex flex-col md:flex-row items-center space-y-0 md:space-x-2 p-2 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBlog className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm  md:inline">Blogs</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projects"
            className="flex flex-col md:flex-row items-center space-y-0 md:space-x-2 p-2 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaRProject className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm  md:inline">Project</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/message"
            className="flex flex-col md:flex-row items-center space-y-0 md:space-x-2 p-2 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaMessage className="h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm md:inline">Message</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
