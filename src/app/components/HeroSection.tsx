"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold lg:leading-normal">
            <span className="text-[#1A7BFF]">
              Hello, I&apos;m
            </span>

            <br className="sm:hidden" />

            <span className="text-[#171717] block">
              <TypeAnimation
                sequence={[
                  "Pabel Mahmud",
                  1000,
                  "A Designer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <p className="text-[#171717] text-base sm:text-lg lg:text-xl mt-4.5 mb-4.5">
            Bringing Ideas to Life Through UI/UX and Visual Design.
          </p>

          <div className="mt-6">
            <a
              href="/Pabel Mahmud.pdf"
              download="Pabel_Mahmud_CV.pdf"
              className="px-6 py-3 inline-block rounded-full bg-[#1A7BFF] text-white"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center justify-self-center sm:justify-self-end"
        >
          <div className="relative w-75 h-75 lg:w-125px lg:h-125px">
            <Image
              src="/images/photo.png"
              alt="Pabel Mahmud"
              fill
              className="object-cover rounded-[3xl]"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;