/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
    isError?: boolean;
  } | null>(null);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
  
      setSubmitStatus({ 
        success: true, 
        message: result.message || 'Message sent successfully!' 
      });
      reset();
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to send message',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-24 lg:mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">CONTACT INFO</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-teal-100 p-3 rounded-full">
                  <FaEnvelope className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">MAIL US</h3>
                  <p className="text-gray-600">mohammadsalim017427@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-teal-100 p-3 rounded-full">
                  <FaPhoneAlt className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CONTACT US</h3>
                  <p className="text-gray-600">+8801581891023</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-teal-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">LOCATION</h3>
                  <p className="text-gray-600">Mirabazar, Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">SOCIAL INFO</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                  <FaFacebook className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/abdullah-siddique-mohammad-salim-bb09ba264" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-gray-100 p-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="https://github.com/mohammad-salim-23" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-gray-100 p-3 rounded-full hover:bg-teal-500 hover:text-white transition">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Let&#39;s work together.</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{String(errors.name.message)}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{String(errors.email.message)}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
                {errors.subject && <p className="mt-1 text-sm text-red-600">{String(errors.subject.message)}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register("message", { required: "Message is required" })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-600">{String(errors.message.message)}</p>}
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-md ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-teal-500 text-white py-3 px-4 rounded-md hover:bg-teal-600 transition duration-200 font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;