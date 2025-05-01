/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const staticProjects = [
  {
    id: 1,
    image: "https://i.ibb.co.com/svXX4m4M/BikeShop.png",
    title: "Bike Shop",
    description: `📌 Technologies Used:
✅ Redux – For efficient state management across the application.
✅ TypeScript – Ensures type safety and improves maintainability.
✅ Mongoose – Handles database operations seamlessly with MongoDB.

📌 Key Features:
🚴 User Authentication – Secure login and role-based access control.
🚴 Bike Selection & Purchase – Users can browse and buy bikes effortlessly.
🚴 Admin Panel - Admins can add, update, and delete bike listings.`,
    live_link: "https://bike-shop-client-six.vercel.app",
    client_side_link: "https://github.com/mohammad-salim-23/Edumanage-client-side",
    server_side_link: "https://github.com/mohammad-salim-23/BikeShopServer-L2"
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/zTBvXK6k/3idiots.png",
    title: "3 Idiots Academy",
    description: `📌 Features:
 ✅ Course enrollment for students.
 ✅ Instructor applications for teaching.
 ✅ Interactive learning with quizzes & live sessions.
 ✅ Stripe-powered payments for premium courses.
 🛠 Technologies: React, Node.js, Express.js, MongoDB, JWT, Firebase, Stripe API`,
    client_side_link: "https://github.com/mohammad-salim-23/Edumanage-client-side",
    server_side_link: "https://github.com/mohammad-salim-23/Edumanage-server-side",
    live_link: "https://edumanage-client-side.web.app"
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/KcGgFTGr/food.jpg",
    title: "Restaurant Management",
    description: `📌 Features:
 ✅ Buyers can browse & purchase food items.
 ✅ Menu management system for sellers.
 ✅ Order processing & tracking.
 🛠 Technologies: React, Node.js, Express.js, MongoDB, JWT, Firebase`,
    client_side_link: "https://github.com/mohammad-salim-23/Assignment-11-private-to-public",
    server_side_link: "https://github.com/mohammad-salim-23/Assignment-11-private-to-public-server",
    live_link: "https://assignment-11-client-1d064.web.app"
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/tP26TKBR/giftap1.png",
    title: "Giftap",
    description: `🎁 Project Overview:
Giftap is an e-commerce platform designed to streamline the purchase and delivery of digital and physical gifts. Our platform enhances the gifting experience with 🎨 personalized options, 📅 scheduling capabilities, 📍 real-time tracking, and a variety of 🎟️ digital gift cards. Giftap caters to individuals and businesses seeking convenient and flexible gifting solutions.

🚀 Features:
✅ Gift Personalization 📝 – Users can add custom messages for digital gifts, and receivers will get an 📩 email with the message upon delivery.
✅ Gift Scheduling ⏳ – Users can schedule delivery for digital gifts on special occasions and include messages.
✅ Real-time Delivery Tracking 🚚 – Users receive a 📧 payment confirmation email with a 🆔 transaction ID to track order status in real-time and can ❌ cancel orders if logged in.
✅ Digital Gift Cards 🎟️ – Users can purchase and instantly receive digital gift cards (e.g., Netflix, Spotify, Amazon) via email, with scheduling options available.
✅ Multi-User System 👥 – Supports Regular Users, Sellers, and Administrators, with a 📄 seller application system.
✅ Seller Comparison ⚖️ – Users can compare similar products from different sellers based on the current product.
✅ Recent Views 👀 – Stores recently visited products, excluding duplicates.
✅ Chat with Seller via Socket.io 💬 – Users can chat with sellers about products through a 💬 chat button on the product details page.
✅ Notifications 🔔 – Users receive real-time notifications for chat initiations and other relevant updates.
✅ Gift Subscriptions & Occasion-Based Offers 🎉 – Users can view upcoming offers on a 📅 calendar in their dashboard.

🛠️ Technology Stack:
🔹 Frontend: ⚛️ React.js
🔹 Backend: 🚀 Node.js
🔹 Database: 🛢️ MongoDB
🔹 Real-time Communication: 🔄 Socket.io
🔹 Email Service: ✉️ SendGrid or AWS SES
🔹 Authentication: 🔐 JSON Web Tokens (JWT)`,
    client_side_link: "https://github.com/Naiemjoy1/giftap_client/tree/main",
    server_side_link: "https://github.com/Naiemjoyi/giftap_server.git",
    live_link: "https://giftap901.web.app/"
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const index = Number(id);
    const found = staticProjects[index - 1];
    if (found) {
      setProject(found);
    } else {
      console.error("Project not found");
    }
  }, [id]);

  if (!project) return <div className="text-center mt-10 text-red-500">Project not found</div>;

  return (
    <div className="bg-black text-white p-6 mt-15 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{project.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="rounded-md w-full h-auto object-cover"
        />
        <div>
          <p className="whitespace-pre-line text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-col gap-3">
            <a href={project.live_link} target="_blank" className="text-blue-500 underline font-semibold">
              🔗 Live Preview
            </a>
            <a href={project.client_side_link} target="_blank" className="text-teal-500 underline font-semibold">
              💻 Client Code
            </a>
            <a href={project.server_side_link} target="_blank" className="text-purple-500 underline font-semibold">
              🖥️ Server Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
