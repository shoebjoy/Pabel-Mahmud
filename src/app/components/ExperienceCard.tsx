import React from "react";

interface ExperienceCardProps {
  company: string;
  position: string;
  details: string;
  time: string;
  image: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, position, details, time, image }) => {
  return (
    <div id="experiences" className="bg-customGray shadow-lg rounded-lg overflow-hidden w-full md:w-full lg:w-full p-4"> {/* Adjust width here */}
      {/* <img src={image} alt={company} className="w-full h-auto mb-4" /> */}
      <h2 className="text-left text-xl font-semibold mb-4">{company}</h2>
      <h3 className="text-left text-lg font-medium mb-4">{position}</h3>
      <p className="text-left text-gray-200 mb-4">{details}</p> {/* Update text color to white */}
      <p className="text-left text-gray-300">{time}</p> {/* Update text color to a lighter gray */}
    </div>
  );
};

export default ExperienceCard;