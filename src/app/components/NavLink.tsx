import React from "react";

interface NavLinkProps {
  href: string;
  title: string;
  onClick?: () => void; // keep optional in case you want click handling
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
    // Navigate to href
    window.location.href = href;
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