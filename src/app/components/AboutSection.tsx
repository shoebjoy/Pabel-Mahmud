"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";

interface SkillProgressBarProps {
  label: string;
  percentage: number;
}

const SkillProgressBar: React.FC<SkillProgressBarProps> = ({ label, percentage }) => {
  return (
    <div className="mb-4">
      <p className="text-base text-[#171717] mb-1 font-medium">{label}</p>
      <div className="h-2.5 bg-[#FFFFFF] rounded-full border border-dashed border-[#E6E6E6] overflow-hidden">
        <div
          className="h-full bg-[#1A7BFF] rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

interface TabData {
  title: string;
  id: string;
  content: JSX.Element;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        <SkillProgressBar label="Figma" percentage={80} />
        <SkillProgressBar label="Adobe Photoshop" percentage={90} />
        <SkillProgressBar label="Adobe Illustrator" percentage={75} />
        <SkillProgressBar label="Adobe Audition" percentage={80} />
        <SkillProgressBar label="Adobe Premiere Pro" percentage={90} />
        <SkillProgressBar label="Adobe After Effects" percentage={85} />
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-5 space-y-6 text-[#171717] text-base">
        <li>
          <span className="font-medium">2025-Present</span>
          <br />
          User Hub
          <br />
          72/A Tejkunipara-Nakhalpara Rd, Dhaka 1215
          <br />
          Diploma in User Experience Design
        </li>
        <li>
          <span className="font-medium">2019-2023</span>
          <br />
          Anhui University of Technology
          <br />
          Ma&apos;anshan, Anhui, China
          <br />
          Civil Engineering
        </li>
      </ul>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");

  const handleTabChange = (id: string) => {
    setTab(id);
  };

  return (
    <section className="text-[#171717]" id="about">
      <div className="py-12 px-0 xl:px-0">
        <div className="grid md:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left: Get to know button + Title + Description */}
          <div className="flex flex-col">
            {/* Updated "Get to know" button with ✨ Highlights icon in #1A7BFF */}
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 rounded-full border border-dashed border-[#E6E6E6] bg-white px-5 py-2 text-base font-medium text-[#171717] w-[160px] h-[40px] cursor-default"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                fill="#1A7BFF"
              >
                <path d="M16 2C18.5 9.5 22.5 13.5 30 16C22.5 18.5 18.5 22.5 16 30C13.5 22.5 9.5 18.5 2 16C9.5 13.5 13.5 9.5 16 2Z"/>
              </svg>

              <span>Get to know</span>
            </button>

            <h2 className="text-4xl font-bold text-[#171717] mb-4.5 mt-4.5">
              About Me
            </h2>

            <p className="text-base leading-relaxed text-[#171717] text-justify">
              I’m a UI/UX and Brand Designer who enjoys turning ideas into visually engaging and easy-to-use experiences. With a strong focus on clarity, usability, and visual storytelling, I design interfaces and brand identities that feel meaningful and connect naturally with people.
              <br/>
              For me, design is more than making things look good. It’s about understanding users, solving real problems, and creating experiences that feel simple and intuitive. I enjoy exploring ideas, refining details, and building visual systems that help brands communicate clearly. My goal is always to create thoughtful, functional designs that not only look great but also make digital products easier and more enjoyable to use.
            </p>
          </div>

          {/* Right: Tabs + Content */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-start gap-6 mb-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                <span className="text-4xl text-[#171717]">Skills</span>
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                <span className="text-4xl text-[#171717]">Education</span>
              </TabButton>
            </div>

            <div className="mt-2">
              {TAB_DATA.find((t) => t.id === tab)?.content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;