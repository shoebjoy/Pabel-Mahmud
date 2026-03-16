"use client";
import React from "react";

interface NavLinkProps {
  href?: string;         // optional for scroll-only links
  title: string;
  onClick?: () => void;  // optional click handler
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (href) window.location.href = href; // navigate if href exists
  };

  return (
    <div
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default NavLink;