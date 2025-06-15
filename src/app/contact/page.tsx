/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { sendForm } from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string; isError?: boolean } | null>(null);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    sendForm(
      "service_cu4et4g",
      "template_lcaxfia",
      form.current as HTMLFormElement,
      "Lo1P_XpzWDBttraNB"
    )
      .then(
        (result: any) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error: any) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-black py-10 px-4 sm:px-6 lg:px-8 mt-14  text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">CONTACT INFO</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-teal-600 p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Drop me an email</h3>
                  <p className="text-gray-300">mohammad.salim.tech@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-teal-600 p-3 rounded-full">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">CONTACT US</h3>
                  <p className="text-gray-300">+8801581891023</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-600 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">LOCATION</h3>
                  <p className="text-gray-300">Mirabazar, Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-white">SOCIAL INFO</h3>
              <div className="flex space-x-4">
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100081152050675" className="bg-gray-800 p-3 rounded-full hover:bg-teal-500 hover:text-white transition text-white">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-siddique-mohammad-salim-bb09ba264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-teal-500 hover:text-white transition text-white">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://github.com/mohammad-salim-23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-3 rounded-full hover:bg-teal-500 hover:text-white transition text-white">
                  <FaGithub className="text-xl" />
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
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-white">Let&#39;s work together.</h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="form-control">
                <label className="label text-gray-300 font-medium">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="input w-full px-4 py-2 border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label text-gray-300 font-medium">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="input w-full px-4 py-2 border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label text-gray-300 font-medium">Message</label>
                <textarea
                  name="message"
                  className="textarea w-full px-4 py-2 border border-gray-600 rounded-lg bg-black text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Write your message..."
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
