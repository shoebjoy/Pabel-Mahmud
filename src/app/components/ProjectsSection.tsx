"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
  videoId?: string;
  type?: "image" | "video" | "casestudy";
  caseStudyContent?: string;
}

const projectsData: Project[] = [
  // Logo (ids 1–20)
  { id: 1, title: "Aureafy", description: "A Luxary Tea Brand", image: "/images/projects/aureafy-logo.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 2, title: "Herbves", description: "Herbal Health Care", image: "/images/projects/herbves.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 3, title: "ROOH", description: "ROOH International School", image: "/images/projects/rooh-logo.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 4, title: "Nutri Food", description: "Fresh Fruit & Nuts", image: "/images/projects/nutri-food-logo.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 5, title: "Sweet Bites", description: "Local Live Bakery", image: "/images/projects/sweet-bites logo.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 6, title: "Navi-Ark Logo", description: "Navi-Ark.io", image: "/images/projects/L14.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 7, title: "Tour Guys BD Logo", description: "Tour Guys BD YT", image: "/images/projects/L13.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 8, title: "Aa Mori Bangla Vasa", description: "Star Sangbad", image: "/images/projects/L1.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 9, title: "Vasa Andolone Chandpur", description: "Chandpur TV", image: "/images/projects/L2.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 10, title: "Antivo Logo", description: "Antivo LTD", image: "/images/projects/L3.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 11, title: "Chitrorongo Logo", description: "FB Page Chitrorongo", image: "/images/projects/L4.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 12, title: "Bishad Jibon Logo", description: "FB Page Bishad Jibon", image: "/images/projects/L5.png", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 13, title: "Top 10 Logo", description: "Top 10 YT", image: "/images/projects/L6.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 14, title: "S & A Event Logo", description: "S & A Event Management", image: "/images/projects/L7.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 15, title: "Secret Bangla Fact Logo", description: "Secret Bangla Fact YT", image: "/images/projects/L8.png", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 16, title: "Sob Janta Somser Logo", description: "Sob Janta Somser YT", image: "/images/projects/L9.png", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 17, title: "Unified Football 2024", description: "Special Olympics", image: "/images/projects/L10.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 18, title: "W Win Logo", description: "W Win Website", image: "/images/projects/L11.jpg", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 19, title: "An Unique Love Story Logo", description: "Hi-Tech Furniture & Lifestyle", image: "/images/projects/L12.png", tag: ["Logo"], gitUrl: "/", previewUrl: "/", videoId: "" },

  // Social Media (ids 21–40)
  { id: 21, title: "Taatika", description: "", image: "/images/projects/taatika.jpeg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 22, title: "Maatir Golpo", description: "", image: "/images/projects/maatir-golpo.jpeg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 23, title: "High-Tech", description: "", image: "/images/projects/hi-tech-social.jpeg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 24, title: "Herbs to Your Hair", description: "", image: "/images/projects/Herbs to Your Hair.png", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 25, title: "A Gift From Nature", description: "", image: "/images/projects/A Gift From Nature.png", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 26, title: "Facebook Post Biriyani Moshla", description: "", image: "/images/projects/Biriyani Moshla.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 27, title: "Facebook Post Honey", description: "", image: "/images/projects/Honey.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 28, title: "Facebook Post Oil", description: "", image: "/images/projects/Oil.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 29, title: "Facebook Post Coconut Oil", description: "", image: "/images/projects/Coconut Oil.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 30, title: "Facebook Post Mothers Day", description: "", image: "/images/projects/Mothers Day 2024.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 31, title: "Facebook Post Womens Day", description: "", image: "/images/projects/Womens Day 2024.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 32, title: "Facebook Post World Earth Day", description: "", image: "/images/projects/World Earth Day.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 33, title: "Facebook Post Buddha Purnima", description: "", image: "/images/projects/Buddha Purnima 2024.jpg", tag: ["Social Media"], gitUrl: "/", previewUrl: "/", videoId: "" },

  // Printing (ids 41–50)
  { id: 51, title: "Stationeries", description: "Zariya", image: "/images/projects/zariya.png", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 52, title: "ID Card & Gift", description: "Islamise", image: "/images/projects/islamise-1.png", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 53, title: "Stationeries & Packaging", description: "Islamise", image: "/images/projects/islamise-2.png", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 54, title: "A4 Flayer", description: "Hi-Tech Furniture & Lifestyle", image: "/images/projects/P1.jpg", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 55, title: "Fabric Banner 01", description: "Hi-Tech Furniture & Lifestyle", image: "/images/projects/P2.jpg", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 56, title: "Fabric Banner 02", description: "Hi-Tech Furniture & Lifestyle", image: "/images/projects/P4.jpg", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 57, title: "Billboard Design", description: "Hi-Tech Furniture & Lifestyle", image: "/images/projects/P3.jpg", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },
  { id: 58, title: "X Banner", description: "Hi-Tech Furniture & Lifestyle", image: "/images/projects/P5.jpg", tag: ["Printing"], gitUrl: "/", previewUrl: "/", videoId: "" },

  // Videos (ids 51–70)
  { id: 76, title: "App Promo", description: "", image: "/images/projects/App.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "7ukDZFMBmcA" },
  { id: 77, title: "App Preview (Interactive)", description: "", image: "/images/projects/App2.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "yFmkT5mYvIg" },
  { id: 78, title: "Transform Your Living Room", description: "", image: "/images/projects/Transform Your Living Room.png", tag: ["Video"], gitUrl: "/", previewUrl: "/", videoId: "c0SariHvBNY" },
  { id: 79, title: "Beauty with Botanica", description: "", image: "/images/projects/Beauty with Botanica.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "YswDfjHC6FI" },
  { id: 80, title: "Choice Legacy", description: "", image: "/images/projects/Choice.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "JiSylJxuk08" },
  { id: 81, title: "A Trailer with Suzuki Gixxer", description: "", image: "/images/projects/Suzuki.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "KxAw921Wmo0" },
  { id: 82, title: "Every Stage of Womanhood", description: "", image: "/images/projects/Every Stage of Womanhood.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "W-ct53UW-Es" },
  { id: 83, title: "New Arrival", description: "", image: "/images/projects/Furniture1.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "VxeQ1vuoDbc" },
  { id: 84, title: "China's Death Valley", description: "", image: "/images/projects/Death.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "593qKMyJKBI" },
  { id: 85, title: "Grand Opening Uttara", description: "", image: "/images/projects/Uttara.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "XZvsIZ_Pmr0" },
  { id: 86, title: "Tiffany Blue", description: "", image: "/images/projects/Jersey.png", tag: ["Videos"], gitUrl: "/", previewUrl: "/", videoId: "KLhr-5Kj2xM" },
  // UI/UX Case Studies (example – add your real ones here)
  // UI/UX Case Studies
{
  id: 101,
  title: "Asian Network BD",
  description: "Modern corporate website to showcase services and build credibility",
  image: "/images/projects/asian-hero.png",
  tag: ["UI / UX"],
  gitUrl: "/",
  previewUrl: "/",
  type: "casestudy",
  caseStudyContent: `
![Hero Image](/images/projects/asian-hero.png)

### Asian Network BD — Corporate Website Design

**Role:** UI/UX Design, Website Design  
**Tools:** Figma, WordPress  
**Timeline:** 2–3 Weeks

### Project Goal
Create a modern website that presents the company’s services and improves online credibility.

### 1. Problem / Challenge
The company needed a modern, professional website to clearly present its services and build trust with potential corporate clients.

The previous online presence suffered from several issues:

- Outdated visual design that no longer matched industry standards
- Poor information hierarchy and confusing navigation structure
- Lack of structured, scannable service presentation
- Inconsistent visual identity and weak branding

### 2. Research & Discovery
Research included:

- Competitor website analysis
- Review of modern corporate service websites
- Understanding typical user goals for B2B service providers

### 3. Design Strategy
Main design goals:

- Minimal and professional user interface
- Clear, well-separated service sections
- Intuitive and predictable navigation
- Fully mobile-responsive layout

### 4. Wireframe

![Wireframe Image](/images/projects/asian-wareframing.png)

### 5. Visual Design
The final design features a modern structured layout.

### 6. Responsive Design

![Responsive Design](/images/projects/asian-image-responsive.png)

### 7. Results / Impact

- Improved professional online presence
- Clear service presentation
- Better usability and first impression
- Stronger trust signals

### 8. Final Reflection
This project helped refine my approach to corporate UX design.
`,
},

{
  id: 102,
  title: "Oraville",
  description: "Modern e-commerce website for perfume collections with strong visual appeal and conversion focus.",
  image: "/images/projects/oraville thumbnail.png",
  tag: ["UI / UX"],
  gitUrl: "/",
  previewUrl: "/",
  type: "casestudy",
  caseStudyContent: `
![Hero Image](/images/projects/oraville-hero.png)

### Oraville – Perfume E-commerce Website

**Role:** UI/UX Design, E-commerce Website Design  
**Tools:** Figma, WordPress  
**Timeline:** 3 Weeks

### Project Goal
Design a modern e-commerce website that clearly presents the perfume collections, communicates product value, and encourages quick purchase decisions.

The website balances visual appeal, product storytelling, and conversion-focused design.

### 1. Problem / Challenge
The brand needed a visually engaging online store to showcase their perfume products and simplify the purchasing process.

Key challenges included:

- Presenting multiple perfume variants without overwhelming the user
- Communicating product value and promotional offers clearly
- Creating strong visual appeal suitable for a fragrance brand
- Designing a simple purchase flow for quick ordering

### 2. Research & Discovery

![Research Image](/images/projects/product-research.png)

Research included:

- Competitor analysis of perfume brand websites
- Studying e-commerce UI patterns
- Reviewing fragrance store landing pages

Key findings:

- Users decide within seconds based on visual appeal
- Product imagery is critical for perfume branding
- Limited options with clear bundles improve conversions
- Promotional offers influence purchase decisions

### 3. Design Strategy

Main design goals:

- Strong visual presentation of perfume products
- Clear product bundles and offers
- Simple purchase flow with minimal steps
- Mobile-optimized shopping experience

### 4. Wireframe

![Wireframe Image](/images/projects/ware-framing.png)

### 5. Visual Design

![Visual Design](/images/projects/oraville-visual.png)

### 6. Responsive Design

![Responsive Design](/images/projects/responsive-oravelli.png)

### 7. Results / Impact

- Stronger visual presentation of perfume products
- Clear product bundles simplifying decisions
- Improved purchase flow
- More engaging brand presentation

### 8. Final Reflection
This project strengthened my approach to e-commerce UX design and conversion-focused layouts.
`,
},
  
  // Add more UI/UX projects here with type: "casestudy" and caseStudyContent
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("Logo");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-16 mb-8 md:mb-12">
        My Projects
      </h2>

      <div className="flex flex-row justify-center items-center gap-3 py-6 flex-wrap">
        {["UI / UX", "Logo", "Social Media", "Printing", "Videos"].map((tabName) => (
          <button
            key={tabName}
            onClick={() => handleTagChange(tabName)}
            className={`inline-flex items-center px-5 py-2.5 rounded-full text-base font-medium transition-all duration-200
              ${tag === tabName 
                ? "bg-[#1A7BFF] text-white border-none" 
                : "bg-white text-[#171717] border border-dashed border-[#E6E6E6] hover:border-[#1A7BFF]"
              }`}
          >
            {tabName}
          </button>
        ))}
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              type={project.type || (project.videoId ? "video" : "image")}
              contentUrl={project.image}
              title={project.title}
              description={project.description}
              videoId={project.videoId}
              caseStudyContent={project.caseStudyContent}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;