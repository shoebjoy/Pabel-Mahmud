"use client"
import React, { FormEvent, useState } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import Modal from "./Modal";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      email: (e.target as any).email.value,
      subject: (e.target as any).subject.value,
      message: (e.target as any).message.value,
      timestamp: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "Email"), data);
      setEmailSubmitted(true);
      setModalContent("Mail sent successfully!");
      setModalOpen(true);
    } catch (error) {
      setModalContent("Failed to send mail. Please try again later!!!");
      setModalOpen(true);
      setIsSuccess(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-[#171717] my-3">
          Let&apos;s Connect
        </h5>
        <p className="text-[#171717] mb-4.5 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/pavelmahmud.sagor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={34}
              className="text-[#171717] text-2xl hover:text-blue-800"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pabel-mahmud-a84605145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={34}
              className="text-[#171717] text-2xl hover:text-blue-500"
            />
          </a>
          <a
            href="https://www.youtube.com/@TheTourGuys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              size={40}
              className="text-[#171717] text-2xl hover:text-red-500"
            />
          </a>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-[#171717] block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#FFFFFF] border border-dashed border-[#E6E6E6] 
                         placeholder-[#9CA2A9] text-[#171717] text-sm 
                         rounded-lg block w-full p-2.5
                         focus:border-[#171717] focus:border-dashed focus:outline-none"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-[#171717] block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#FFFFFF] border border-dashed border-[#E6E6E6] 
                         placeholder-[#9CA2A9] text-[#171717] text-sm 
                         rounded-lg block w-full p-2.5
                         focus:border-[#171717] focus:border-dashed focus:outline-none"
              placeholder="Mail Subject"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-[#171717] block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#FFFFFF] border border-dashed border-[#E6E6E6] 
                         placeholder-[#9CA2A9] text-[#171717] text-sm 
                         rounded-lg block w-full p-2.5 min-h-[120px]
                         focus:border-[#171717] focus:border-dashed focus:outline-none"
              placeholder="Your Message"
            />
          </div>

          <button
            type="submit"
            className="bg-[#1A7BFF] hover:bg-primary-600 text-[#FFFFFF] font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        content={modalContent}
        isSuccess={isSuccess}
      />
    </section>
  );
};

export default EmailSection;