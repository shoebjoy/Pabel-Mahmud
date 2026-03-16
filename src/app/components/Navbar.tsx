"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

interface NavLinkItem {
  title: string;
  target: string;
}

const navLinks: NavLinkItem[] = [
  {
    title: "About",
    target: "#about",
  },
  {
    title: "Work Experiences",
    target: "#experiences",
  },
  {
    title: "Projects",
    target: "#projects",
  },
  {
    title: "Contact",
    target: "#contact",
  },
];

const Navbar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  const scrollToSection = (target: string) => {
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
    });
    setNavbarOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div
          onClick={() => scrollToSection("#home")} // Assuming there's a home section at the top
          className="text-2xl md:text-5xl text-white font-semibold cursor-pointer"
        >
          <img src="images/Pavel Mahmud Logo_1.gif" alt="GIF Logo" className="h-12 md:h-16" />
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  onClick={() => scrollToSection(link.target)}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;