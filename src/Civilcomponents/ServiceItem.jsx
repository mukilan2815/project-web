import React, { useState } from "react";
import sim from "../Images/aboutuswindmill.jpg";

const ServiceItem = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`bg-white w-full rounded-lg shadow-md p-4 transform transition-transform duration-300 flex ${
        isHovered ? "opacity-70" : "hover:shadow-lg hover:scale-105"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={sim} alt="Service Image 4" className="w-20 h-20 rounded-full" />
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800 text-center pt-3">
          {title}
        </h3>
        <p className="text-gray-600 text-sm text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
